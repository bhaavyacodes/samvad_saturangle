import './EventCard.css'

// Displays one past edition of Samvad: an image, a short description,
// and placeholder winner info that is clearly meant to be edited later.
function EventCard({ year, image, description, winner, moment }) {
  return (
    <article className="event-card">
      <img src={image} alt={`Samvad ${year} placeholder`} className="event-card-image" />
      <div className="event-card-body">
        <h3 className="event-card-year">Samvad {year}</h3>
        <p className="event-card-description">{description}</p>
        <p className="event-card-winner">Winner — {winner}</p>
        {moment && <p className="event-card-moment">{moment}</p>}
      </div>
    </article>
  )
}

export default EventCard
