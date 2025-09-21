// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter popup functionality
    const newsletterPopup = document.getElementById('newsletter-popup');
    const popupClose = document.querySelector('.popup-close');
    
    // Show popup after 10 seconds
    setTimeout(function() {
        if (!localStorage.getItem('newsletter-shown')) {
            newsletterPopup.style.display = 'block';
        }
    }, 10000);

    // Close popup
    popupClose.addEventListener('click', function() {
        newsletterPopup.style.display = 'none';
        localStorage.setItem('newsletter-shown', 'true');
    });

    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === newsletterPopup) {
            newsletterPopup.style.display = 'none';
            localStorage.setItem('newsletter-shown', 'true');
        }
    });

    // Newsletter form submissions (Brevo integration)
    const newsletterForms = document.querySelectorAll('.newsletter-form, .popup-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const email = this.querySelector('input[name="EMAIL"]').value;
            const gdprConsent = this.querySelector('input[name="OPT_IN"]');
            
            // Email validation
            if (!validateEmail(email)) {
                e.preventDefault();
                alert('Prosím zadajte platnú emailovú adresu.');
                return;
            }
            
            // GDPR consent validation
            if (!gdprConsent || !gdprConsent.checked) {
                e.preventDefault();
                alert('Pre odber newslettera musíte súhlasiť so spracovaním osobných údajov.');
                return;
            }
            
            // Add loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Zapisujem...';
            submitButton.disabled = true;
            
            // Close popup if it's the popup form (after a delay for submission)
            if (this.classList.contains('popup-form')) {
                setTimeout(() => {
                    newsletterPopup.style.display = 'none';
                    localStorage.setItem('newsletter-shown', 'true');
                }, 1000);
            }
            
            // Reset button state after delay
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                // Reset form
                this.reset();
            }, 2000);
        });
    });

    // Contact form submission (Netlify Forms integration)
    const contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = this.querySelector('input[name="name"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const subject = this.querySelector('select[name="subject"]').value;
            const message = this.querySelector('textarea[name="message"]').value;
            const privacy = this.querySelector('input[name="privacy"]').checked;
            
            // Client-side validation
            if (!name || !validateEmail(email) || !subject || !message || !privacy) {
                e.preventDefault();
                alert('Prosím vyplňte všetky povinné polia správne a súhlaste so spracovaním osobných údajov.');
                return;
            }
            
            // Add loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Odosielam...';
            submitButton.disabled = true;
            
            // Let Netlify handle the form submission
            // The form will redirect or show success based on Netlify configuration
        });
        
        // Handle Netlify form success (if using query parameter)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('submitted') === 'true') {
            const successMessage = document.getElementById('contact-success');
            if (successMessage) {
                successMessage.style.display = 'block';
                contactForm.style.display = 'none';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
                
                // Clean URL after showing success message
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }

    // Calendar functionality
    const calendarDays = document.querySelectorAll('.calendar-day.event');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            const eventName = this.getAttribute('data-event');
            if (eventName) {
                alert(`Event: ${eventName}\nDátum: ${this.textContent}. júl 2025`);
            }
        });
    });

    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent.replace(/\D/g, ''));
                animateCounter(target, finalNumber);
                statsObserver.unobserve(target);
            }
        });
    });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Enhanced animations for new elements
    const newAnimateElements = document.querySelectorAll('.event-card, .forum-category, .partner-card, .membership-card, .volunteer-card, .partnership-card, .stat-card');
    newAnimateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.brand-card, .location-card, .safety-item, .community-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for statistics (if you add them later)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Lazy loading for images (when you add them)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Search functionality (for future use)
    function initSearch() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                const searchableElements = document.querySelectorAll('[data-searchable]');
                
                searchableElements.forEach(element => {
                    const text = element.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        element.style.display = 'block';
                    } else {
                        element.style.display = 'none';
                    }
                });
            });
        }
    }

    // Initialize search if search input exists
    initSearch();

    // Utility function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add loading states to buttons
    function addLoadingState(button, text = 'Načítava...') {
        const originalText = button.textContent;
        button.textContent = text;
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }

    // Enhanced form submissions with loading states
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                addLoadingState(submitButton);
            }
        });
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Console welcome message
    console.log('%c🏄‍♂️ Vitajte na stránke SK-EFES-A!', 'color: #0066cc; font-size: 16px; font-weight: bold;');
    console.log('%cPre viac informácií o eFoilingu navštívte naše sekcie.', 'color: #666; font-size: 12px;');
});