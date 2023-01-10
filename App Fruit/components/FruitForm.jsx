import {useState} from "react"

export default function FruitForm({handleAdd}) {

    const [nouveauFruit, setNouveauFruit] = useState("") 

    const handleSubmit = (event) => {
        event.preventDefault(); // empêche la page de se recharger
        if (nouveauFruit != ""){
          // Manipulation du state
          const id = new Date().getTime();
          const nom = nouveauFruit;
          handleAdd({ id: id, nom:nom})
          setNouveauFruit("");

        }
        
      }
    
    const handleChange = (event) => {
        setNouveauFruit(event.target.value)   
    }

    return ( 
        <form action="submit" onSubmit={handleSubmit}>
            <input value={nouveauFruit} type="text" placeholder="Ajouter un fruit..." onChange={handleChange}></input>
            <button>Ajouter</button>
        </form>
    )

} 
