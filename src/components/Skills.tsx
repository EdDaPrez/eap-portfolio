import '../styles/Skills.css'

interface SkillCategory {
  name: string
  tools: string[]
}

const categoryPalette: Record<string, { bg: string; color: string }> = {
  'CAD & Design': { bg: '#3B82F6', color: '#EFF6FF' },
  'Embedded & Hardware': { bg: '#10B981', color: '#ECFDF5' },
  'Programming & Coding': { bg: '#F59E0B', color: '#FFFBEB' },
  'Simulation & Modeling': { bg: '#A78BFA', color: '#F5F3FF' },
  'Data Acquisition & Analysis': { bg: '#14B8A6', color: '#ECFEFF' },
  Certifications: { bg: '#F97316', color: '#FFF7ED' },
  Languages: { bg: '#EC4899', color: '#FDF2F8' },
}

function SoftwareBadge({ name, category }: { name: string; category: string }) {
  const theme = categoryPalette[category] ?? { bg: '#1F2937', color: '#F8FAFC' }

  return (
    <span className="software-badge" style={{ background: theme.bg, color: theme.color }}>
      {name}
    </span>
  )
}

const skillCategories: SkillCategory[] = [
  {
    name: 'CAD & Design',
    tools: ['Autodesk Fusion 360', 'SOLIDWORKS', 'AutoCAD', 'CAD'],
  },
  {
    name: 'Embedded & Hardware',
    tools: ['Arduino', 'Raspberry Pi', 'Laser Cutting', '3D Printing (FDM, SLA)'],
  },
  {
    name: 'Programming & Coding',
    tools: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'MATLAB', 'LaTeX'],
  },
  {
    name: 'Simulation & Modeling',
    tools: ['ANSYS Fluent', 'Petrel', 'SLB Intersect', 'GAP', 'NextGen'],
  },
  {
    name: 'Data Acquisition & Analysis',
    tools: ['Excel', 'SCADA', 'Pi Vision'],
  },
  {
    name: 'Certifications',
    tools: ['Certified Solidworks Associate (CSWA)', 'Autodesk Fusion 360: Certified User'],
  },
  {
    name: 'Languages',
    tools: ['English (Fluent)', 'Spanish (Fluent)'],
  },
]

export default function Skills() {
  return (
    <section className="skills">
      <div className="section-header">
        <h2>Skills & Expertise</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category-card">
            <div className="category-header">
              <h3>{category.name}</h3>
              <div className="category-tools">
                {category.tools.map((tool) => (
                  <SoftwareBadge key={`${category.name}-${tool}`} name={tool} category={category.name} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
