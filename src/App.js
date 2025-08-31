function App() {
    

    return (
        <div className="antialiased">
            {/* Header */}
            <nav className="navbar navbar-expand-md navbar-dark fixed-top glass-effect">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3 gradient-text" href="#home" style={{ display: 'flex', alignItems: 'center', fontWeight: 800, fontSize: '2rem', letterSpacing: '2px', background: 'linear-gradient(to right, #38bdf8, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" style={{height: '40px', marginRight: '10px', objectFit: 'contain'}} />
                        Portfolio
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#certifications">Certifications</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main>
                {/* Home Section */}
                <section id="home" style={{ minHeight: '70vh', backgroundImage: `url(${process.env.PUBLIC_URL + '/bgimage.png'})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
                    <div className="container position-relative z-1 p-4" style={{ zIndex: 2 }}>
                        <h1 className="display-3 fw-bold mb-3">Hello, I'm <span className="gradient-text">Mohd Saif Siddiqui</span></h1>
                        <p className="lead fs-4 text-light mb-4">
                            I'm a passionate <b>Power Platform IT Engineer</b> (Power Apps, Power Automate, Power BI, Power Virtual Agents) who builds smart business solutions and automations using Microsoft Power Platform and more.
                        </p>
                        <a href="#projects" className="btn btn-primary btn-lg">
                            View My projects
                        </a>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-5">
                    <div className="container">
                        <h2 className="text-center display-5 fw-bold mb-5">About Me</h2>
                        <div className="row align-items-center g-5">
                            <div className="col-md-4 text-center">
                                <img src={process.env.PUBLIC_URL + '/mypic.jpg'} alt="Mohd Saif Siddiqui" className="img-fluid border border-4 border-secondary shadow-lg" style={{ width: '260px', height: '260px', objectFit: 'cover', objectPosition: 'top center', background: '#222', borderRadius: '24px' }} />
                            </div>
                            <div className="col-md-8">
                                <p className="fs-5 text-white-50 mb-3">
                                    I am a Power Platform Developer with a strong focus on building business apps, automating workflows, and delivering data-driven solutions. My expertise includes Power Apps (Canvas & Model-Driven), Power Automate, SharePoint Online, and Power BI integration. I am passionate about digital transformation and process improvement through technology.
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">Power Apps (Canvas & Model-Driven)</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">Power Automate (Cloud Flows)</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">Dataverse</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">Power BI</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">SharePoint Online</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">JavaScript</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">HTML5</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">CSS3</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">SQL</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">ServiceNow</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">VS Code</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">PowerShell</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">ShareGate</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">Git/GitHub</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">Co-Pilot</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-5 bg-dark">
                    <div className="container">
                        <h2 className="display-5 fw-bold mb-4 text-info">Projects</h2>
                        <div className="mb-4">
                            <h3 className="text-info mb-3">Microsoft PowerApps Projects</h3>
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="card h-100 text-white glass-effect mb-3 project-card-hover">
                                        <div className="project-img-wrapper">
                                            <img src={process.env.PUBLIC_URL + '/1.png'} className="card-img-top" alt="OneTracker PDI" style={{height: '260px', objectFit: 'cover', width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fs-5 fw-bold">OneTracker PDI</h5>
                                            <p className="card-text text-white-50">Tools: Power Apps (Canvas), SharePoint Online, Power Automate, PowerBI Integration.<br/>Developed a tracker app for supply quality engineers to inspect and approve supplier materials. Managed bill uploads and KPI-based ABC ratings. Automated notifications and generated PDF reports for record-keeping.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 text-white glass-effect mb-3 project-card-hover">
                                        <div className="project-img-wrapper">
                                            <img src={process.env.PUBLIC_URL + '/2.png'} className="card-img-top" alt="SPPAP Process Audit" style={{height: '260px', objectFit: 'cover', width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fs-5 fw-bold">SPPAP Process Audit</h5>
                                            <p className="card-text text-white-50">Tools: Power Apps (Canvas), SharePoint Online, Power Automate.<br/>Built an app to manage and track the Process Audit for the SPPAP process. Verified manufacturing steps and maintained a digital audit trail for quality control.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 text-white glass-effect mb-3 project-card-hover">
                                        <div className="project-img-wrapper">
                                            <img src={process.env.PUBLIC_URL + '/3.png'} className="card-img-top" alt="Internal Project Assignation" style={{height: '260px', objectFit: 'cover', width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fs-5 fw-bold">Internal Project Assignation</h5>
                                            <p className="card-text text-white-50">Tools: Power Apps (Model-driven), Dataverse, Business Process Flow (BPF), Power Automate.<br/>Developed a model-driven app using Power Apps and Dataverse to manage short-term internal project assignments. Implemented business process flows, business rules, and custom JavaScript for form event handling. Applied row-level and column-level security with multiple security roles for secure and controlled data access.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 text-white glass-effect mb-3 project-card-hover">
                                        <div className="project-img-wrapper">
                                            <img src={process.env.PUBLIC_URL + '/4.png'} className="card-img-top" alt="Sales Dashboard & Integrated Form" style={{height: '260px', objectFit: 'cover', width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fs-5 fw-bold">Sales Dashboard & Integrated Form</h5>
                                            <p className="card-text text-white-50">Tools: Power BI, Power Apps (Embedded).<br/>Designed an interactive Sales Dashboard using Power BI with key metrics like revenue, conversion rate, and product performance. Embedded PowerApps form directly inside Power BI for real-time user input and feedback submission.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 text-white glass-effect mb-3 project-card-hover">
                                        <div className="project-img-wrapper">
                                            <img src={process.env.PUBLIC_URL + '/5.png'} className="card-img-top" alt="Online Tooling Log" style={{height: '260px', objectFit: 'cover', width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fs-5 fw-bold">Online Tooling Log</h5>
                                            <p className="card-text text-white-50">Tools: Power Apps (Canvas), SharePoint Online, Power Automate.<br/>Developed a breakdown tracking app for monitoring machine downtime. Enabled barcode scanning, downtime calculation, and tool history maintenance.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card h-100 text-white glass-effect mb-3 project-card-hover">
                                        <div className="project-img-wrapper">
                                            <img src={process.env.PUBLIC_URL + '/6.png'} className="card-img-top" alt="Employee Suggestion Portal" style={{height: '260px', objectFit: 'cover', width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fs-5 fw-bold">Employee Suggestion Portal</h5>
                                            <p className="card-text text-white-50">Tools: Power Apps (Canvas), SharePoint Online, Power Automate.<br/>Captured production line improvement suggestions from employees. Implemented approval flows and automated email notifications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-info mb-3">MS PowerAutomate Workflows</h3>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="card h-100 text-white glass-effect mb-3">
                                        <div className="card-body">
                                            <ul className="fs-6 text-white-50 mb-0">
                                                <li>Design and implement multi-step approval workflows to streamline business processes.</li>
                                                <li>Automate reminders and scheduled notifications with dynamic email content.</li>
                                                <li>Generate PDF and Excel reports automatically from business data.</li>
                                                <li>Integrate AI Builder for intelligent document classification and routing.</li>
                                                <li>Extract, transform, and update structured data from CSV/Excel files for seamless data management.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="py-5 bg-secondary">
                    <div className="container">
                        <h2 className="display-5 fw-bold mb-4 text-warning text-center">Certifications</h2>
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-4">
                                <div className="card h-100 text-white glass-effect text-center p-3 mb-3 cert-card-hover">
                                    <div className="cert-img-wrapper">
                                        <img src={process.env.PUBLIC_URL + '/PL_400_PowePlatform.jpg'} alt="PL-400: Microsoft Power Platform Developer" className="cert-img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fs-5 fw-bold">PL-400: Microsoft Power Platform Developer</h5>
                                        <p className="card-text text-white-50 mb-1">Credential ID: 1940EE0F7D551EDE</p>
                                        <p className="card-text text-white-50 mb-3">Certification number: 5EXC47-76A657</p>
                                        <a href="https://learn.microsoft.com/api/credentials/share/en-us/MohdSiddiqui-9671/1940EE0F7D551EDE?sharingId=7E55377E87AB2D21" 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           className="btn btn-sm btn-info">
                                            Verify Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 text-white glass-effect text-center p-3 mb-3 cert-card-hover">
                                    <div className="cert-img-wrapper">
                                        <img src={process.env.PUBLIC_URL + '/PL_300_PowerBI.jpg'} alt="PL-300: Microsoft Power BI Data Analyst" className="cert-img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fs-5 fw-bold">PL-300: Microsoft Power BI Data Analyst</h5>
                                        <p className="card-text text-white-50 mb-1">Credential ID: C49F0645FBB59FD6</p>
                                        <p className="card-text text-white-50 mb-3">Certification number: EAI6D0-A74020</p>
                                        <a href="https://learn.microsoft.com/api/credentials/share/en-us/MohdSiddiqui-9671/C49F0645FBB59FD6?sharingId=7E55377E87AB2D21" 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           className="btn btn-sm btn-info">
                                            Verify Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 text-white glass-effect text-center p-3 mb-3 cert-card-hover">
                                    <div className="cert-img-wrapper">
                                        <img src={process.env.PUBLIC_URL + '/AZ_900_Azure.png'} alt="AZ-900: Microsoft Azure Fundamentals" className="cert-img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fs-5 fw-bold">AZ-900: Microsoft Azure Fundamentals</h5>
                                        <p className="card-text text-white-50 mb-1">Credential ID: B1F370D931E32178</p>
                                        <p className="card-text text-white-50 mb-3">Certification number: 1EA1EB-FB7441</p>
                                        <a href="https://learn.microsoft.com/en-us/users/mohdsiddiqui-9671/credentials/certification/azure-fundamentals?tab=credentials-tab" 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           className="btn btn-sm btn-info">
                                            Verify Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-dark py-4">
                <div className="container text-center text-white-50">
                    <div className="mb-3 d-flex justify-content-center align-items-center gap-3">
                        <a href="https://www.linkedin.com/in/mohd-saif-siddiqui-b2b25a152" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none mx-2" title="LinkedIn">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{height: '28px', width: '28px', verticalAlign: 'middle', marginRight: '6px'}} />
                        </a>
                        <a href="mailto:saifsiddiqui96@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none mx-2" title="Gmail">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Gmail" style={{height: '28px', width: '28px', verticalAlign: 'middle', marginRight: '6px'}} />
                        </a>
                    </div>
                    <p>&copy; 2025 Mohd Saif Siddiqui. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;