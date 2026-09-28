import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import '../styles/Experience.css'

interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  isCurrent: boolean
  description: string
  highlights: string[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 'rice-research',
    title: 'Mechanical Engineering Researcher',
    company: 'Rice University',
    location: 'Houston, TX',
    startDate: 'February 2026',
    endDate: 'Present',
    isCurrent: true,
    description: 'Developed an Arduino-controlled temperature-driven PID feedback loop for a 14-microliter droplet, maintaining temperature stability within 0.25 Celsius over 30-minute intervals and validating the design with CFD and thermal flow simulations in ANSYS Fluent.',
    highlights: [
      'Developed an Arduino-controlled temperature-driven PID feedback loop for a 14-microliter droplet with temperature stability within 0.25 Celsius over 30-minute intervals',
      'Conducted CFD and thermal flow simulations in ANSYS Fluent to optimize system design and validate performance',
      'Worked across hardware design, numerical modeling, fabrication, and data analysis to improve experimental precision and reliability'
    ],
    skills: ['Arduino', 'MATLAB', 'Thermal Control', 'Microfluidics', 'ANSYS Fluent']
  },
  {
    id: 'phillips66',
    title: 'Midstream Engineering Intern',
    company: 'Phillips 66',
    location: 'Houston, TX',
    startDate: 'May 2026',
    endDate: 'August 2026',
    isCurrent: true,
    description: 'Supported engineering work in midstream operations, contributing to technical analysis and problem-solving within a major energy infrastructure environment.',
    highlights: [
      'Worked on projects related to midstream operations and infrastructure analysis',
      'Applied engineering judgment to support safety-conscious technical decision-making',
      'Gained experience in large-scale energy operations and cross-functional collaboration'
    ],
    skills: ['Midstream Engineering', 'Process Thinking', 'Energy Systems', 'Technical Analysis']
  },
  {
    id: 'chevron',
    title: 'Petroleum Engineering Intern',
    company: 'Chevron Corporation',
    location: 'Houston, TX',
    startDate: 'May 2025',
    endDate: 'August 2025',
    isCurrent: false,
    description: 'Collaborated with the Eastern Mediterranean Business Unit to evaluate Dalit offshore gas field development alternatives and optimize field development planning.',
    highlights: [
      'Evaluated Dalit offshore gas field development alternatives and economics',
      'Chose preferred alternative suitable for execution in 2030s timeframe',
      'Refined simulation model to characterize reservoir behavior',
      'Conducted sensitivity analyses to optimize development plan',
      'Integrated reservoir model into surface network simulation',
      'Evaluated alternatives using developed economic models',
      'Presented to 8-member multidisciplinary asset team weekly',
      'Delivered development plan recommendation at final presentation'
    ],
    skills: ['Reservoir Engineering', 'Economic Analysis', 'Simulation Software', 'Technical Presentations']
  },
  {
    id: 'tulsa-research',
    title: 'Mechanical Engineering Researcher',
    company: 'The University of Tulsa',
    location: 'Tulsa, OK',
    startDate: 'May 2024',
    endDate: 'September 2024',
    isCurrent: false,
    description: 'Developed a free-use MATLAB-based image processing algorithm with Cascade and YOLO object detection implementation to streamline processing results from Knoop and Vickers microhardness tests as part of a NASA-funded project.',
    highlights: [
      'Developed a free-use MATLAB-based image processing algorithm with Cascade and YOLO object detection implementation for hardness test analysis',
      'Streamlined processing results from a NASA-funded materials project to improve speed and consistency of experimental evaluation',
      'Applied computer vision and automation techniques to improve research efficiency and support technical interpretation'
    ],
    skills: ['MATLAB', 'Image Processing', 'Computer Vision', 'Materials Testing', 'Automation']
  },
  {
    id: 'tulsa-petroleum',
    title: 'Petroleum Engineering Research Assistant',
    company: 'The University of Tulsa',
    location: 'Tulsa, OK',
    startDate: 'May 2022',
    endDate: 'September 2023',
    isCurrent: false,
    description: 'Conducted a literature review on rotary gas separator geometry, presented findings to the sponsor company, and published a paper while designing and prototyping research hardware.',
    highlights: [
      'Conducted a literature review on rotary gas separator geometry and presented findings to the sponsor company',
      'Designed modifiable impeller and inducer assemblies in Autodesk Fusion 360',
      '3D printed prototypes using both FDM and SLA methods',
      'Published research on rotary gas separator geometry and system behavior',
      'Designed and programmed an ultra-affordable Arduino-based methane tracking system for environmental methane emission monitoring',
      'Designed, built, and demonstrated hands-on energy conversion experiments for high school teachers in a workshop'
    ],
    skills: ['Autodesk Fusion 360', '3D Printing (FDM, SLA)', 'Arduino', 'Literature Review', 'Technical Writing']
  },
  {
    id: 'graham-cad',
    title: '3D CAD Designer',
    company: 'Graham Technical Services',
    location: 'Denver, CO',
    startDate: 'June 2021',
    endDate: 'August 2021',
    isCurrent: false,
    description: 'Designed and modeled an experimental fluid flow facility for the Colorado School of Mines while delivering fabrication-ready documentation and engineering constraints.',
    highlights: [
      'Designed and modelled an experimental fluid flow facility with Autodesk Fusion 360 for the Colorado School of Mines',
      'Delivered assembly mass, technical drawings, and bill of materials to ensure facility fit within desired constraints'
    ],
    skills: ['Autodesk Fusion 360', 'Technical Drawing', 'Bill of Materials', 'Mechanical Design']
  }
]

export default function Experience() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  const toggleExperience = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id)
  }

  return (
    <section className="experience">
      <div className="section-header">
        <h2>Experience</h2>
        <p>Professional roles and research positions that shaped my engineering expertise</p>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot">
              <div className={`dot ${exp.isCurrent ? 'current' : ''}`}></div>
            </div>
            
            <div className={`timeline-card ${expandedExperience === exp.id ? 'expanded' : ''}`}>
              <div className="exp-header" onClick={() => toggleExperience(exp.id)}>
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <div className="exp-meta">
                    <span className="exp-location">
                      <MapPin size={14} /> {exp.location}
                    </span>
                    <span className="exp-date">
                      <Calendar size={14} /> {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  {exp.isCurrent && <span className="current-badge">Current</span>}
                </div>
                <button className="expand-btn">
                  {expandedExperience === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              <p className="exp-description">{exp.description}</p>

              {expandedExperience === exp.id && (
                <div className="exp-expanded">
                  <div className="exp-highlights">
                    <h4>Key Accomplishments</h4>
                    <ul>
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="exp-skills">
                    <h4>Skills & Tools</h4>
                    <div className="skill-tags">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
