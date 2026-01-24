// ============================================
// PROJECTS LOADER - For ongoing.html and completed.html
// Reads from projects.json
// ============================================

let allProjects = {
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

// Load projects from JSON file
async function loadProjectsData() {
    try {
        // Add cache busting to ensure fresh data
        const response = await fetch('projects.json?t=' + Date.now());
        if (response.ok) {
            allProjects = await response.json();
            console.log('Projects loaded:', allProjects);
        } else {
            console.error('Failed to load projects.json, status:', response.status);
        }
    } catch (error) {
        console.error('Error loading projects from JSON:', error);
    }
}

// Render ongoing projects
function renderOngoingProjects() {
    const container = document.querySelector('.projects-grid');
    if (!container) {
        console.error('Projects grid container not found!');
        return;
    }
    
    container.innerHTML = '';
    
    console.log('Rendering ongoing projects:', allProjects.ongoing.length);
    
    if (allProjects.ongoing.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 3rem; color: var(--text-secondary);">لا توجد مشاريع قيد التنفيذ حالياً</p>';
        return;
    }
    
    allProjects.ongoing.forEach(project => {
        const card = createOngoingProjectCard(project);
        container.appendChild(card);
    });
    
    // Re-initialize animations
    initializeAnimations();
}

// Render completed projects
function renderCompletedProjects() {
    const container = document.querySelector('.projects-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (allProjects.completed.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 3rem; color: var(--text-secondary);">لا توجد مشاريع منجزة حالياً</p>';
        return;
    }
    
    allProjects.completed.forEach(project => {
        const card = createCompletedProjectCard(project);
        container.appendChild(card);
    });
    
    // Re-initialize animations
    initializeAnimations();
}

// Create ongoing project card
function createOngoingProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-up';
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='assets/Img/Bg1.png'">
            <div class="project-badge ongoing" data-i18n="project-ongoing">قيد التنفيذ</div>
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p class="project-date">${project.date}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-progress">
                <div class="progress-bar">
                    <div class="progress-fill" data-progress="${project.progress || 0}"></div>
                </div>
                <span class="progress-text">${formatNumber(project.progress || 0)}% <span data-i18n="project-library-progress">من الإنجاز</span></span>
            </div>
        </div>
    `;
    
    return card;
}

// Create completed project card
function createCompletedProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-up';
    
    let statsHTML = '';
    if (project.stats) {
        const statsEntries = Object.entries(project.stats);
        statsHTML = '<div class="project-stats">';
        statsEntries.forEach(([label, value]) => {
            // Format numbers in stats value
            const formattedValue = formatNumber(value);
            statsHTML += `
                <div class="stat">
                    <strong>${formattedValue}</strong>
                    <span>${label}</span>
                </div>
            `;
        });
        statsHTML += '</div>';
    }
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='assets/Img/Bg1.png'">
            <div class="project-badge" data-i18n="project-completed">مكتمل</div>
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p class="project-date">${project.date}</p>
            <p class="project-description">${project.description}</p>
            ${statsHTML}
        </div>
    `;
    
    return card;
}

// Initialize animations (from script.js)
function initializeAnimations() {
    setTimeout(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach(el => observer.observe(el));
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressFill = entry.target;
                    const progress = progressFill.getAttribute('data-progress');
                    
                    setTimeout(() => {
                        progressFill.style.width = progress + '%';
                    }, 300);
                    
                    progressObserver.unobserve(progressFill);
                }
            });
        }, {
            threshold: 0.5
        });
        
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => progressObserver.observe(bar));
    }, 100);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, loading projects...');
    await loadProjectsData();
    
    // Wait a bit to ensure DOM is fully ready
    setTimeout(() => {
        // Check which page we're on
        const path = window.location.pathname;
        const href = window.location.href;
        console.log('Current path:', path);
        console.log('Current href:', href);
        
        if (path.includes('ongoing.html') || path.endsWith('ongoing') || href.includes('ongoing.html') || href.includes('/ongoing')) {
            console.log('Rendering ongoing projects');
            renderOngoingProjects();
        } else if (path.includes('completed.html') || path.endsWith('completed') || href.includes('completed.html') || href.includes('/completed')) {
            console.log('Rendering completed projects');
            renderCompletedProjects();
        } else {
            console.log('Not on projects page');
        }
    }, 100);
});

// Also try on window load as fallback
window.addEventListener('load', async () => {
    if (allProjects.ongoing.length === 0 && allProjects.completed.length === 0) {
        console.log('Projects not loaded, retrying...');
        await loadProjectsData();
        
        const path = window.location.pathname;
        const href = window.location.href;
        
        if (path.includes('ongoing.html') || href.includes('ongoing.html')) {
            renderOngoingProjects();
        } else if (path.includes('completed.html') || href.includes('completed.html')) {
            renderCompletedProjects();
        }
    }
});
