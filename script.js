// Global variables
let currentLanguage = 'en';

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const langToggle = document.querySelector('#lang-toggle-btn');
const currentLangSpan = document.getElementById('current-lang');
const contactForm = document.querySelector('.contact-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('tradina-language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // Initialize components
    initializeNavigation();
    initializeLanguageToggle();
    initializeScrollAnimations();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeScrollIndicator();
    
    // Set initial language and update translations
    document.documentElement.setAttribute('data-lang', currentLanguage);
    updateTranslations();
    
    // Update language toggle button text
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLanguage.toUpperCase();
    }
});

// Navigation functionality
function initializeNavigation() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                toggleHamburgerAnimation();
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                toggleHamburgerAnimation();
            }
        });
    }
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    toggleHamburgerAnimation();
}

function toggleHamburgerAnimation() {
    const bars = document.querySelectorAll('.bar');
    hamburger.classList.toggle('active');
    
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
}

// Language switching functionality
function initializeLanguageToggle() {
    console.log('Initializing language toggle...', langToggle);
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
        console.log('Language toggle event listener added');
    } else {
        console.error('Language toggle button not found!');
    }
}

function toggleLanguage() {
    console.log('Toggle language called. Current language:', currentLanguage);
    
    currentLanguage = currentLanguage === 'en' ? 'jp' : 'en';
    console.log('New language:', currentLanguage);
    
    // Update the document language attribute
    document.documentElement.setAttribute('data-lang', currentLanguage);
    console.log('Document data-lang set to:', currentLanguage);
    
    // Update the language toggle button
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLanguage.toUpperCase();
        console.log('Language button text updated to:', currentLanguage.toUpperCase());
    }
    
    // Update all translatable elements
    updateTranslations();
    console.log('Translations updated');
    
    // Store language preference
    localStorage.setItem('tradina-language', currentLanguage);
    
    // Add visual feedback
    if (langToggle) {
        langToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            langToggle.style.transform = 'scale(1)';
        }, 100);
    }
}

function updateTranslations() {
    const elements = document.querySelectorAll('[data-en], [data-jp]');
    console.log('Found translatable elements:', elements.length);
    
    elements.forEach((element, index) => {
        const englishText = element.getAttribute('data-en');
        const japaneseText = element.getAttribute('data-jp');
        
        console.log(`Element ${index}:`, element.tagName, 'EN:', englishText, 'JP:', japaneseText);
        
        if (currentLanguage === 'en' && englishText) {
            // Handle different types of elements
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = englishText;
            } else if (element.tagName === 'OPTION') {
                element.textContent = englishText;
            } else {
                element.textContent = englishText;
            }
        } else if (currentLanguage === 'jp' && japaneseText) {
            // Handle different types of elements
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = japaneseText;
            } else if (element.tagName === 'OPTION') {
                element.textContent = japaneseText;
            } else {
                element.textContent = japaneseText;
            }
        }
    });
}

// Scroll animations
function initializeScrollAnimations() {
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
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-item, .contact-item, .stat, .about-content');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Add staggered animation to service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll indicator functionality
function initializeScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = aboutSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
        
        // Hide scroll indicator after scrolling
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const viewportHeight = window.innerHeight;
            
            if (scrolled > viewportHeight * 0.3) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
}

// Contact form functionality
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
        
        // Add floating label functionality
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim() !== '') {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            });
        });
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Show success message
        showNotification('Message sent successfully!', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        
        // Remove has-value class from inputs
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.classList.remove('has-value');
        });
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < window.innerHeight) {
        const parallaxSpeed = 0.5;
        heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const countUp = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 30);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.textContent);
                countUp(entry.target, target);
                entry.target.classList.add('counted');
            }
        });
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

// Service card hover effects
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        navMenu.classList.remove('active');
        toggleHamburgerAnimation();
    }
    
    if (e.key === 'Tab') {
        // Add focus styles for keyboard navigation
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('tradina-language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        toggleLanguage();
    }
});

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
        'https://images.unsplash.com/photo-1551836022-deb4988cc6c0',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
            console.log('Failed to load image:', img.src);
        });
    });
});

// Performance optimization: Lazy loading for service images
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('.service-image[data-src]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }
});