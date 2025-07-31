import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App-header">
      <h1 className="text-center text-white mb-4">My Portfolio</h1>
      <section className="bg-dark text-white p-4 rounded mb-4">
        <h2>About Me</h2>
        <p>Hello! I am a passionate developer excited to build amazing web experiences.</p>
      </section>
      <section className="bg-secondary text-white p-4 rounded mb-4">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Bootstrap</li>
        </ul>
      </section>
      <section className="bg-dark text-white p-4 rounded mb-4">
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - Description</li>
          <li>Project 2 - Description</li>
        </ul>
      </section>
      <section className="bg-secondary text-white p-4 rounded">
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
      </section>
    </div>
  );
}

export default App;
