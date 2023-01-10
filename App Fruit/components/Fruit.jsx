// export default function Fruit(props) {
export default function Fruit({fruitInfo, onFruitDelete}) {
    // State
    // const fruitInfo = props.fruitInfo
    // const onFruitDelete = props.onFruitDelete
    // const {fruitInfo, onFruitDelete} = props

    // Comportements

    // Affichage (render)
    // return ( <li key={props.fruitInfo.id}>
    //     {props.fruitInfo.nom}{" "}
    //     <button onClick={() => props.onFruitDelete(props.fruitInfo.id)}>X</button>
    //     </li>
    // )
    console.log(fruitInfo.id)
    return ( <li key={fruitInfo.id}>
        {fruitInfo.nom}{" "}
            <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
        </li>
    )
}