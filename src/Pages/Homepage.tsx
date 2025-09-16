
import "../styles/main.css";
import WelcomeCard from "../Components/WelcomeCard";

import ProjectsCard from "../Components/ProjectsCard";

function Homepage() {

  ///////////////////////////


  // const [currentName, setCurrentName] = useState('N/A');
  //     const [age, setAge] = useState(18);
  
  //     useEffect(() => {
  //         console.log('useEffect Marco');
  //     }, []);
  
  //     useEffect(() => {
  //         console.log(
  //             'useEffects com dependências name:' + currentName + 'age: ',
  //             age
  //         );
  //     }, [currentName, age]);
  
  //     useEffect(() => {
  //         console.log('sem dependencia nenhuma o CHATO!!!');
  //     });

  //     /////////////////////////////////////////



  return (
    <>
      <WelcomeCard></WelcomeCard>
      <ProjectsCard></ProjectsCard>
    </>
  );
}

export default Homepage;
