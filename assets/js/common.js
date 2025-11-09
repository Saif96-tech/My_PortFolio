// ===== COMMON DATA AND FUNCTIONS =====
// This file contains shared data and functions used across all pages

// ===== SKILLS DATA =====
// Array of technical skills to display on home page
const skillsData = [
    'Power Apps (Canvas & Model-Driven)',
    'Power Automate (Cloud Flows)',
    'Dataverse',
    'Power BI',
    'SharePoint Online',
    'JavaScript',
    'HTML5',
    'CSS3',
    'SQL',
    'ServiceNow',
    'VS Code',
    'PowerShell',
    'ShareGate',
    'Git/GitHub',
    'Co-Pilot'
];

// ===== PROJECTS DATA =====
// Array of project objects with details and tools used
const projectsData = [
    {
        image: '1.png',
        title: 'OneTracker PDI',
        description: 'Developed a tracker app for supply quality engineers to inspect and approve supplier materials. Managed bill uploads and KPI-based ABC ratings. Automated notifications and generated PDF reports for record-keeping.',
        tools: ['Power Apps (Canvas)', 'SharePoint Online', 'Power Automate', 'Power BI']
    },
    {
        image: '2.png',
        title: 'SPPAP Process Audit',
        description: 'Built an app to manage and track the Process Audit for the SPPAP process. Verified manufacturing steps and maintained a digital audit trail for quality control.',
        tools: ['Power Apps (Canvas)', 'SharePoint Online', 'Power Automate']
    },
    {
        image: '3.png',
        title: 'Internal Project Assignation',
        description: 'Developed a model-driven app using Power Apps and Dataverse to manage short-term internal project assignments. Implemented business process flows, business rules, and custom JavaScript for form event handling.',
        tools: ['Power Apps (Model-driven)', 'Dataverse', 'Business Process Flow', 'Power Automate']
    },
    {
        image: '4.png',
        title: 'Sales Dashboard & Integrated Form',
        description: 'Designed an interactive Sales Dashboard using Power BI with key metrics like revenue, conversion rate, and product performance. Embedded PowerApps form directly inside Power BI for real-time user input.',
        tools: ['Power BI', 'Power Apps (Embedded)']
    },
    {
        image: '5.png',
        title: 'Online Tooling Log',
        description: 'Developed a breakdown tracking app for monitoring machine downtime. Enabled barcode scanning, downtime calculation, and tool history maintenance.',
        tools: ['Power Apps (Canvas)', 'SharePoint Online', 'Power Automate']
    },
    {
        image: '6.png',
        title: 'Employee Suggestion Portal',
        description: 'Captured production line improvement suggestions from employees. Implemented approval flows and automated email notifications.',
        tools: ['Power Apps (Canvas)', 'SharePoint Online', 'Power Automate']
    }
];

// ===== AUTOMATE WORKFLOWS DATA =====
// Array of Power Automate workflow descriptions
const automateWorkflowsData = [
    'Design and implement multi-step approval workflows to streamline business processes.',
    'Automate reminders and scheduled notifications with dynamic email content.',
    'Generate PDF and Excel reports automatically from business data.',
    'Integrate AI Builder for intelligent document classification and routing.',
    'Extract, transform, and update structured data from CSV/Excel files for seamless data management.'
];

// ===== CERTIFICATIONS DATA =====
// Array of certification objects with verification details
const certificationsData = [
    {
        image: 'PL_400_PowePlatform.jpg',
        title: 'PL-400: Microsoft Power Platform Developer',
        credentialId: '1940EE0F7D551EDE',
        certNumber: '5EXC47-76A657',
        verifyLink: 'https://learn.microsoft.com/api/credentials/share/en-us/MohdSiddiqui-9671/1940EE0F7D551EDE?sharingId=7E55377E87AB2D21',
        issueDate: 'December 2024'
    },
    {
        image: 'PL_300_PowerBI.jpg',
        title: 'PL-300: Microsoft Power BI Data Analyst',
        credentialId: 'C49F0645FBB59FD6',
        certNumber: 'EAI6D0-A74020',
        verifyLink: 'https://learn.microsoft.com/api/credentials/share/en-us/MohdSiddiqui-9671/C49F0645FBB59FD6?sharingId=7E55377E87AB2D21',
        issueDate: 'November 2024'
    },
    {
        image: 'AZ_900_Azure.png',
        title: 'AZ-900: Microsoft Azure Fundamentals',
        credentialId: 'B1F370D931E32178',
        certNumber: '1EA1EB-FB7441',
        verifyLink: 'https://learn.microsoft.com/en-us/users/mohdsiddiqui-9671/credentials/certification/azure-fundamentals?tab=credentials-tab',
        issueDate: 'October 2024'
    }
];

// ===== COMMON FUNCTIONS =====

// Function to render skills badges on home page
function renderSkills() {
    const skillsContainer = document.getElementById('skills');
    if (skillsContainer) {
        skillsContainer.innerHTML = skillsData.map(skill => 
            `<span class="skill-badge">${skill}</span>`
        ).join('');
    }
}

// Function to enable smooth scrolling for anchor links
function initSmoothScrolling() {
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
}

// ===== INITIALIZATION =====
// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Enable smooth scrolling
    initSmoothScrolling();
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});