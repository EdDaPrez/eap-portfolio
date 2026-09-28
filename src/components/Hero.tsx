import { useState } from 'react'
import { Linkedin } from 'lucide-react'
import '../styles/Hero.css'

interface HeroProps {
  setActiveSection: (section: string) => void
}

interface CollageProject {
  title: string
  tag: string
  image: string[]
  className: string
}

const collageProjects: CollageProject[] = [
  {
    title: 'Lightsabers',
    tag: 'Where it all began...',
    image: ['project-images/lightsaber-hero.png'],
    className: 'card-one',
  },
  {
    title: 'PolyRail',
    tag: '48-hour design sprint',
    image: ['project-images/polyrail-main.png'],
    className: 'card-two',
  },
  {
    title: 'Cell Density Counter',
    tag: 'automated microscopy',
    image: ['project-images/cellcounter.png'],
    className: 'card-three',
  },
  {
    title: 'Microfluidics',
    tag: 'precision control',
    image: ['project-images/microfluidics-setup.png'],
    className: 'card-four',
  },
  {
    title: 'Thermal Occupancy',
    tag: 'computer vision',
    image: ['project-images/occupancy-device.png'],
    className: 'card-five',
  },
  {
    title: 'Hardness Analysis',
    tag: 'automated testing',
    image: ['project-images/hardness-detection.png'],
    className: 'card-six',
  },
  {
    title: 'Trophies/Medals',
    tag: 'design + fabrication',
    image: ['project-images/trophy-spikeball.png'],
    className: 'card-seven',
  },
  {
    title: 'Rotary Gas Separator',
    tag: 'research + prototyping',
    image: ['project-images/separator-prototype.png'],
    className: 'card-eight',
  },
]

function CollageImage({ imageCandidates, alt }: { imageCandidates: string[]; alt: string }) {
  const [src, setSrc] = useState(imageCandidates[0])

  return (
    <img
      src={src}
      alt={alt}
      onError={() => {
        const currentIndex = imageCandidates.indexOf(src)
        const fallback = imageCandidates[currentIndex + 1] ?? imageCandidates[0]
        if (fallback !== src) {
          setSrc(fallback)
        }
      }}
    />
  )
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-shell">
        <div className="hero-copy">
          <h1 className="hero-title">Hello, I’m Eduardo!</h1>
          <p className="hero-description">
            I’m a mechanical engineering student at Rice University who enjoys designing solutions to everyday problems. I thrive in environments where I'm constantly learning, and am never afraid to step outside my comfort zone, applying my individual lived experiences to every project I embark on!
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => setActiveSection('projects')}>
              Explore my work
            </button>
            <button className="btn btn-secondary" onClick={() => setActiveSection('about')}>
              Learn more about me
            </button>
            <a href="https://linkedin.com/in/eduardo-a-p" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-social" aria-label="Linkedin">
              <Linkedin size={18} />
              <span>Linkedin</span>
            </a>
          </div>
        </div>

        <div className="hero-collage-wrap">
          <div className="hero-collage" aria-label="Project overview collage">
            {[...collageProjects, ...collageProjects].map((project, index) => (
              <div key={`${project.title}-${index}`} className={`collage-card ${project.className}`}>
                <CollageImage imageCandidates={project.image} alt={project.title} />
                <div className="collage-overlay">
                  <span>{project.tag}</span>
                  <h2>{project.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
