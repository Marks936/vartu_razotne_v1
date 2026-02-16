/**
 * Main JavaScript for Vārtu Razotne website
 * Handles interactive elements and user experience enhancements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initConsultationButton();
    initSmoothScroll();
    initCurrentYear();
    initPhoneNumberProtection();
});

/**
 * Consultation button handler
 * Shows a friendly message when consultation is requested
 */
function initConsultationButton() {
    const consultBtn = document.getElementById('consultBtn');
    
    if (consultBtn) {
        consultBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create and show a custom notification
            showNotification('Paldies! 🌟 Mēs ar Jums sazināsimies tuvākajā laikā. Zvaniet mums uzreiz: +371 27400704', 5000);
            
            // Optional: open phone dialer on mobile devices
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                window.location.href = 'tel:+37127400704';
            }
        });
    }
}

/**
 * Smooth scroll for anchor links (if any are added later)
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Update copyright year automatically
 */
function initCurrentYear() {
    const yearElements = document.querySelectorAll('footer p:first-child');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(el => {
        if (el.innerHTML.includes('©')) {
            el.innerHTML = el.innerHTML.replace(/\d{4}/, currentYear);
        }
    });
}

/**
 * Simple email/phone protection (optional - can be expanded)
 * Currently just adds a small security note in console
 */
function initPhoneNumberProtection() {
    console.log('📞 Phone and email are safely displayed. Contact us anytime!');
    
    // Optional: Add click tracking for contact links
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const type = this.href.includes('tel') ? 'phone' : 'email';
            console.log(`📊 Analytics: ${type} click recorded`);
        });
    });
}

/**
 * Helper function to show notifications
 * @param {string} message - Message to display
 * @param {number} duration - How long to show in ms
 */
function showNotification(message, duration = 3000) {
    // Remove existing notification if any
    const existingNotif = document.querySelector('.custom-notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #0b2a40;
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 9999;
            font-weight: 500;
            animation: slideIn 0.3s ease;
            border-left: 5px solid #ffc857;
        ">
            <i class="fas fa-check-circle" style="color: #ffc857; margin-right: 10px;"></i>
            ${message}
        </div>
    `;
    
    // Add animation keyframes if not present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after duration
    setTimeout(() => {
        const notif = document.querySelector('.custom-notification');
        if (notif) {
            notif.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notif.remove(), 300);
        }
    }, duration);
}

/**
 * Lazy loading for images (if any images were added later)
 * Currently placeholder for future expansion
 */
function initLazyLoading() {
    // This would be used if images were added to the site
    console.log('Lazy loading ready');
}