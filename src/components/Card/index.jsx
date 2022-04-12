import { Button } from '../Button';
import "./style.scss";


export function Card({ name, image, species, status, origin, id}) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div>
        <div>
          <h4>{name}</h4>
          <p>{status}</p>
          <p>{origin}</p>
          <p>{species}</p>
          <Button id={id}>
            View More
          </Button>
        </div>
      </div>
    </div>
  )
}
