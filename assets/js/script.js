// Data for dynamic content
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

const projectsData = [
    {
        image: '1.png',
        title: 'OneTracker PDI',
        description: 'Tools: Power Apps (Canvas), SharePoint Online, Power Automate, PowerBI Integration.<br/>Developed a tracker app for supply quality engineers to inspect and approve supplier materials. Managed bill uploads and KPI-based ABC ratings. Automated notifications and generated PDF reports for record-keeping.'
    },
    {
        image: '2.png',
        title: 'SPPAP Process Audit',
        description: 'Tools: Power Apps (Canvas), SharePoint Online, Power Automate.<br/>Built an app to manage and track the Process Audit for the SPPAP process. Verified manufacturing steps and maintained a digital audit trail for quality control.'
    },
    {
        image: '3.png',
        title: 'Internal Project Assignation',
        description: 'Tools: Power Apps (Model-driven), Dataverse, Business Process Flow (BPF), Power Automate.<br/>Developed a model-driven app using Power Apps and Dataverse to manage short-term internal project assignments. Implemented business process flows, business rules, and custom JavaScript for form event handling. Applied row-level and column-level security with multiple security roles for secure and controlled data access.'
    },
    {
        image: '4.png',
        title: 'Sales Dashboard & Integrated Form',
        description: 'Tools: Power BI, Power Apps (Embedded).<br/>Designed an interactive Sales Dashboard using Power BI with key metrics like revenue, conversion rate, and product performance. Embedded PowerApps form directly inside Power BI for real-time user input and feedback submission.'
    },
    {
        image: '5.png',
        title: 'Online Tooling Log',
        description: 'Tools: Power Apps (Canvas), SharePoint Online, Power Automate.<br/>Developed a breakdown tracking app for monitoring machine downtime. Enabled barcode scanning, downtime calculation, and tool history maintenance.'
    },
    {
        image: '6.png',
        title: 'Employee Suggestion Portal',
        description: 'Tools: Power Apps (Canvas), SharePoint Online, Power Automate.<br/>Captured production line improvement suggestions from employees. Implemented approval flows and automated email notifications.'
    }
];

const automateWorkflowsData = [
    'Design and implement multi-step approval workflows to streamline business processes.',
    'Automate reminders and scheduled notifications with dynamic email content.',
    'Generate PDF and Excel reports automatically from business data.',
    'Integrate AI Builder for intelligent document classification and routing.',
    'Extract, transform, and update structured data from CSV/Excel files for seamless data management.'
];

const certificationsData = [
    {
        image: 'PL_400_PowePlatform.jpg',
        title: 'PL-400: Microsoft Power Platform Developer',
        credentialId: '1940EE0F7D551EDE',
        certNumber: '5EXC47-76A657',
        verifyLink: 'https://learn.microsoft.com/api/credentials/share/en-us/MohdSiddiqui-9671/1940EE0F7D551EDE?sharingId=7E55377E87AB2D21'
    },
    {
        image: 'PL_300_PowerBI.jpg',
        title: 'PL-300: Microsoft Power BI Data Analyst',
        credentialId: 'C49F0645FBB59FD6',
        certNumber: 'EAI6D0-A74020',
        verifyLink: 'https://learn.microsoft.com/api/credentials/share/en-us/MohdSiddiqui-9671/C49F0645FBB59FD6?sharingId=7E55377E87AB2D21'
    },
    {
        image: 'AZ_900_Azure.png',
        title: 'AZ-900: Microsoft Azure Fundamentals',
        credentialId: 'B1F370D931E32178',
        certNumber: '1EA1EB-FB7441',
        verifyLink: 'https://learn.microsoft.com/en-us/users/mohdsiddiqui-9671/credentials/certification/azure-fundamentals?tab=credentials-tab'
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    renderSkills();
    renderProjects();
    renderAutomateWorkflows();
    renderCertifications();
    initSmoothScrolling();
});

// Render Skills
function renderSkills() {
    const skillsContainer = document.getElementById('skills');
    skillsContainer.innerHTML = skillsData.map(skill => 
        `<span class="skill-badge">${skill}</span>`
    ).join('');
}

// Render Projects
function renderProjects() {
    const projectsContainer = document.getElementById('powerAppsProjects');
    projectsContainer.innerHTML = projectsData.map(project => `
        <div class="col-md-4">
            <div class="card h-100 text-white glass-effect mb-3 project-card-hover">
                <div class="project-img-wrapper">
                    <img src="./assets/images/${project.image}" class="card-img-top" alt="${project.title}">
                </div>
                <div class="card-body">
                    <h5 class="card-title fs-5 fw-bold">${project.title}</h5>
                    <p class="card-text text-white-50">${project.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Automate Workflows
function renderAutomateWorkflows() {
    const workflowsContainer = document.getElementById('automateWorkflows');
    workflowsContainer.innerHTML = automateWorkflowsData.map(workflow => 
        `<li>${workflow}</li>`
    ).join('');
}

// Render Certifications
function renderCertifications() {
    const certificationsContainer = document.getElementById('certificationsContainer');
    certificationsContainer.innerHTML = certificationsData.map(cert => `
        <div class="col-md-4">
            <div class="card h-100 text-white glass-effect text-center p-3 mb-3 cert-card-hover">
                <div class="cert-img-wrapper">
                    <img src="./assets/images/${cert.image}" alt="${cert.title}" class="cert-img">
                </div>
                <div class="card-body">
                    <h5 class="card-title fs-5 fw-bold">${cert.title}</h5>
                    <p class="card-text text-white-50 mb-1">Credential ID: ${cert.credentialId}</p>
                    <p class="card-text text-white-50 mb-3">Certification number: ${cert.certNumber}</p>
                    <a href="${cert.verifyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-info">
                        Verify Certificate
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize Smooth Scrolling
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