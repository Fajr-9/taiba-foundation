// ============================================
// ADMIN PANEL - GITHUB API VERSION
// ============================================

// Password (يمكن تغييرها)
const ADMIN_PASSWORD = 'tayba2024';

// GitHub Configuration (stored in localStorage)
let githubConfig = {
    username: '',
    repo: '',
    token: ''
};

// Load projects
let projects = {
    ongoing: [],
    completed: []
};

// ============================================
// NUMBER CONVERSION (Arabic/English)
// ============================================

// Arabic digits: ٠١٢٣٤٥٦٧٨٩
const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Check if current language is Arabic
function isArabic() {
    return document.documentElement.dir === 'rtl' || 
           document.documentElement.lang === 'ar' ||
           document.querySelector('html[dir="rtl"]') !== null;
}

// Convert number to Arabic digits
function toArabicDigits(num) {
    if (typeof num === 'number') {
        num = num.toString();
    }
    return num.replace(/\d/g, (digit) => arabicDigits[parseInt(digit)]);
}

// Convert number to English digits
function toEnglishDigits(num) {
    if (typeof num === 'number') {
        num = num.toString();
    }
    return num.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (digit) => {
        const index = arabicDigits.indexOf(digit);
        return index !== -1 ? englishDigits[index] : digit;
    });
}

// Convert number based on current language
function formatNumber(num) {
    if (num === null || num === undefined) return '';
    const numStr = num.toString();
    return isArabic() ? toArabicDigits(numStr) : toEnglishDigits(numStr);
}

// Parse number from Arabic or English digits
function parseNumber(str) {
    if (!str) return 0;
    const englishStr = toEnglishDigits(str);
    return parseInt(englishStr) || 0;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadGitHubConfig();
    loadProjects();
    setupEventListeners();
});

// ============================================
// AUTHENTICATION
// ============================================

function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('admin_authenticated') === 'true';
    if (isAuthenticated) {
        showAdminPanel();
    } else {
        showLoginScreen();
    }
}

function showLoginScreen() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('admin-panel').style.display = 'none';
}

function showAdminPanel() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('login-error');
    
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('admin_authenticated', 'true');
        showAdminPanel();
        errorMsg.textContent = '';
    } else {
        errorMsg.textContent = 'كلمة المرور غير صحيحة';
        document.getElementById('password-input').value = '';
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    sessionStorage.removeItem('admin_authenticated');
    showLoginScreen();
});

// ============================================
// GITHUB CONFIG
// ============================================

function loadGitHubConfig() {
    const saved = localStorage.getItem('github_config');
    if (saved) {
        githubConfig = JSON.parse(saved);
        // Fill settings form
        document.getElementById('github-username').value = githubConfig.username || '';
        document.getElementById('github-repo').value = githubConfig.repo || '';
        document.getElementById('github-token').value = githubConfig.token ? '••••••••' : '';
    }
}

document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    githubConfig.username = document.getElementById('github-username').value.trim();
    githubConfig.repo = document.getElementById('github-repo').value.trim();
    const tokenInput = document.getElementById('github-token').value.trim();
    
    // Only update token if new value provided (not the masked value)
    if (tokenInput && !tokenInput.startsWith('••••')) {
        githubConfig.token = tokenInput;
    }
    
    localStorage.setItem('github_config', JSON.stringify(githubConfig));
    showStatus('تم حفظ الإعدادات بنجاح', 'success');
});

// ============================================
// LOAD PROJECTS FROM GITHUB
// ============================================

async function loadProjects() {
    try {
        // Try to load from GitHub first
        if (githubConfig.username && githubConfig.repo) {
            const url = `https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/projects.json`;
            const response = await fetch(url);
            
            if (response.ok) {
                const data = await response.json();
                // Fix encoding for Arabic characters
                const base64Content = data.content.replace(/\s/g, '');
                const binaryString = atob(base64Content);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }
                const content = new TextDecoder('utf-8').decode(bytes);
                projects = JSON.parse(content);
                renderProjects();
                return;
            }
        }
        
        // Fallback to local JSON file
        const response = await fetch('projects.json');
        if (response.ok) {
            projects = await response.json();
            renderProjects();
        }
    } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback to local JSON
        try {
            const response = await fetch('projects.json');
            if (response.ok) {
                projects = await response.json();
                renderProjects();
            }
        } catch (e) {
            console.error('Error loading local JSON:', e);
        }
    }
}

// ============================================
// SAVE PROJECTS TO GITHUB
// ============================================

async function saveProjects() {
    if (!githubConfig.username || !githubConfig.repo || !githubConfig.token) {
        showStatus('⚠️ يجب إعداد GitHub أولاً في تبويب الإعدادات', 'error');
        return false;
    }
    
    try {
        showStatus('جاري الحفظ...', 'info');
        
        // Get current file SHA (needed for update)
        const getUrl = `https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/projects.json`;
        const getResponse = await fetch(getUrl, {
            headers: {
                'Authorization': `token ${githubConfig.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        let sha = null;
        if (getResponse.ok) {
            const data = await getResponse.json();
            sha = data.sha;
        }
        
        // Prepare file content with proper UTF-8 encoding
        const content = JSON.stringify(projects, null, 2);
        // Convert to UTF-8 bytes then to base64
        const utf8Bytes = new TextEncoder().encode(content);
        let binaryString = '';
        for (let i = 0; i < utf8Bytes.length; i++) {
            binaryString += String.fromCharCode(utf8Bytes[i]);
        }
        const encodedContent = btoa(binaryString);
        
        // Update file
        const updateUrl = `https://api.github.com/repos/${githubConfig.username}/${githubConfig.repo}/contents/projects.json`;
        const updateResponse = await fetch(updateUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${githubConfig.token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Update projects.json',
                content: encodedContent,
                sha: sha
            })
        });
        
        if (updateResponse.ok) {
            showStatus('✅ تم حفظ المشاريع بنجاح على GitHub!', 'success');
            // Reload projects after a short delay
            setTimeout(() => {
                loadProjects();
            }, 1000);
            return true;
        } else {
            const error = await updateResponse.json();
            throw new Error(error.message || 'فشل في الحفظ');
        }
    } catch (error) {
        console.error('Error saving to GitHub:', error);
        showStatus('❌ خطأ في الحفظ: ' + error.message, 'error');
        return false;
    }
}

function showStatus(message, type) {
    const statusEl = document.getElementById('status-message');
    statusEl.textContent = message;
    statusEl.style.display = 'block';
    
    if (type === 'success') {
        statusEl.style.background = '#d4edda';
        statusEl.style.color = '#155724';
    } else if (type === 'error') {
        statusEl.style.background = '#f8d7da';
        statusEl.style.color = '#721c24';
    } else {
        statusEl.style.background = 'var(--accent-green)';
        statusEl.style.color = 'var(--primary-green)';
    }
    
    if (type !== 'info') {
        setTimeout(() => {
            statusEl.style.display = 'none';
        }, 5000);
    }
}

// ============================================
// RENDER PROJECTS
// ============================================

function renderProjects() {
    renderOngoingProjects();
    renderCompletedProjects();
}

function renderOngoingProjects() {
    const container = document.getElementById('ongoing-list');
    container.innerHTML = '';
    
    if (projects.ongoing.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">لا توجد مشاريع قيد التنفيذ</p>';
        return;
    }
    
    projects.ongoing.forEach(project => {
        const card = createProjectCard(project, 'ongoing');
        container.appendChild(card);
    });
}

function renderCompletedProjects() {
    const container = document.getElementById('completed-list');
    container.innerHTML = '';
    
    if (projects.completed.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">لا توجد مشاريع منجزة</p>';
        return;
    }
    
    projects.completed.forEach(project => {
        const card = createProjectCard(project, 'completed');
        container.appendChild(card);
    });
}

function createProjectCard(project, type) {
    const card = document.createElement('div');
    card.className = 'project-admin-card';
    card.dataset.id = project.id;
    
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title;
    image.className = 'project-admin-image';
    image.onerror = function() {
        this.src = 'assets/Img/Bg1.png';
    };
    
    const info = document.createElement('div');
    info.className = 'project-admin-info';
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const date = document.createElement('p');
    date.textContent = project.date;
    date.style.fontWeight = '600';
    date.style.color = 'var(--text-secondary)';
    
    const description = document.createElement('p');
    description.textContent = project.description;
    description.style.marginTop = '0.5rem';
    
    info.appendChild(title);
    info.appendChild(date);
    info.appendChild(description);
    
    if (type === 'ongoing') {
        const progressDiv = document.createElement('div');
        progressDiv.style.marginTop = '1rem';
        const progressValue = project.progress || 0;
        const displayProgress = formatNumber(progressValue);
        progressDiv.innerHTML = `
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">نسبة التقدم:</label>
            <input type="text" class="progress-input" value="${displayProgress}" min="0" max="100" 
                   data-numeric-value="${progressValue}"
                   onchange="updateProgress('${project.id}', this.value)"
                   oninput="this.setAttribute('data-numeric-value', parseNumber(this.value) || 0)"
                   style="direction: ${isArabic() ? 'rtl' : 'ltr'}; text-align: ${isArabic() ? 'right' : 'left'};">
            <span style="margin-right: 0.5rem;">%</span>
        `;
        info.appendChild(progressDiv);
    } else if (project.stats) {
        const statsDiv = document.createElement('div');
        statsDiv.style.marginTop = '1rem';
        statsDiv.style.display = 'flex';
        statsDiv.style.gap = '1rem';
        statsDiv.style.flexWrap = 'wrap';
        
        Object.entries(project.stats).forEach(([key, value]) => {
            const stat = document.createElement('div');
            stat.style.background = 'var(--accent-green)';
            stat.style.padding = '0.5rem 1rem';
            stat.style.borderRadius = 'var(--radius-sm)';
            // Convert numbers in stats value to Arabic/English
            const formattedValue = formatNumber(value);
            stat.innerHTML = `<strong>${formattedValue}</strong> <span style="color: var(--text-secondary);">${key}</span>`;
            statsDiv.appendChild(stat);
        });
        
        info.appendChild(statsDiv);
    }
    
    const actions = document.createElement('div');
    actions.className = 'project-admin-actions';
    
    if (type === 'ongoing') {
        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn btn-primary btn-small';
        completeBtn.textContent = 'إتمام المشروع';
        completeBtn.onclick = () => moveToCompleted(project.id);
        actions.appendChild(completeBtn);
    } else {
        const ongoingBtn = document.createElement('button');
        ongoingBtn.className = 'btn btn-secondary btn-small';
        ongoingBtn.textContent = 'نقل لقيد التنفيذ';
        ongoingBtn.onclick = () => moveToOngoing(project.id);
        actions.appendChild(ongoingBtn);
    }
    
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-small';
    editBtn.textContent = 'تعديل';
    editBtn.onclick = () => editProject(project.id, type);
    actions.appendChild(editBtn);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-small';
    deleteBtn.textContent = 'حذف';
    deleteBtn.onclick = () => deleteProject(project.id, type);
    actions.appendChild(deleteBtn);
    
    card.appendChild(image);
    card.appendChild(info);
    card.appendChild(actions);
    
    return card;
}

// ============================================
// PROJECT ACTIONS
// ============================================

async function updateProgress(id, progress) {
    const project = projects.ongoing.find(p => p.id === id);
    if (project) {
        // Parse number from Arabic or English digits
        project.progress = parseNumber(progress);
        await saveProjects();
    }
}

async function moveToCompleted(id) {
    if (!confirm('هل أنت متأكد من نقل هذا المشروع إلى المشاريع المنجزة؟')) return;
    
    const projectIndex = projects.ongoing.findIndex(p => p.id === id);
    if (projectIndex !== -1) {
        const project = projects.ongoing[projectIndex];
        delete project.progress;
        if (!project.stats) {
            project.stats = {};
        }
        
        projects.completed.push(project);
        projects.ongoing.splice(projectIndex, 1);
        await saveProjects();
        renderProjects();
    }
}

async function moveToOngoing(id) {
    if (!confirm('هل أنت متأكد من نقل هذا المشروع إلى المشاريع قيد التنفيذ؟')) return;
    
    const projectIndex = projects.completed.findIndex(p => p.id === id);
    if (projectIndex !== -1) {
        const project = projects.completed[projectIndex];
        if (!project.progress) {
            project.progress = 0;
        }
        
        projects.ongoing.push(project);
        projects.completed.splice(projectIndex, 1);
        await saveProjects();
        renderProjects();
    }
}

async function deleteProject(id, type) {
    if (!confirm('هل أنت متأكد من حذف هذا المشروع؟')) return;
    
    const projectList = type === 'ongoing' ? projects.ongoing : projects.completed;
    const projectIndex = projectList.findIndex(p => p.id === id);
    
    if (projectIndex !== -1) {
        projectList.splice(projectIndex, 1);
        await saveProjects();
        renderProjects();
    }
}

function editProject(id, type) {
    const projectList = type === 'ongoing' ? projects.ongoing : projects.completed;
    const project = projectList.find(p => p.id === id);
    
    if (!project) return;
    
    document.getElementById('project-type').value = type;
    document.getElementById('project-title').value = project.title;
    document.getElementById('project-date').value = project.date;
    document.getElementById('project-description').value = project.description;
    document.getElementById('project-image').value = project.image;
    
    if (type === 'ongoing') {
        const progressValue = project.progress || 0;
        const progressInput = document.getElementById('project-progress');
        progressInput.value = formatNumber(progressValue);
        progressInput.setAttribute('data-numeric-value', progressValue);
    } else if (project.stats) {
        const statsEntries = Object.entries(project.stats);
        if (statsEntries.length > 0) {
            document.getElementById('stat1-label').value = statsEntries[0][0];
            const stat1Value = statsEntries[0][1];
            document.getElementById('stat1-value').value = formatNumber(stat1Value);
        }
        if (statsEntries.length > 1) {
            document.getElementById('stat2-label').value = statsEntries[1][0];
            const stat2Value = statsEntries[1][1];
            document.getElementById('stat2-value').value = formatNumber(stat2Value);
        }
    }
    
    switchTab('add');
    
    document.getElementById('add-project-form').dataset.editId = id;
    document.getElementById('add-project-form').dataset.editType = type;
    
    const submitBtn = document.querySelector('#add-project-form button[type="submit"]');
    submitBtn.textContent = 'حفظ التعديلات';
}

// ============================================
// ADD PROJECT
// ============================================

document.getElementById('add-project-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const isEdit = form.dataset.editId;
    
    const projectData = {
        id: isEdit ? form.dataset.editId : Date.now().toString(),
        title: document.getElementById('project-title').value,
        date: document.getElementById('project-date').value,
        description: document.getElementById('project-description').value,
        image: document.getElementById('project-image').value
    };
    
    const type = document.getElementById('project-type').value;
    
    if (type === 'ongoing') {
        const progressInput = document.getElementById('project-progress');
        const progressValue = progressInput.getAttribute('data-numeric-value') || progressInput.value;
        projectData.progress = parseNumber(progressValue);
    } else {
        const stat1Label = document.getElementById('stat1-label').value;
        let stat1Value = document.getElementById('stat1-value').value;
        const stat2Label = document.getElementById('stat2-label').value;
        let stat2Value = document.getElementById('stat2-value').value;
        
        // Convert Arabic digits to English for storage (keep original if not a number)
        if (stat1Value && !isNaN(parseNumber(stat1Value))) {
            stat1Value = parseNumber(stat1Value).toString();
        }
        if (stat2Value && !isNaN(parseNumber(stat2Value))) {
            stat2Value = parseNumber(stat2Value).toString();
        }
        
        projectData.stats = {};
        if (stat1Label && stat1Value) {
            projectData.stats[stat1Label] = stat1Value;
        }
        if (stat2Label && stat2Value) {
            projectData.stats[stat2Label] = stat2Value;
        }
    }
    
    if (isEdit) {
        const projectList = form.dataset.editType === 'ongoing' ? projects.ongoing : projects.completed;
        const projectIndex = projectList.findIndex(p => p.id === isEdit);
        
        if (projectIndex !== -1) {
            if (form.dataset.editType !== type) {
                projectList.splice(projectIndex, 1);
                if (type === 'ongoing') {
                    projects.ongoing.push(projectData);
                } else {
                    projects.completed.push(projectData);
                }
            } else {
                projectList[projectIndex] = projectData;
            }
        }
    } else {
        if (type === 'ongoing') {
            projects.ongoing.push(projectData);
        } else {
            projects.completed.push(projectData);
        }
    }
    
    const saved = await saveProjects();
    
    if (saved) {
        renderProjects();
        
        form.reset();
        delete form.dataset.editId;
        delete form.dataset.editType;
        document.querySelector('#add-project-form button[type="submit"]').textContent = 'إضافة المشروع';
        
        switchTab(type === 'ongoing' ? 'ongoing' : 'completed');
    }
});

// ============================================
// TABS
// ============================================

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
    });
});

document.getElementById('project-type').addEventListener('change', (e) => {
    const type = e.target.value;
    const progressGroup = document.getElementById('progress-group');
    const statsGroup = document.getElementById('stats-group');
    
    if (type === 'ongoing') {
        progressGroup.style.display = 'block';
        statsGroup.style.display = 'none';
    } else {
        progressGroup.style.display = 'none';
        statsGroup.style.display = 'block';
    }
});

// Make functions globally available for inline event handlers
window.formatNumber = formatNumber;
window.parseNumber = parseNumber;
window.isArabic = isArabic;

// ============================================
// SETUP EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Already set up
}
