import { Award, BookOpen, Zap } from 'lucide-react'
import '../styles/Education.css'

export default function Education() {
  return (
    <section className="education">
      <div className="section-header">
        <h2>Education</h2>
        <p>Building a strong foundation in engineering, analysis, and problem-solving</p>
      </div>

      <div className="education-main">
        <div className="degree-card">
          <div className="degree-header">
            <h3>Bachelor of Science in Mechanical Engineering</h3>
            <p className="institution">Rice University, Houston, TX</p>
          </div>

          <div className="degree-details">
            <div className="detail-item">
              <span className="label">Expected Graduation:</span>
              <span className="value">May 2028</span>
            </div>
            <div className="detail-item">
              <span className="label">GPA:</span>
              <span className="value highlight">3.91 / 4.0</span>
            </div>
          </div>

          <div className="coursework">
            <h4>Relevant Coursework</h4>
            <div className="course-list">
              <div className="course-item">
                <span className="course-name">Heat Transfer</span>
              </div>
              <div className="course-item">
                <span className="course-name">Fluid Mechanics</span>
              </div>
              <div className="course-item">
                <span className="course-name">Thermodynamics</span>
              </div>
              <div className="course-item">
                <span className="course-name">Dynamics</span>
              </div>
              <div className="course-item">
                <span className="course-name">Stress Analysis</span>
              </div>
              <div className="course-item">
                <span className="course-name">Intro to Engineering Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="achievements-grid">
        <div className="achievement-card">
          <div className="achievement-icon">
            <Award size={32} />
          </div>
          <h4>Certifications</h4>
          <ul>
            <li>Certified SOLIDWORKS Associate (CSWA)</li>
            <li>Autodesk Certified User: Fusion 360</li>
          </ul>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">
            <Zap size={32} />
          </div>
          <h4>Achievements</h4>
          <ul>
            <li>Engineering competition finalist in a multidisciplinary design challenge</li>
            <li>Recognized for academic excellence in engineering coursework</li>
          </ul>
        </div>

        <div className="achievement-card">
          <div className="achievement-icon">
            <BookOpen size={32} />
          </div>
          <h4>Publications</h4>
          <ul>
            <li>"A Novel Approach to Knoop and Vickers Microindentation Test Analysis" – In preparation</li>
            <li>"Review of influence of geometry on rotary gas separators" – Taylor and Francis, March 2025</li>
          </ul>
        </div>
      </div>

      <div className="languages">
        <h3>Languages</h3>
        <div className="language-list">
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="language-level">Native / Fluent</span>
          </div>
          <div className="language-item">
            <span className="language-name">Spanish</span>
            <span className="language-level">Verbal & Written Fluency</span>
          </div>
        </div>
      </div>
    </section>
  )
}
