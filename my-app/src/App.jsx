import "./App.css";
import CleanButton from "./components/CleanButton";
import Form from "./components/Form";
import Tittle from "./components/Tittle";
//import { getDatabase, ref, onValue} from "firebase/database";

function App() {

  //leer datos.................................
  
  /*const db = getDatabase();
  const starCountRef = ref(db, 'inicioRapido');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    //updateStarCount(postElement, data);
    console.log(data)
  });*/
  //...........................................

  return (
    <div className="App">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Tittle />
          <Form
            name={"Tiempo de limpieza"}
            medidaTiempo={"Tiempo en minutos"}
          />
          <Form name={"Limpieza automatica"} medidaTiempo={"Tiempo en horas"} />
          <CleanButton />
        </div>
      </section>
    </div>
  );
}

export default App;
