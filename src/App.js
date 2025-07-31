import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-sky-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-sky-400 transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors duration-300">Contact</a>
          </nav>
          <button id="mobile-menu-button" className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden">
        </div>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2070&auto=format&fit=crop')"}}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 p-6">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              Hello, I'm <span className="gradient-text">Your Name</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I am a passionate [your profession, e.g. web developer, designer] who creates amazing digital experiences.
            </p>
            <a href="#projects" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 inline-block">
              See My Work
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-12">About Me</h3>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 text-center">
                <img src="https://placehold.co/400x400/1f2937/e5e7eb?text=Your+Photo" alt="Your profile" className="rounded-full w-64 h-64 mx-auto border-4 border-gray-600 shadow-lg" />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-6">
                  Write a short introduction about yourself here. Talk about your interests, your passion for your work, and what you do. You can also mention your education or professional background. The goal is to give visitors a quick snapshot of your personality and skills.
                </p>
                <h4 className="text-2xl font-semibold mb-4">My Skills</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-700 text-sky-300 text-sm font-medium px-4 py-2 rounded-full">HTML</span>
                  <span className="bg-gray-700 text-sky-300 text-sm font-medium px-4 py-2 rounded-full">CSS & Tailwind</span>
                  <span className="bg-gray-700 text-sky-300 text-sm font-medium px-4 py-2 rounded-full">JavaScript</span>
                  <span className="bg-gray-700 text-sky-300 text-sm font-medium px-4 py-2 rounded-full">React</span>
                  <span className="bg-gray-700 text-sky-300 text-sm font-medium px-4 py-2 rounded-full">Node.js</span>
                  <span className="bg-gray-700 text-sky-300 text-sm font-medium px-4 py-2 rounded-full">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 bg-gray-900">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-center mb-12">My Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="glass-effect rounded-lg overflow-hidden group">
                <img src="https://placehold.co/600x400/1f2937/e5e7eb?text=Project+1" alt="Project 1" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Project Name</h4>
                  <p className="text-gray-400 mb-4">Write a short description of the project here. What does it do and what technologies did you use to build it?</p>
                  <a href="#" className="text-sky-400 hover:text-sky-300 font-semibold">Learn More &rarr;</a>
                </div>
              </div>
              {/* Project 2 */}
              <div className="glass-effect rounded-lg overflow-hidden group">
                <img src="https://placehold.co/600x400/1f2937/e5e7eb?text=Project+2" alt="Project 2" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Project Name</h4>
                  <p className="text-gray-400 mb-4">Write a short description of the project here. What does it do and what technologies did you use to build it?</p>
                  <a href="#" className="text-sky-400 hover:text-sky-300 font-semibold">Learn More &rarr;</a>
                </div>
              </div>
              {/* Project 3 */}
              <div className="glass-effect rounded-lg overflow-hidden group">
                <img src="https://placehold.co/600x400/1f2937/e5e7eb?text=Project+3" alt="Project 3" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">Project Name</h4>
                  <p className="text-gray-400 mb-4">Write a short description of the project here. What does it do and what technologies did you use to build it?</p>
                  <a href="#" className="text-sky-400 hover:text-sky-300 font-semibold">Learn More &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-6 max-w-xl text-center">
            <h3 className="text-4xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-8">
              Do you have an opportunity for me or just want to say hello? Send me a message.
            </p>
            <form id="contact-form">
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" required />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" required />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                Send Message
              </button>
            </form>
            <div id="form-message" className="mt-4 text-green-400"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-sky-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-sky-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Twitter</a>
          </div>
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>

      {/* Tailwind & Glass Effect Styles */}
      <style>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(to right, #38bdf8, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      {/* Mobile Menu & Form Script */}
      <script dangerouslySetInnerHTML={{__html: `
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
          document.getElementById('mobile-menu').classList.toggle('hidden');
        });
        Array.from(document.getElementById('mobile-menu').getElementsByTagName('a')).forEach(function(link) {
          link.addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('hidden');
          });
        });
        document.getElementById('contact-form').addEventListener('submit', function(e) {
          e.preventDefault();
          document.getElementById('form-message').textContent = 'Your message has been sent successfully!';
          document.getElementById('contact-form').reset();
          setTimeout(function() {
            document.getElementById('form-message').textContent = '';
          }, 5000);
        });
      `}} />
    </div>
  );
}

export default App;
