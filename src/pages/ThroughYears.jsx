import SectionHeading from '../components/SectionHeading.jsx'
import EventCard from '../components/EventCard.jsx'
import './ThroughYears.css'

// Past editions live in this array. Adding a future edition (2024, 2023...)
// is as simple as adding another object here.
const editions = [
  {
    year: '2025',
    image: 'https://placehold.co/600x400/e2ebf9/14337e?text=Samvad+2025',
    description:
      'The most recent edition of Samvad brought participants together for a day of debate and discussion.',
    winner: '[Add Name]',
    moment: 'Photos and highlights from this edition will be added here.',
  },
]

function ThroughYears() {
  return (
    <div className="years-page fade-in">
      <section className="container years-intro">
        <SectionHeading
          eyebrow="From Our Archives"
          title="Samvad Through the Years"
          subtitle="A look back at previous editions of Samvad and the moments they created."
        />
      </section>

      <section className="container years-grid">
        {editions.map((edition) => (
          <EventCard key={edition.year} {...edition} />
        ))}

        <div className="years-placeholder">
          <p>Future editions of Samvad will be added here.</p>
        </div>
      </section>
    </div>
  )
}

export default ThroughYears
