import { FiAward, FiExternalLink } from 'react-icons/fi'

const certificates = [
  ['IBM Certificate in Python', 'IBM', `${import.meta.env.BASE_URL}certificates/IBM.jpeg`],
  [
    'Wadhwani Foundation Certificate',
    'Wadhwani Foundation',
    `${import.meta.env.BASE_URL}certificates/WADHWANI.jpeg`
  ],
  [
    'Instagram Design System Course',
    'Instagram',
    `${import.meta.env.BASE_URL}certificates/INSTAGRAM.jpeg`
  ],
  [
    'Infosys Course Completion',
    'Infosys',
    `${import.meta.env.BASE_URL}certificates/INFOSYS.jpeg`
  ],
  [
    'Udemy Course Completion',
    'Udemy',
    `${import.meta.env.BASE_URL}certificates/UDEMY.jpeg`
  ]
]

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-heading reveal">
        <p className="kicker">05 / Recognition</p>
        <h2>
          Learning that<br />
          <em>leaves a mark.</em>
        </h2>
      </div>

      <div className="certificate-list">
        {certificates.map(([name, org, certificate], index) => (
          <article className="certificate reveal" key={name}>
            <div className="certificate-icon">
              <FiAward />
            </div>

            <div>
              <small>0{index + 1} / Certificate</small>
              <h3>{name}</h3>
              <p>{org}</p>
            </div>

            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name}`}
            >
              <FiExternalLink />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications