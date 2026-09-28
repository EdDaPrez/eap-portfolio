import { Linkedin } from 'lucide-react'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <section className="contact">
      <div className="section-header">
        <h2>Let’s connect.</h2>
      </div>

      <div className="contact-shell">
        <div className="contact-card">
          <div className="contact-header-row">
            <div className="contact-icon">
              <Linkedin size={28} />
            </div>
            <div className="contact-divider" aria-hidden="true" />
            <img
              className="linkedin-headshot"
              src="about-photo.png"
              alt="LinkedIn headshot"
            />
          </div>
          <p className="contact-kicker">LinkedIn</p>
          <p>
            I’m interested in opportunities where I can design systems and solutions to everyday problems, learn quickly, and contribute to meaningful work.
            If you’d like to talk about a project, opportunity, or idea, send me a message on LinkedIn.
          </p>
          <a
            className="linkedin-button"
            href="https://linkedin.com/in/eduardo-a-p"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  )
}
