import AnimalList from "../AnimalList/AnimalList";

function AnimalListDisplay({ animals }) {
  return (
    <div className="container2">
      <h2>Custom Animal List:</h2>
      <AnimalList animals={animals} /> 
    </div>
  );
}

export default AnimalListDisplay;