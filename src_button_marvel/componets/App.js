import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

const skills = ["HTML", "css", "js Es5", "js Es6", "React"];

const heroes = [
  {
    id: 1,
    nome: "Tony",
    cognome: "Stark",
    eta: "40",
    skill: "React",
  },
  {
    id: 2,
    nome: "Steve",
    cognome: "Rogers",
    eta: "102",
    skill: "Angular",
  },
  {
    id: 3,                  //const id = hero.id
    nome: "Bruce",          //const nome = hero.nome
    cognome: "Banner",
    eta: "39",
    skill: "Vue",
  },
];


function App(){
  return (
    <div>
      <Header />
      <div className="cardContainer">
        {heroes.map((hero) => {
          const {id, nome, cognome, eta, skill} = hero; // const nome = hero.nome
          return(
              <Card key={id} nome={nome} cognome={cognome} eta={eta} skill={skill} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

//   const {id,nome,cognome,eta,skill} = heroes;
//   function Hero(props){
//       <h2>Io {props.nome} {props.cognome} ho {props.eta} anni, conosco molto bene {props.skill}</h2>

//   }

//     function App(){
//         const heroList = heroes.maps( (hero) => <Hero zeno={hero} />)
//         return(
//             heroList
//         )
//     }
