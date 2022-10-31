import React from "react";

const Form = (props) => {

  /*const cambioEstado = () => {
    const db = getDatabase();
    const newPostKey = (child(ref(db), "inicioRapido")).key;
    //console.log(newPostKey)
    const updates = {};
    updates[newPostKey] = !enabled;
    update(ref(db), updates)
    .then(() => console.log("cambiado"))
    .catch((error) => console.log(error));
    setEnabled(!enabled)
    console.log(enabled)
  };*/

  return (
    <div className="flex justify-center m-10">
      <div className="mb-1 xl:w-96">
        <label
          htmlFor="exampleNumber0"
          className="form-label inline-block mb-2 text-gray-700"
        >
          {props.name}
        </label>
        <div className="flex">
        <input
          id="form"
          type="number"
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          placeholder={props.medidaTiempo}
        />
        <button type="submit" id="form" className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-3" onClick={()=>{

        }}>
          Subir
        </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
