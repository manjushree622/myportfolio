import { FiArrowUpRight, FiLayers, FiMessageCircle, FiZap, FiGlobe } from 'react-icons/fi'

const projects = [
  {
    title: '2D Graphics Editor',
    desc: 'A graphics-based application for creating and editing 2D objects.',
    tags: ['C++', 'Graphics'],
    Icon: FiLayers,
    links: [
      ['View project', 'https://github.com/manjushree622/2D-Graphics-Editor']
    ]
  },
  {
    title: 'AI-Based Bus Ticketing Chatbot',
    desc: 'An AI-based chatbot designed to assist users with bus ticketing-related queries.',
    tags: ['Python', 'AI'],
    Icon: FiMessageCircle,
    links: []
  },
  {
    title: 'Automated Table Lamp Using IoT',
    desc: 'An IoT-based project designed to automate a table lamp and demonstrate smart device control.',
    tags: ['IoT', 'C'],
    Icon: FiZap,
    links: []
  },
  {
    title: 'Think Byte App and Website',
    desc: 'A technology-focused application and website project designed to provide an interactive digital experience.',
    tags: ['Web', 'Design'],
    Icon: FiGlobe,
    links: [
      ['View App', 'https://thynkbyte-health-app-t6fk.bolt.host/'],
      ['View Website', 'https://thynkbyte-website.lovable.app/']
    ]
  },
  {
    title: 'Memory Game using HTML',
    desc: 'A simple memory game developed using HTML to create an interactive web-based gaming experience.',
    tags: ['HTML', 'Web'],
    Icon: FiLayers,
    links: [
      ['View project', 'https://github.com/manjushree622/Memory-Game-HTML']
    ]
  }
]

function Projects() {
  return (
    <section className="section alt-section" id="projects">
      <div className="section-heading split-heading reveal">
        <div>
          <p className="kicker">04 / Selected work</p>
          <h2>
            Small projects,<br />
            <em>real lessons.</em>
          </h2>
        </div>

        <p>
          Every build is a chance to ask better questions and make the next
          version a little sharper.
        </p>
      </div>

      <div className="project-grid">
        {projects.map(({ title, desc, tags, Icon, links }, index) => (
          <article className="project-card reveal" key={title}>
            <div className="project-top">
              <span className="project-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <Icon />
            </div>

            <h3>{title}</h3>
            <p>{desc}</p>

            <div className="tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {links.length > 0 && (
              <div className="project-links">
                {links.map(([label, href]) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={label}
                  >
                    {label} <FiArrowUpRight />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects