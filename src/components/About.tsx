import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import '../styles/About.css'

interface ExperienceItem {
  id: string
  title: string
  company: string
  date: string
  summary: string
  details: string[]
  tags: string[]
  logo?: string
  logoClass?: string
}

const awards = [
  {
    title: 'Microsoft-sponsored Texas A&M SHPEathon',
    detail: 'Won first place and a $500 prize for PolyRail, a 48-hour engineering design sprint focused on replacing wooden railroad ties with a composite alternative.',
  },
]

const experienceItems: ExperienceItem[] = [
  {
    id: 'research',
    title: 'Microfluidics Research Assistant',
    company: 'Rice University',
    date: 'Feb 2026 – Present',
    summary: 'Developed an Arduino-controlled temperature-driven PID feedback loop for a 14-microliter droplet, maintaining temperature stability within 0.25°C over 30-minute intervals while validating the design with CFD and thermal-flow simulations in ANSYS Fluent.',
    details: [
      'Developed an Arduino-controlled temperature-driven PID feedback loop for a 14-microliter droplet with stability within 0.25°C over 30-minute intervals.',
      'Conducted CFD and thermal-flow simulations in ANSYS Fluent to refine the system design and validate experimental performance.',
      'Worked across hardware design, fabrication, numerical modeling, and data analysis to improve experimental reliability and precision.',
    ],
    tags: ['Microfluidics', 'Arduino', 'MATLAB', 'ANSYS Fluent', 'Thermal Control'],
    logo: `${import.meta.env.BASE_URL}rice-logo.png`,
    logoClass: 'rice-logo',
  },
  {
    id: 'p66',
    title: 'Midstream Engineering Intern',
    company: 'Phillips 66',
    date: 'May 2026 – Aug 2026',
    summary: 'Built a data-driven hydraulic model calibration workflow for gas gathering systems and improved pressure-drop prediction accuracy with field-informed modeling.',
    details: [
      'Developed a data-driven hydraulic model calibration workflow for gas gathering systems to reduce manual tuning and improve pressure-drop predictions.',
      'Built an Excel-based tool using SCADA data to identify optimal operating days for model calibration across three regions.',
      'Analyzed field data to derive a velocity-based correlation for pipe efficiency, improving model accuracy.',
      'Evaluated pipe equations and established a standardized roughness value to minimize average pressure error across models.',
    ],
    tags: ['Midstream Engineering', 'Hydraulic Modeling', 'SCADA', 'Pressure Drop'],
    logo: `${import.meta.env.BASE_URL}p66-logo.png`,
    logoClass: 'p66-logo',
  },
  {
    id: 'chevron',
    title: 'Petroleum Engineering Intern',
    company: 'Chevron Corporation',
    date: 'May 2025 – Aug 2025',
    summary: 'Evaluated offshore gas field development alternatives for the Eastern Mediterranean Business Unit and recommended a viable plan using economic and reservoir analyses.',
    details: [
      'Collaborated with the Eastern Mediterranean Business Unit to evaluate Dalit offshore gas field development alternatives and assess the economics of the options.',
      'Refined a simulation model to characterize the reservoir, conducted sensitivity analyses to optimize the development plan, integrated this model into a surface network, and evaluated alternatives using developed economic models.',
      'Presented to a multidisciplinary eight-member asset team weekly and delivered the final development recommendation in a presentation.',
    ],
    tags: ['Reservoir Analysis', 'Development Planning', 'Economic Modeling', 'Decision Support'],
    logo: `${import.meta.env.BASE_URL}chevron-logo.png`,
    logoClass: 'chevron-logo',
  },
  {
    id: 'hardness',
    title: 'Mechanical Engineering Researcher',
    company: 'University of Tulsa',
    date: 'May 2024 – Sep 2024',
    summary: 'Developed a MATLAB-based image-processing workflow using Cascade and YOLO object detection to streamline Knoop and Vickers microhardness analysis for a NASA-funded project.',
    details: [
      'Developed a free-use MATLAB-based image-processing algorithm with Cascade and YOLO object detection for Knoop and Vickers microhardness analyses.',
      'Streamlined materials testing workflows to improve speed and consistency of experimental evaluation.',
      'Applied computer vision and automation techniques to improve research efficiency and support technical interpretation.',
    ],
    tags: ['MATLAB', 'Image Processing', 'Computer Vision', 'Materials Testing', 'NASA-funded Research'],
    logo: `${import.meta.env.BASE_URL}ut-logo.png`,
    logoClass: 'ut-logo',
  },
  {
    id: 'tulsa',
    title: 'Petroleum Engineering Research Assistant',
    company: 'University of Tulsa',
    date: 'May 2022 – Sep 2024',
    summary: 'Conducted literature review and design iteration on rotary gas separator geometry, and prototyped research hardware to support energy systems work.',
    details: [
      'Reviewed literature on rotary gas separator geometry and presented findings to the sponsor company.',
      'Designed and prototyped impeller and inducer assemblies in Autodesk Fusion 360, then used 3D printing for iterative testing.',
      'Developed an ultra-affordable Arduino-based methane tracking system to monitor environmental emissions in the field.',
      'Built and demonstrated hands-on energy conversion experiments for high school teachers in a workshop.',
    ],
    tags: ['CAD', '3D Printing', 'Research', 'Energy Systems', 'Arduino'],
    logo: `${import.meta.env.BASE_URL}ut-logo.png`,
    logoClass: 'ut-logo',
  },
  {
    id: 'graham-cad',
    title: '3D CAD Designer',
    company: 'Graham Technical Services',
    date: 'Jun 2021 – Aug 2021',
    summary: 'Designed and modeled an experimental fluid-flow facility for the Colorado School of Mines with fabrication-ready drawings and engineering constraints.',
    details: [
      'Designed a fluid-flow facility in Autodesk Fusion 360 for the Colorado School of Mines.',
      'Delivered assembly mass, technical drawings, and bill of materials to support fabrication within design constraints.',
    ],
    tags: ['Autodesk Fusion 360', 'CAD', 'Technical Drawings', 'Fabrication'],
  },
]

const educationDetails = [
  {
    id: 'rice',
    school: 'Rice University',
    degree: 'B.S. in Mechanical Engineering',
    date: 'Expected May 2028',
    summary: 'Trustee Distinguished Scholar; GPA: 3.90.',
    details: [
      'Relevant coursework: Computational Fluid Mechanics, Thermal Systems Design, Heat Transfer, Dynamics, Stress Analysis, Engineering Design.',
      'Leadership and involvement: External VP for Rice ASME Chapter; Internal VP for Rice SHPE Chapter; Microfluidics Research in the Lillehoj Research Group.',
    ],
  },
]

function RegionalMap() {
  const mapUrl = `${import.meta.env.BASE_URL}about-map.png`

  return (
    <div className="geo-map-shell">
      <img className="geo-map-image" src={mapUrl} alt="Map of the U.S. and Venezuela with Oklahoma and Texas highlighted" />
    </div>
  )
}

export default function About() {
  const [openExperience, setOpenExperience] = useState<string | null>(null)
  const [openEducation, setOpenEducation] = useState<boolean>(true)

  const toggleExperience = (id: string) => {
    setOpenExperience(openExperience === id ? null : id)
  }

  return (
    <section className="about-page">
      <div className="about-grid">
        <div className="about-card bio-card">
          <p className="eyebrow">About me</p>
          <h2>Eduardo Pereyra</h2>
          <p className="label">Major</p>
          <h3>Mechanical Engineering</h3>

          <p className="label">Hometown</p>
          <h3>Tulsa, OK</h3>

          <p className="label">Involvement</p>
          <ul className="interest-list simplified">
            <li>External VP, Rice ASME Chapter</li>
            <li>Internal VP, Rice SHPE Chapter</li>
            <li>Microfluidics Research, Lillehoj Research Group</li>
          </ul>

          <p className="label">Interests</p>
          <ul className="interest-list">
            <li>Salsa (music)</li>
            <li>
              <a href="https://www.instagram.com/eats_wit_ed?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                Eating (follow my food Instagram @eats_wit_ed)
              </a>
            </li>
            <li>Houston Astros baseball</li>
            <li>Running (ask me about food mile challenges!)</li>
          </ul>
        </div>

        <div className="about-card story-card">
          <RegionalMap />
        </div>
      </div>

      <div className="about-sections">
        <div className="about-card detail-card">
          <button className="detail-toggle" onClick={() => setOpenExperience(openExperience ? null : 'research')}>
            <span>Experience</span>
            {openExperience ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {openExperience && (
            <div className="detail-content">
              {experienceItems.map((item) => (
                <div key={item.id} className="detail-item-block">
                  <div className="detail-header" onClick={() => toggleExperience(item.id)}>
                    <div className="detail-heading-wrap">
                      {item.logo && (
                        <div className={`company-logo ${item.logoClass ?? ''}`}>
                          <img src={item.logo} alt={`${item.company} logo`} />
                        </div>
                      )}
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.company}</p>
                      </div>
                    </div>
                    <span>{item.date}</span>
                  </div>

                  {openExperience === item.id && (
                    <div className="detail-body">
                      <p>{item.summary}</p>
                      <ul>
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <div className="tag-row">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="about-card detail-card">
          <button className="detail-toggle" onClick={() => setOpenEducation(!openEducation)}>
            <span>Education</span>
            {openEducation ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {openEducation && (
            <div className="detail-content">
              {educationDetails.map((item) => (
                <div key={item.id} className="education-block">
                  <div className="education-header">
                    <div>
                      <h4>{item.degree}</h4>
                      <p>{item.school}</p>
                    </div>
                    <span>{item.date}</span>
                  </div>

                  <p>{item.summary}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="about-card awards-card">
        <div className="detail-toggle">
          <span>Awards</span>
        </div>
        <div className="detail-content">
          {awards.map((award) => (
            <div key={award.title} className="education-block">
              <div className="education-header">
                <div>
                  <h4>{award.title}</h4>
                </div>
              </div>
              <p>{award.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
