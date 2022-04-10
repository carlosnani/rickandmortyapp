
import '../../globalStyle.scss';
import "./styles.scss"
import GlootieImg from '../../assets/imgs/gloodie.svg';

export function About() {
  return (
    <div className="container">
      <div className="title">
        <h1>About</h1>
        <div className="about-content">
          <div className="glootie">
            <img src={GlootieImg} alt="Glootie" />
          </div>
          <div>
          <p>
            Hi. This is a ReactJS project. I made it with the goal of learning ReactJS.
            I used some nice libraries and frameworks to make it work. ReactJs, Sass, 
            React Router Dom and React Icons. I also used some nice animations and transitions.
          </p>
          <p>
            I used The Rick and Morty API is a REST to get the data. So, thanks to the <a href="https://rickandmortyapi.com/">Rick and Morty API</a> for the data.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}
