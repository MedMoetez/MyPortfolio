import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  // Liste des projets que tu as réalisés
  const projects = [
    {
      title: "Développement d'un Système Embarqué avec FreeRTOS",
      description: "Projet à Telecom Nancy : Implémentation d’un système embarqué pour la gestion des capteurs et la communication en utilisant FreeRTOS sur une carte ESP32.",
    },
    {
      title: "Création d'une Application Web de Gestion de Projets",
      description: "Projet académique : Développement d'une application web en .Net pour la gestion de projets.",
    },
    {
      title: "Robot Mobile avec Navigation Autonome",
      description: "Projet à l'ENSEM : Développement d'un robot mobile avec reconnaissance de trajectoire et évitement d'obstacles utilisant des algorithmes de contrôle.",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projets</h2>
                  <p>Voici quelques projets que j'ai réalisés, illustrant mes compétences en développement de systèmes embarqués, en programmation et en gestion de projets technologiques.</p>
                  <ul>
                    {projects.map((project, index) => (
                      <li key={index}>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
