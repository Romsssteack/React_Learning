import {useState} from "react"
import Fruit from "./components/Fruit"
import FruitForm from "./components/FruitForm";

function App() {
  // State (état - données ) 
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot"},
    { id: 2, nom: "Banane"},
    { id: 3, nom: "Cerise"}
  ]);

  // comportements
  const handleDelete = (id) => {
    // 1. Copie du state
    const fruitsCopy = fruits.slice();
    // const fruitsCopy = [...fruits];

    //2. Manipuler mon state
    const fruitCopyUpdater = fruitsCopy.filter(fruit => fruit.id !== id)

    //3. modifier mon state avec le setter
    setFruits(fruitCopyUpdater)
  }

  const handleAdd = (fruitAAjouter) => { // fonction pour ajouter dans la liste ce qui vient du composant add
    // Tout ce qui touche au state de la liste est copier de FruitForm et est copié ici
    // Copie du state
    const fruitCopy = [...fruits];
    fruitCopy.push(fruitAAjouter);
    setFruits(fruitCopy);
  }

  //render
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onFruitDelete={handleDelete}/>
        ))}
      </ul>
      <h1>Add a fruit</h1>
      <FruitForm handleAdd={handleAdd}/>
    </div>
    
  );
}

export default App;
