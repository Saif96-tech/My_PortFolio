// ===== HOME PAGE SPECIFIC JAVASCRIPT =====
// This file handles home page functionality and animations

// ===== INITIALIZATION =====
// Initialize home page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render skills from common data
    renderSkills();
    // Initialize animations
    initAnimations();
});

// ===== ANIMATION FUNCTIONS =====

// Function to initialize all home page animations
function initAnimations() {
    // Animate hero content on page load
    animateHeroContent();
    
    // Set up scroll-triggered animations for stats
    setupStatsAnimation();
}

// Function to animate hero content with fade-in effect
function animateHeroContent() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // Start with hidden content
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        // Animate to visible after short delay
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
}

// Function to set up intersection observer for stats animation
function setupStatsAnimation() {
    // Observer options - trigger when 50% visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate stats when they come into view
                animateStats();
                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing stats section
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Function to animate stat numbers with counting effect
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue);
        
        // Only animate if it's a number
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 30; // 30 steps for smooth animation
            
            // Create counting animation
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    // Animation complete - show final value
                    stat.textContent = finalValue;
                    clearInterval(timer);
                } else {
                    // Update current value (preserve + sign if exists)
                    stat.textContent = Math.floor(currentValue) + (finalValue.includes('+') ? '+' : '');
                }
            }, 50); // Update every 50ms
        }
    });
}