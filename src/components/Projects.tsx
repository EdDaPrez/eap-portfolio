import { useState, type MouseEvent } from 'react'
import '../styles/Projects.css'

interface Project {
  id: string
  title: string
  category: string
  shortDesc: string
  fullDesc: string
  technologies: string[]
  image: string[]
  galleryImages?: string[]
  galleryCaptions?: Record<string, string>
  imageCaptions?: Record<string, string>
  year: string
  keySkills: string[]
  presentationUrl?: string
  paperUrl?: string
  videoUrl?: string
  videoCaption?: string
}

const projects: Project[] = [
  {
    id: 'lightsaber',
    title: 'Lightsabers',
    category: 'Prototyping',
    year: 'April 2020 - January 2024',
    image: ['project-images/lightsaber-hero.png', 'project-images/lightsaber-trio.png', 'project-images/lightsaber-prototype.png'],
    imageCaptions: {
      'project-images/lightsaber-hero.png': 'The first three lightsabers I created, side-by-side and illuminated.',
      'project-images/lightsaber-trio.png': 'CAD drawings of my second lightsaber created (Darth Vader\'s). On the right is a section analysis.',
      'project-images/lightsaber-prototype.png': 'The final combat-ready prototype after multiple design iterations and hardware improvements.',
    },
    galleryImages: ['project-images/lightsaber-cad-2.png', 'project-images/lightsabers-comparison.png', 'project-images/lightsaber-iteration.png'],
    galleryCaptions: {
      'project-images/lightsaber-cad-2.png': 'CAD drawings of Luke Skywalker\'s (the first lightsaber I ever made) and Anakin Skywalker\'s (the Graflex, my third lightsaber made), including a section view of the designs.',
      'project-images/lightsabers-comparison.png': 'All three lightsabers side-by-side with the lights turned on to compare the hilt geometry, blade proportions, and visual finish across the three builds.',
      'project-images/lightsaber-iteration.png': 'The broken remains of the initial iterations of my first lightsaber, a reminder of how much the engineering design process is defined by learning from failed builds and redesigning for the next iteration. The final product is shown at the top.',
    },
    shortDesc: 'The project that simultaneously fulfilled my nerdy childhood dreams and made me fall in love with the iterative nature of the engineering design process.',
    fullDesc: 'I got bored during COVID, learned CAD (Autodesk Fusion 360) from YouTube tutorials, and bought a cheap 3D printer with money I had saved up in my piggy bank. Little did I know that this silly hobby I picked up would change my life.\n\nMy first project was making a movie-replica of Luke Skywalker\'s Lightsaber from Star Wars: Return of the Jedi. I have always been a huge Star Wars fan (I know I\'m a geek lol), but buying movie replica lightsabers was way out of budget for my teenage self. I used concept drawings from the original films with dimensions as reference to make this lightsaber as screen-accurate as possible when creating my CAD models. This lightsaber was the hardest one to manufacture (due to my inexperience), but it taught me so much about the iterative nature of engineering design: from fixing the design parameters (wall thickness, fillets, etc.), changing the material (from PLA to PETG), troubleshooting the printer (I trashed more components than I\'m willing to admit), to changing printing orientation for better layer adhesion... I was improving the build on each iteration. To top it all off, the lightsaber not only boasted a movie-replica hilt, but also rechargeable 9V batteries, a 900 lumen tri-LED, and a polycarbonate tube for a blade. I also learned about tolerancing when creating so many interlocking pieces, latches, screws, and the ignition system (a button).\n\nMy second and third lightsabers were also movie replicas of Darth Vader\'s and Anakin Skywalker (or the Graflex, as it\'s called within the fandom). These were much easier to make given the learnings from my first lightsaber. While these lightsabers also boasted a polycarbonate tube for a blade, they were NOT meant for combat (which I sadly found out the hard way).\n\nWhile I started with movie-replica sabers, I wanted to do what every childhood Star Wars fan longs to do: epic lightsaber battles. This led me to my fourth and final lightsaber, a combat-ready lightsaber with an ESP-8266 microcontroller for accelerometer integration (for collision and swing detection), a speaker to make it more realistic (ambient noises, swooshing noises, collision noises), a Bluetooth chip and iOS app implementation (to change the lightsaber color from your phone), an aluminum chassis, a programmable LED strip (to allow the LEDs to fade in/out, change colors upon collision, etc.), and a rechargeable battery pack. This taught me a lot about embedded systems, which I learned to love (at least that\'s what I tell myself).',
    technologies: ['Arduino', 'ESP8266', 'C++', '3D Printing', 'Embedded Systems', 'Rapid Iteration', 'Fusion 360', 'CAD'],
    keySkills: ['3D printing', 'embedded systems', 'rapid prototyping', 'design iteration', 'CAD'],
    videoUrl: 'project-images/app_demo.mp4',
    videoCaption: 'Demo of initial prototype of developed app and hardware for bluetooth-enabled arduino ESP8266 for combat lightsaber (with accelerometer and speaker implementation for collision and ambient noises).',
  },
  {
    id: 'polyrail',
    title: 'PolyRail',
    category: 'Engineering Design Competition',
    year: 'Jan 2026',
    image: ['project-images/polyrail-main.png', 'project-images/polyrail-team.png'],
    galleryImages: [],
    shortDesc: 'A Microsoft-sponsored Texas A&M SHPEathon project focused on replacing wooden railroad ties with a composite alternative.',
    fullDesc: 'PolyRail was developed during a 48-hour design sprint for the Microsoft-sponsored Texas A&M SHPEathon. My team created a concept for replacing wooden railroad ties with a more sustainable composite approach, focused on durability, maintenance reduction, and practicality in real-world rail infrastructure. We won first place and received a $500 prize.',
    technologies: ['Engineering Design', 'Systems Thinking', 'CAD', 'Rapid Prototyping', 'Sustainability', 'Team Design'],
    keySkills: ['CAD', 'systems thinking', 'team design'],
    presentationUrl: 'Final presentation.pptx',
  },
  {
    id: 'trophies',
    title: 'Trophies/Medals',
    category: 'Design & Fabrication',
    year: 'Sep 2022 - Aug 2024',
    image: ['project-images/trophy-spikeball.png', 'project-images/trophy-milkmile.png', 'project-images/trophy-rocketleague.png'],
    galleryImages: ['project-images/trophy-milkmile.png', 'project-images/medal-milkmile.png', 'project-images/trophy-rocketleague.png'],
    galleryCaptions: {
      'project-images/trophy-milkmile.png': 'Trophy I designed for our school\'s annual Milk Mile, a community event I founded to raise money and awareness around healthy habits and student wellness.',
      'project-images/medal-milkmile.png': 'Medal designed for the same Milk Mile event, created to commemorate student participation and the event\'s community-driven mission.',
      'project-images/trophy-rocketleague.png': 'Trophy designed for a Rocket League tournament during our school\'s philanthropy week, supporting student council fundraising and mental health initiatives.',
    },
    shortDesc: 'A collection of custom trophies and medals I have made for competitions, tournaments, and events like Spikeball, Milk Mile, and Rocket League.',
    fullDesc: 'I designed and fabricated custom trophies and medals for several school events and fundraisers, combining CAD, 3D printing, and post-processing to create pieces that felt personal, polished, and memorable.\n\nOne of the first pieces I made was a trophy for a Spikeball tournament during my high school\'s philanthropy week. In 2023, the event raised over $80,000+ for a local food bank, and the final trophy was designed to reflect the energy and spirit of the competition while also honoring the cause behind it.\n\nI also designed a trophy and medal for our school\'s annual Milk Mile, an event I founded to raise money and awareness around healthy habits and student wellness. Finally, I created another trophy for a Rocket League tournament during our student council\'s philanthropy week in 2024, which raised $40,000+ for mental health resources at our school.\n\nEvery piece was designed in Autodesk Fusion 360, manufactured using FDM 3D printing with PETG filament, and finished through sanding, painting, and detailing to create a clean final appearance that looked intentional and professional.',
    technologies: ['CAD', 'Additive Manufacturing', 'Post-Processing', 'Fabrication'],
    keySkills: ['CAD', 'additive manufacturing', 'post-processing'],
  },
  {
    id: 'cell-density-counter',
    title: 'Automatic Density/Cell Counter',
    category: 'Microfluidics Research',
    year: 'Mar 2026 - Present',
    image: ['project-images/cellcounter.png', 'project-images/cellcounter-annotated.png'],
    galleryImages: [],
    shortDesc: 'An automated MATLAB-based image processing algorithm for estimating tumor cell densities and specific/nonspecific T-cell counts from microscopy data.',
    fullDesc: 'I developed an automated algorithm for identifying and quantifying non-specific/specific T-cells and tumor cell density from microscopy images. The algorithm combines image analysis, thresholding, and repeatable processing logic to reduce manual counting effort and improve consistency in data interpretation. It outputs all of the acquired data to a .csv file for easy interpretation, and saves images of all the found cells for manual result verification.',
    technologies: ['MATLAB', 'Image Processing', 'Computer Vision', 'Automation', 'Microscopy'],
    keySkills: ['MATLAB', 'image processing', 'automation'],
  },
  {
    id: 'microfluidics',
    title: 'Droplet Heating Feedback Loop',
    category: 'Microfluidics Research',
    year: 'Mar-April 2026',
    image: ['project-images/microfluidics-setup.png', 'project-images/microfluidics-plot.png', 'project-images/microfluidics-flow.png'],
    galleryImages: [],
    shortDesc: 'A temperature control system built for microfluidic experimentation and precision testing.',
    fullDesc: 'Developed an Arduino-controlled temperature-driven PID feedback loop for a 14-microliter droplet using an ESP8266 to maintain temperature stability within 0.25 Celsius over 30-minute intervals. The goal was to maximize temperature without exceeding the safe limit, allowing AC electrothermal flow to enhance mixing while keeping the cells alive in such a small droplet. I also conducted CFD and thermal flow simulations using ANSYS Fluent to optimize the system design and validate results.',
    technologies: ['Arduino', 'ESP8266', 'MATLAB', 'Control Systems', 'Microfluidics', 'ANSYS Fluent'],
    keySkills: ['Arduino', 'MATLAB', 'control systems', 'thermal modeling'],
  },
  {
    id: 'occupancy-monitor',
    title: 'Thermal Occupancy Monitor',
    category: 'Engineering Design Class',
    year: 'Jan 2025 - May 2025',
    image: ['project-images/occupancy-thermal.png', 'project-images/occupancy-setup.png'],
    galleryImages: [],
    shortDesc: 'A system that estimates occupancy using thermal imaging, sensors, and a real-time detection workflow.',
    fullDesc: 'This project combines thermal sensing, embedded hardware, and computer vision to estimate occupancy in a live environment. I worked on the system design, prototyping, and the practical challenge of making the setup reliable and usable in real conditions without overcomplicating the architecture.',
    technologies: ['Raspberry Pi', 'OpenCV', 'Python', 'Thermal Imaging', 'System Design'],
    keySkills: ['OpenCV', 'Python', 'computer vision'],
    presentationUrl: 'RICE RECorders OEDK Showcase Poster.pdf',
  },
  {
    id: 'hardness-calculator',
    title: 'Automated Hardness Calculator',
    category: 'Image Analysis',
    year: 'May 2024 - May 2025',
    image: ['project-images/hardness-analysis.png', 'project-images/hardness-micro.png'],
    galleryImages: [],
    shortDesc: 'An image-processing workflow for automating Knoop and Vickers hardness measurements in materials testing.',
    fullDesc: 'I developed an automated hardness analysis workflow for Knoop and Vickers microhardness testing. The tool streamlined image-based analysis, improved consistency, and reduced the manual effort required to process hardness data from materials testing procedures.',
    technologies: ['MATLAB', 'Image Processing', 'Materials Testing', 'Automation', 'Data Analysis'],
    keySkills: ['MATLAB', 'image processing', 'materials testing'],
  },
  {
    id: 'separator',
    title: 'Rotary Gas Separator Research',
    category: 'Research & Design',
    year: 'May 2022 - August 2023',
    image: ['project-images/separator-prototype.png', 'project-images/separator-cad.png'],
    galleryImages: [],
    shortDesc: 'A research effort focused on separator geometry, prototyping, and technical analysis.',
    fullDesc: 'This project explored how geometry affects separator performance through literature review, prototype design, and hands-on analysis. It gave me practical experience working across design iteration, research, and the translation of technical findings into working physical models.',
    technologies: ['Fusion 360', 'Research', '3D Printing', 'Fluid Systems', 'Technical Writing'],
    keySkills: ['CAD', 'research', 'fluid systems'],
    paperUrl: 'https://doi.org/10.1080/01496395.2025.2478632',
  },
]

function ProjectImage({ imageCandidates, alt, onClick }: { imageCandidates: string[]; alt: string; onClick?: (event: MouseEvent<HTMLImageElement>) => void }) {
  const [src, setSrc] = useState(imageCandidates[0] || 'project-images/lightsaber.png')

  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      onError={() => {
        const currentIndex = imageCandidates.indexOf(src)
        const fallback = imageCandidates[currentIndex + 1] ?? 'project-images/lightsaber.png'
        if (fallback !== src) {
          setSrc(fallback)
        }
      }}
    />
  )
}

function GalleryImage({ imageCandidates, alt, onClick }: { imageCandidates: string[]; alt: string; onClick?: (event: MouseEvent<HTMLImageElement>) => void }) {
  const [src, setSrc] = useState(imageCandidates[0] || 'project-images/lightsaber.png')

  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      onError={() => {
        const currentIndex = imageCandidates.indexOf(src)
        const fallback = imageCandidates[currentIndex + 1] ?? 'project-images/lightsaber.png'
        if (fallback !== src) {
          setSrc(fallback)
        }
      }}
    />
  )
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  const getImageCaption = (imagePath: string) => {
    for (const project of projects) {
      if (project.galleryCaptions?.[imagePath]) return project.galleryCaptions[imagePath]
      if (project.imageCaptions?.[imagePath]) return project.imageCaptions[imagePath]
    }
    return 'Project image'
  }

  const selectedImageCaption = selectedImage ? getImageCaption(selectedImage) : null
  const lightsaberProject = projects.find((project) => project.id === 'lightsaber')
  const otherProjects = projects
    .filter((project) => project.id !== 'lightsaber' && project.id !== 'methane-tracker')
    .sort((a, b) => {
      const monthMap: Record<string, number> = {
        jan: 0, january: 0,
        feb: 1, february: 1,
        mar: 2, march: 2,
        apr: 3, april: 3,
        may: 4,
        jun: 5, june: 5,
        jul: 6, july: 6,
        aug: 7, august: 7,
        sep: 8, september: 8,
        oct: 9, october: 9,
        nov: 10, november: 10,
        dec: 11, december: 11,
      }

      const endDateOrder = (project: Project) => {
        if (project.year.includes('Present')) return Number.MAX_SAFE_INTEGER

        const endMatch = project.year.match(/(?:-\s*)([A-Za-z]+\s?\d{4}|[A-Za-z]+|\d{4})$/)
        if (!endMatch) {
          const yearOnly = project.year.match(/\d{4}$/)
          return yearOnly ? Number(yearOnly[0]) * 100 : 0
        }

        const endValue = endMatch[1].trim()
        const year = Number(endValue.match(/\d{4}$/)?.[0] ?? '0')
        const monthName = endValue.replace(/\d/g, '').trim().toLowerCase()
        const monthIndex = monthMap[monthName] ?? 0
        return year * 100 + monthIndex
      }

      return endDateOrder(b) - endDateOrder(a)
    })

  return (
    <section className="projects-page">
      <div className="projects-showcase">
        <h2 className="projects-section-title">Where it all began...</h2>
        {lightsaberProject && (
          <article className={`lightsaber-feature ${expandedProject === lightsaberProject.id ? 'expanded' : ''}`}>
            <div className="lightsaber-media">
              <div className="lightsaber-image-stack" onClick={() => toggleProject(lightsaberProject.id)}>
                <ProjectImage
                  imageCandidates={lightsaberProject.image}
                  alt={lightsaberProject.title}
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImage(lightsaberProject.image[0]);
                  }}
                />
              </div>
              <div className="lightsaber-image-stack small" onClick={() => { setSelectedImage(lightsaberProject.image[1] || lightsaberProject.image[0]); toggleProject(lightsaberProject.id); }}>
                <ProjectImage
                  imageCandidates={[lightsaberProject.image[1] || lightsaberProject.image[0], lightsaberProject.image[0]]}
                  alt={`${lightsaberProject.title} detail`}
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImage(lightsaberProject.image[1] || lightsaberProject.image[0]);
                  }}
                />
              </div>
            </div>
            <div className="lightsaber-copy" onClick={() => toggleProject(lightsaberProject.id)}>
              <div className="project-label-row">
                <span className="project-year">{lightsaberProject.year}</span>
              </div>
              <h3>{lightsaberProject.title}</h3>
              <p>{lightsaberProject.shortDesc}</p>
              <p className="project-skills-inline">{lightsaberProject.keySkills.join(' • ')}</p>
            </div>

            {expandedProject === lightsaberProject.id && (
              <div className="project-expanded lightsaber-expanded">
                {lightsaberProject.fullDesc.split(/\n\s*\n/).filter(Boolean).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="project-tech-row">
                  {lightsaberProject.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">{tech}</span>
                  ))}
                </div>

                {lightsaberProject.videoUrl ? (
                  <div className="lightsaber-video-wrap">
                    <video controls src={lightsaberProject.videoUrl} />
                    {lightsaberProject.videoCaption && <p className="video-caption">{lightsaberProject.videoCaption}</p>}
                  </div>
                ) : (
                  <div className="lightsaber-video-placeholder">
                    App demo video can be added here once the project video is uploaded.
                  </div>
                )}

                <div className="gallery-grid">
                  {(lightsaberProject.galleryImages ?? lightsaberProject.image).map((image, idx) => (
                    <button key={`${image}-${idx}`} className="gallery-item" onClick={() => setSelectedImage(image)}>
                      <GalleryImage imageCandidates={[image, 'project-images/lightsaber.png']} alt={`${lightsaberProject.title} gallery ${idx + 1}`} onClick={(event) => { event.stopPropagation(); setSelectedImage(image); }} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </article>
        )}

        <h2 className="projects-section-title secondary">Where it's going...</h2>
        <div className="project-grid">
          {otherProjects.map((project) => (
            <article key={project.id} className={`project-tile ${expandedProject === project.id ? 'expanded' : ''}`}>
              <button className="project-toggle" onClick={() => toggleProject(project.id)}>
                <div className="project-tile-image" onClick={(e) => { e.stopPropagation(); setSelectedImage(project.image[0]); }}>
                  <ProjectImage imageCandidates={project.image} alt={project.title} onClick={(event) => { event.stopPropagation(); setSelectedImage(project.image[0]); }} />
                </div>
                <div className="project-tile-body">
                  <div className="project-label-row">
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.shortDesc}</p>
                  <p className="project-skills-inline">{project.keySkills.join(' • ')}</p>
                  {project.id === 'separator' && project.paperUrl && (
                    <a className="separator-paper-button" href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                      Read paper
                    </a>
                  )}
                  {project.id === 'polyrail' && project.presentationUrl && (
                    <a className="presentation-link compact-presentation-link" href={project.presentationUrl} target="_blank" rel="noopener noreferrer">
                      View presentation
                    </a>
                  )}
                  {project.id === 'occupancy-monitor' && project.presentationUrl && (
                    <a className="presentation-link compact-presentation-link" href={project.presentationUrl} target="_blank" rel="noopener noreferrer">
                      View Poster
                    </a>
                  )}
                </div>
              </button>

              {expandedProject === project.id && (
                <div className="project-expanded">
                  {project.fullDesc.split(/\n\s*\n/).filter(Boolean).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="project-tech-row">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>

                  {project.galleryImages && project.galleryImages.length > 0 && (
                    <div className="gallery-grid">
                      {project.galleryImages.map((image, idx) => (
                        <button key={`${project.id}-${image}-${idx}`} className="gallery-item" onClick={() => setSelectedImage(image)}>
                          <GalleryImage imageCandidates={[image, 'project-images/lightsaber.png']} alt={`${project.title} gallery ${idx + 1}`} onClick={(event) => { event.stopPropagation(); setSelectedImage(image); }} />
                        </button>
                      ))}
                    </div>
                  )}

                  {project.id !== 'polyrail' && project.id !== 'occupancy-monitor' && project.presentationUrl && (
                    <div className="project-links">
                      <a className="presentation-link" href={project.presentationUrl} target="_blank" rel="noopener noreferrer">
                        View presentation
                      </a>
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <GalleryImage imageCandidates={[selectedImage, 'project-images/lightsaber.png']} alt="Expanded project view" />
            {selectedImageCaption && <p className="lightbox-caption">{selectedImageCaption}</p>}
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}
