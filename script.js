// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('2025-08-28T10:00:00');
    const now = new Date();
    const timeDifference = eventDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
    } else {
        // Event has passed
        document.getElementById('countdown').innerHTML = '<div class="countdown-item"><span class="countdown-number">🎉</span><span class="countdown-label">Event läuft!</span></div>';
    }
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
updateCountdown(); // Initial call

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Form submission handler
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const company = formData.get('company');
    const workshop = formData.get('workshop');
    const dietary = formData.get('dietary');
    const comments = formData.get('comments');
    
    // Create email content
    const subject = encodeURIComponent('Anmeldung Robot Framework Meetup Köln - 28. August 2025');
    
    let emailBody = `Hallo,

hiermit melde ich mich für das Robot Framework Meetup am 28. August 2025 bei imbus Rheinland an.

PERSÖNLICHE DATEN:
Name: ${name}
E-Mail: ${email}`;

    if (phone) {
        emailBody += `
Telefon: ${phone}`;
    }

    if (company) {
        emailBody += `
Unternehmen: ${company}`;
    }

    if (workshop) {
        const workshopTexts = {
            'bootcamp': 'Robot Framework Bootcamp - Prüfungsvorbereitung',
            'library': 'Bibliotheksentwicklung',
            'advanced': 'Erweiterte Robot Framework Features',
            'keine-praeferenz': 'Keine Präferenz'
        };
        emailBody += `

WORKSHOP-PRÄFERENZ:
${workshopTexts[workshop] || workshop}`;
    }

    if (dietary) {
        emailBody += `

ERNÄHRUNGSWÜNSCHE:
${dietary}`;
    }

    if (comments) {
        emailBody += `

ZUSÄTZLICHE KOMMENTARE:
${comments}`;
    }

    emailBody += `

Ich freue mich auf die Veranstaltung!

Mit freundlichen Grüßen
${name}`;

    // Create mailto link
    const mailtoLink = `mailto:RL_Vertrieb@imbus.de?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation message
    showConfirmationMessage();
});

// Show confirmation message
function showConfirmationMessage() {
    // Create confirmation overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 0.75rem;
        max-width: 500px;
        margin: 1rem;
        text-align: center;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `;
    
    modal.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
        <h3 style="color: #00a651; margin-bottom: 1rem; font-size: 1.5rem;">E-Mail-Programm geöffnet</h3>
        <p style="color: #6b7280; margin-bottom: 1.5rem;">
            Ihr E-Mail-Programm sollte sich mit einer vorausgefüllten Nachricht geöffnet haben. 
            Bitte senden Sie die E-Mail ab, um Ihre Anmeldung zu vervollständigen.
        </p>
        <p style="color: #6b7280; margin-bottom: 1.5rem; font-size: 0.875rem;">
            Falls sich kein E-Mail-Programm öffnet, können Sie uns auch direkt unter 
            <strong>RL_Vertrieb@imbus.de</strong> kontaktieren.
        </p>
        <button onclick="this.closest('.overlay').remove()" style="
            background: #00a651;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            cursor: pointer;
            font-weight: 600;
        ">OK</button>
    `;
    
    overlay.className = 'overlay';
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Remove overlay when clicking outside
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// Add header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Add animation on scroll for program items
function animateOnScroll() {
    const programItems = document.querySelectorAll('.program-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    programItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    
    // Add loading class to images for better UX (exclude logo images)
    const images = document.querySelectorAll('img:not(.logo-img):not(.footer-logo-img)');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Form validation enhancement
function validateForm() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#e5e7eb';
        }
    });
    
    // Email validation
    const email = form.querySelector('input[type="email"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email.value)) {
        email.style.borderColor = '#ef4444';
        isValid = false;
    }
    
    return isValid;
}

// Add real-time validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#e5e7eb';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)') {
                this.style.borderColor = '#e5e7eb';
            }
        });
    });
});
