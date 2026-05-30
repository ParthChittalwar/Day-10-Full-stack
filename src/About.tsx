import './About.css';
 export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About MyPort</h2>
        <p>
          MyPort is a modern portfolio platform designed to showcase your projects,
          skills, and professional experience in a clean and professional manner.
        </p>
        <p>
          Built with React and Vite, it provides a fast and responsive user experience
          across all devices. Whether you're a developer, designer, or creative professional,
          MyPort helps you create an impressive online presence.
        </p>
        <div className="about-features">
          <h3>Key Features:</h3>
          <ul>
            <li>Responsive Design</li>
            <li>Easy to Customize</li>
            <li>Fast Performance</li>
            <li>SEO Optimized</li>
            <li>Modern UI Components</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
