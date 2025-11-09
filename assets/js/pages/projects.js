// ===== PROJECTS PAGE SPECIFIC JAVASCRIPT =====
// This file handles projects page functionality and animations

// ===== INITIALIZATION =====
// Initialize projects page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render projects from common data
    renderProjects();
    // Render workflow items from common data
    renderAutomateWorkflows();
    // Initialize scroll animations
    initProjectAnimations();
});

// ===== RENDERING FUNCTIONS =====

// Function to render Power Apps projects grid
function renderProjects() {
    const projectsContainer = document.getElementById('powerAppsProjects');
    if (projectsContainer) {
        projectsContainer.innerHTML = projectsData.map(project => `
            <div class="col-lg-4 col-md-6">
                <div class="project-card">
                    <!-- Project Image with Overlay -->
                    <div class="project-img-wrapper">
                        <img src="./assets/images/${project.image}" alt="${project.title}">
                        <div class="project-img-overlay">
                            <span class="project-overlay-text">View Details</span>
                        </div>
                    </div>
                    <!-- Project Content -->
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <!-- Technology Badges -->
                        <div class="project-tech">
                            ${project.tools.map(tool => `<span class="tech-badge">${tool}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Function to render Power Automate workflow items
function renderAutomateWorkflows() {
    const workflowsContainer = document.getElementById('automateWorkflows');
    if (workflowsContainer) {
        workflowsContainer.innerHTML = automateWorkflowsData.map(workflow => 
            `<div class="workflow-item">${workflow}</div>`
        ).join('');
    }
}

// ===== ANIMATION FUNCTIONS =====

// Function to initialize scroll-triggered animations
function initProjectAnimations() {
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

    // Animate project cards with staggered delay
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        // Set initial hidden state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`; // Staggered animation
        // Start observing
        observer.observe(card);
    });

    // Animate workflow items with slide-in effect
    const workflowItems = document.querySelectorAll('.workflow-item');
    workflowItems.forEach((item, index) => {
        // Set initial hidden state (slide from left)
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`; // Staggered animation
        // Start observing
        observer.observe(item);
    });
}