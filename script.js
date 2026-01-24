// ============================================
// SCROLL ANIMATIONS
// ============================================

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

// Observe all fade-up elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================

const header = document.getElementById('header');
const logoImg = document.querySelector('.logo-img');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Ensure header starts transparent on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.pageYOffset <= 50) {
        header.classList.remove('scrolled');
    }
});

// ============================================
// PROGRESS BARS ANIMATION
// ============================================

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

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => progressObserver.observe(bar));
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

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

// Make functions globally available
window.arabicDigits = arabicDigits;
window.englishDigits = englishDigits;
window.isArabic = isArabic;
window.toArabicDigits = toArabicDigits;
window.toEnglishDigits = toEnglishDigits;

// Format number with + sign and locale formatting
function formatNumber(num) {
    let formatted;
    if (num >= 1000) {
        formatted = num.toLocaleString('ar-EG');
    } else {
        formatted = num.toString();
    }
    
    // Convert to Arabic/English digits based on language
    if (isArabic()) {
        formatted = toArabicDigits(formatted);
    } else {
        formatted = toEnglishDigits(formatted);
    }
    
    return '+' + formatted;
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            
            if (!counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter, target);
            }
            
            counterObserver.unobserve(counter);
        }
    });
}, {
    threshold: 0.5
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => counterObserver.observe(counter));
    
    // Convert progress percentages to Arabic/English digits
    convertProgressNumbers();
});

// Convert progress text numbers to Arabic/English
function convertProgressNumbers() {
    const progressTexts = document.querySelectorAll('.progress-text');
    progressTexts.forEach(text => {
        const originalText = text.textContent;
        // Extract percentage number (e.g., "75%" or "75% من الهدف")
        const match = originalText.match(/(\d+)%/);
        if (match) {
            const number = parseInt(match[1]);
            const formattedNumber = isArabic() ? toArabicDigits(number) : toEnglishDigits(number);
            text.textContent = originalText.replace(/\d+%/, formattedNumber + '%');
        }
    });
}

// Run conversion when language changes
document.addEventListener('languageChanged', () => {
    convertProgressNumbers();
    // Re-animate counters with new language
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        if (counter.classList.contains('animated')) {
            const target = parseInt(counter.getAttribute('data-target'));
            counter.textContent = formatNumber(target);
        }
    });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// INITIAL FADE-IN FOR HERO
// ============================================

// ============================================
// CODE PROTECTION - منع الوصول لمصدر الكود
// ============================================

// منع القائمة اليمين (Right-click)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// منع اختصارات لوحة المفاتيح
document.addEventListener('keydown', (e) => {
    // F12 - DevTools
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+I - DevTools
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+J - Console
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+C - Inspect Element
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+U - View Source
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+S - Save Page
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+P - Print (يمكن إزالته إذا أردت)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+A - Select All (يمكن إزالته إذا أردت)
    if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        return false;
    }
});

// منع اختصارات الماوس
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});

// منع السحب والإفلات
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

// منع نسخ النص (اختياري - يمكن إزالته إذا أردت)
document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
});

// منع لصق النص (اختياري - يمكن إزالته إذا أردت)
document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
});

// منع فتح DevTools من خلال طرق أخرى
(function() {
    let devtools = {open: false};
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            devtools.open = true;
        }
    });
    setInterval(function() {
        devtools.open = false;
        console.clear();
        console.log(element);
        if (devtools.open) {
            // يمكن إضافة رد فعل هنا مثل إعادة توجيه
            window.location.href = 'about:blank';
        }
    }, 1000);
})();

// منع فحص العناصر من خلال اختصارات أخرى
document.addEventListener('keydown', (e) => {
    // Ctrl+Shift+Delete
    if (e.ctrlKey && e.shiftKey && e.key === 'Delete') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+K (Firefox DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+E (Chrome DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        return false;
    }
});

// منع فتح DevTools من خلال قائمة المتصفح
window.addEventListener('beforeunload', (e) => {
    // يمكن إضافة رسالة تحذيرية
});

// إخفاء الكود من خلال منع عرض الصفحة المصدر
if (window.location.protocol === 'file:') {
    // منع فتح الملفات المحلية
    window.location.href = 'about:blank';
}

window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero .fade-up');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
});
