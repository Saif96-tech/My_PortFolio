import React, { useState } from 'react';

// Note: This component uses Bootstrap.
// Make sure you have added the Bootstrap CDN links to your public/index.html file.
// You will also need to add the following custom styles to your index.css or App.css file.
// CSS moved to index.css or App.css for error-free JS.

function App() {
    const [formMessage, setFormMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormMessage('Your message has been sent successfully!');
        e.target.reset();
        setTimeout(() => {
            setFormMessage('');
        }, 5000);
    };

    return (
        <div className="antialiased">
            {/* Header */}
            <nav className="navbar navbar-expand-md navbar-dark fixed-top glass-effect">
                <div className="container">
                    <a className="navbar-brand gradient-text fw-bold fs-4" href="#home">Portfolio</a>
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
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main>
                {/* Home Section */}
                <section id="home" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2070&auto=format&fit=crop')" }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
                    <div className="container position-relative z-1 p-4">
                        <h1 className="display-3 fw-bold mb-3">Hello, I'm <span className="gradient-text">Your Name</span></h1>
                        <p className="lead fs-4 text-light mb-4">
                            I'm a passionate [Your Profession, e.g., Web Developer, Designer] who builds amazing digital experiences.
                        </p>
                        <a href="#projects" className="btn btn-primary btn-lg">
                            View My Work
                        </a>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-5">
                    <div className="container">
                        <h2 className="text-center display-5 fw-bold mb-5">About Me</h2>
                        <div className="row align-items-center g-5">
                            <div className="col-md-4 text-center">
                                <img src="https://placehold.co/400x400/212529/e5e7eb?text=Your+Photo" alt="Your profile picture" className="img-fluid rounded-circle border border-4 border-secondary shadow-lg" />
                            </div>
                            <div className="col-md-8">
                                <p className="fs-5 text-white-50 mb-4">
                                    Write a brief introduction about yourself here. Talk about your interests, your passion for your work, and what you do. You can also talk about your education or professional background.
                                </p>
                                <h3 className="fs-4 fw-semibold mb-3">My Skills</h3>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">HTML</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">CSS & Bootstrap</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">JavaScript</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">React</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">Node.js</span>
                                    <span className="badge bg-info-subtle text-info-emphasis p-2 fs-6">Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-5 bg-dark">
                    <div className="container">
                        <h2 className="text-center display-5 fw-bold mb-5">My Projects</h2>
                        <div className="row g-4">
                            {/* Project 1 */}
                            <div className="col-md-6 col-lg-4">
                                <div className="card h-100 text-white glass-effect">
                                    <img src="https://placehold.co/600x400/212529/e5e7eb?text=Project+1" className="card-img-top" alt="Project 1" />
                                    <div className="card-body">
                                        <h5 className="card-title fs-4 fw-bold">Project Name</h5>
                                        <p className="card-text text-white-50">A brief description of the project. What it does and what technologies you used to build it.</p>
                                        <a href="#" className="btn btn-outline-info">Learn More &rarr;</a>
                                    </div>
                                </div>
                            </div>
                            {/* Project 2 */}
                             <div className="col-md-6 col-lg-4">
                                <div className="card h-100 text-white glass-effect">
                                    <img src="https://placehold.co/600x400/212529/e5e7eb?text=Project+2" className="card-img-top" alt="Project 2" />
                                    <div className="card-body">
                                        <h5 className="card-title fs-4 fw-bold">Project Name</h5>
                                        <p className="card-text text-white-50">A brief description of the project. What it does and what technologies you used to build it.</p>
                                        <a href="#" className="btn btn-outline-info">Learn More &rarr;</a>
                                    </div>
                                </div>
                            </div>
                            {/* Project 3 */}
                             <div className="col-md-6 col-lg-4">
                                <div className="card h-100 text-white glass-effect">
                                    <img src="https://placehold.co/600x400/212529/e5e7eb?text=Project+3" className="card-img-top" alt="Project 3" />
                                    <div className="card-body">
                                        <h5 className="card-title fs-4 fw-bold">Project Name</h5>
                                        <p className="card-text text-white-50">A brief description of the project. What it does and what technologies you used to build it.</p>
                                        <a href="#" className="btn btn-outline-info">Learn More &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-5">
                    <div className="container" style={{ maxWidth: '700px' }}>
                        <div className="text-center">
                            <h2 className="display-5 fw-bold mb-3">Contact Me</h2>
                            <p className="lead text-white-50 mb-4">
                                Have an opportunity for me or just want to say hi? Send me a message.
                            </p>
                        </div>
                        <form id="contact-form" onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 btn-lg">
                                Send Message
                            </button>
                        </form>
                        {formMessage && <div className="mt-4 text-center text-success">{formMessage}</div>}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-dark py-4">
                <div className="container text-center text-white-50">
                    <div className="mb-3">
                         <a href="#" className="text-white-50 text-decoration-none mx-2">GitHub</a>
                         <a href="#" className="text-white-50 text-decoration-none mx-2">LinkedIn</a>
                         <a href="#" className="text-white-50 text-decoration-none mx-2">Twitter</a>
                    </div>
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
