// Initialize Scroll Animations
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-quad'
});

// Cursor Glow Interaction
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

// Theme Logic
const themeBtn = document.getElementById('theme-toggle');
const icon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme-pref', isLight ? 'light' : 'dark');
});

if (localStorage.getItem('theme-pref') === 'light') {
    document.body.classList.add('light-mode');
    icon.className = 'fas fa-sun';
}

// Form Feedback Logic
const contactForm = document.getElementById('contact-form');
const successMsg = document.getElementById('msg-sent');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('.submit-btn');
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = 'Sent Successfully <i class="fas fa-check"></i>';
            btn.style.background = '#10b981';
            
            successMsg.style.display = 'block';
            this.reset();
            
            setTimeout(() => {
                btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                btn.style.background = '';
                btn.disabled = false;
                successMsg.style.display = 'none';
            }, 4000);
        }, 1500);
    });
}