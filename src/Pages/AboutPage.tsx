import ButtonsGroup from "../Components/ButtonsGroup";
import Card from "../Components/Card";



function AboutPage() {
  return (
    <Card className="about">
      <p >
        Pedro Amaro is an innovative architect recognized for creating spaces
        that harmonize aesthetics, functionality, and sustainability. With
        extensive experience in residential, commercial, and public
        architecture, he combines contemporary design with thoughtful spatial
        planning to craft environments that inspire and endure. Pedro earned his
        Master of Architecture from the University of Lisbon and has contributed
        to a range of award-winning projects throughout Europe. His work spans
        modernist homes, adaptive reuse projects, and urban developments, always
        emphasizing sustainability, energy efficiency, and the careful use of
        materials. Passionate about design that improves daily life, Pedro
        integrates natural light, open spaces, and environmental consciousness
        into every project. Beyond his architectural practice, he mentors
        emerging architects and frequently participates in lectures and
        workshops, sharing his vision for innovative, human-centered design.
      </p>

      <ButtonsGroup home={true} contact={true}/>
    </Card>
  );
}

export default AboutPage;
