import "./App.css";
import CleanButton from "./components/CleanButton";
import DivRaro from "./components/DivRaro";
import Tittle from "./components/Tittle";

function App() {
  return (
    <div className="App">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Tittle />
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <DivRaro />
          </div>
          <CleanButton />
        </div>
      </section>
    </div>
  );
}

export default App;
