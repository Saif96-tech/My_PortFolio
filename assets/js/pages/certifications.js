// ===== CERTIFICATIONS PAGE SPECIFIC JAVASCRIPT =====
// This file handles certifications page functionality and animations

// ===== INITIALIZATION =====
// Initialize certifications page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render certifications from common data
    renderCertifications();
    // Initialize scroll animations
    initCertificationAnimations();
});

// ===== RENDERING FUNCTIONS =====

// Function to render certification cards
function renderCertifications() {
    const certificationsContainer = document.getElementById('certificationsContainer');
    if (certificationsContainer) {
        certificationsContainer.innerHTML = certificationsData.map((cert, index) => `
            <div class="col-lg-4 col-md-6">
                <div class="cert-card">
                    <!-- Achievement Badge -->
                    <div class="achievement-badge">Certified</div>
                    
                    <!-- Certificate Image -->
                    <div class="cert-img-wrapper">
                        <img src="./assets/images/${cert.image}" alt="${cert.title}" class="cert-img">
                    </div>
                    
                    <!-- Certificate Details -->
                    <h3 class="cert-title">${cert.title}</h3>
                    <div class="cert-details">
                        <p class="cert-detail"><strong>Credential ID:</strong> ${cert.credentialId}</p>
                        <p class="cert-detail"><strong>Certification #:</strong> ${cert.certNumber}</p>
                        <p class="cert-detail"><strong>Issued:</strong> ${cert.issueDate}</p>
                    </div>
                    
                    <!-- Verification Button -->
                    <a href="${cert.verifyLink}" target="_blank" rel="noopener noreferrer" class="cert-verify-btn">
                        Verify Certificate
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// ===== ANIMATION FUNCTIONS =====

// Function to initialize scroll-triggered animations
function initCertificationAnimations() {
    // Observer options - trigger when 10% visible
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Create intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate element when it comes into view
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate certification cards with staggered delay
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, index) => {
        // Set initial hidden state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`; // Longer stagger for certs
        // Start observing
        observer.observe(card);
    });

    // Animate benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach((item, index) => {
        // Set initial hidden state
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        // Start observing
        observer.observe(item);
    });

    // Add click tracking for certificate verification links
    addVerificationTracking();
}

// ===== UTILITY FUNCTIONS =====

// Function to add click tracking for verification buttons
function addVerificationTracking() {
    document.querySelectorAll('.cert-verify-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Log verification click (can be used for analytics)
            console.log('Certificate verification clicked:', this.href);
            // You can add Google Analytics or other tracking here
        });
    });
}