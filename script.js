// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============ SMOOTH SCROLL LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============ CONTADOR ANIMADO ============
const counters = document.querySelectorAll('.stat-counter');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, 0, target, 2000);
            entry.target.setAttribute('data-counted', 'true');
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

function animateCounter(element, start, end, duration) {
    const increment = end / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// ============ BOTÓN DESCARGAR ============
const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.getAttribute('data-platform');

        // Simulación: aquí irá la URL real de descarga
        showDownloadNotification(platform);
    });
});

function showDownloadNotification(platform) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Tu descarga comenzará en breve...</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Mostrar notificación
    setTimeout(() => notification.classList.add('show'), 10);

    // Simular inicio de descarga (reemplazar con URL real)
    setTimeout(() => {
        console.log(`Iniciando descarga para ${platform}`);
        window.location.href = 'https://github.com/alvarovert/Haga_page/releases/download/v1.0.3/Haba.Setup.1.0.3.exe';
    }, 500);

    // Remover notificación
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============ ANIMACIÓN DE SCROLL REVELADOR ============
const revealElements = document.querySelectorAll('.feature-card, .design-card, .download-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ============ EFECTO PARALLAX SUBTIL ============
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.mascot, .design-showcase');

    parallaxElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });
});

// ============ TEMA OSCURO (OPCIONAL - DETECTAR PREFERENCIA) ============
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(isDark) {
        if (isDark) {
            document.documentElement.style.setProperty('--bg-main', '#0F172A');
            document.documentElement.style.setProperty('--bg-light', '#1E293B');
            document.documentElement.style.setProperty('--text-primary', '#F1F5F9');
            document.documentElement.style.setProperty('--text-secondary', '#94A3B8');
            document.documentElement.style.setProperty('--text-light', '#64748B');
            document.documentElement.style.setProperty('--border-subtle', '#334155');
        }
    }

    // Solo aplicar tema oscuro si el usuario lo prefiere
    if (prefersDark.matches) {
        applyTheme(true);
    }

    prefersDark.addEventListener('change', (e) => {
        applyTheme(e.matches);
    });
}

// initTheme(); // Descomenta si deseas soporte de tema oscuro

// ============ ANIMACIÓN DE CARGA ============
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Revelar elementos importantes
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.animation = 'fadeInUp 0.8s ease-out';
    }
});

// ============ KEYBOARD NAVIGATION ============
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Cerrar cualquier modal si existe
        console.log('Tecla Escape presionada');
    }
});

// ============ UTILIDADES ============

// Prevenir comportamiento por defecto de enlaces sin href
document.addEventListener('click', (e) => {
    if (e.target.closest('a[href="#"]')) {
        e.preventDefault();
    }
});

// Función auxiliar para detectar si elemento está en viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}

// ============ NOTIFICACIÓN CSS INYECTADA ============
const notificationStyles = `
    .notification {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        font-weight: 500;
        z-index: 9999;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .notification.show {
        opacity: 1;
        transform: translateY(0);
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    @media (max-width: 600px) {
        .notification {
            bottom: 20px;
            right: 20px;
            left: 20px;
            padding: 14px 20px;
        }
    }
`;

// Inyectar estilos de notificación
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// ============ ANALYTICS BÁSICO (OPCIONAL) ============
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Aquí podrías enviar datos a Google Analytics o similar
}

// Rastrear descargas
downloadButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('download_click', {
            platform: btn.getAttribute('data-platform'),
            timestamp: new Date().toISOString()
        });
    });
});

// Rastrear clicks en navegación
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('nav_click', {
            target: link.getAttribute('href'),
            timestamp: new Date().toISOString()
        });
    });
});

console.log('Haba Landing Page - Inicializado correctamente ✨');
