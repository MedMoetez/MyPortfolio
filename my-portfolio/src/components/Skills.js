import meter1 from "../assets/img/meter1.svg"; // remplacer par une image pertinente à la compétence
import meter2 from "../assets/img/meter2.svg"; // remplacer par une image pertinente à la compétence
import meter3 from "../assets/img/meter3.svg"; // remplacer par une image pertinente à la compétence
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>Fort d'une solide expérience en développement de systèmes embarqués et logiciels, voici un aperçu de mes compétences techniques et de mes domaines d'expertise.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Développement Systèmes Embarqués</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Programmation en C/C++ et Python</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Développement Web (React, Django, .Net)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Gestion de Projets Technologiques</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Intégration de Capteurs et IoT</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Robotique et Automatisation</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
