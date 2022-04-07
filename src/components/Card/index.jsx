import "./style.scss";

export function Card({ name, image, species, status, origin }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div>
        <div>
          <h4>{name}</h4>
          <p>{status}</p>
          <p>{origin}</p>
          <p>{species}</p>
          <button >
            View More
          </button>
        </div>
      </div>
    </div>
  )
}
