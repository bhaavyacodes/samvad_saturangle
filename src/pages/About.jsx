import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import './About.css'

const highlights = [
  {
    title: 'A Debate Competition',
    text: 'Samvad is a debate competition where participants come together to argue, question and exchange ideas.',
  },
  {
    title: 'Hosted by Saturangle Club',
    text: 'The event is organised and run by Saturangle Club as one of its flagship activities.',
  },
  {
    title: 'Part of Srijan',
    text: 'Samvad takes place during Srijan, a campus event where different clubs host their own individual events.',
  },
]

function About() {
  return (
    <div className="about-page fade-in">
      <section className="container about-intro">
        <SectionHeading
          eyebrow="About"
          title="About Samvad"
          subtitle="Samvad brings people together around debate, discussion and differing points of view."
        />
      </section>

      <section className="container about-highlights">
        {highlights.map((item) => (
          <div className="about-card" key={item.title}>
            <h3 className="about-card-title">{item.title}</h3>
            <p className="about-card-text">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="container about-closing">
        <p className="about-closing-text">
          Samvad has grown over its past editions into a space for ideas and
          conversation. Take a look back at how it has unfolded so far.
        </p>
        <Button to="/through-the-years" variant="outline">
          Samvad Through the Years
        </Button>
      </section>
    </div>
  )
}

export default About
