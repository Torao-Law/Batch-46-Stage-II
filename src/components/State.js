import {useState} from "react"
import State1 from "./state_1"

export default function State() {
    const [number, setNumber] = useState(0)

    function Increment() {
        return setNumber(number + 1)
    }

    function Decrement() {
        return setNumber(number - 1)
    }


    

    return (
        <div>
          <p>
            If you click the add button it will increase by one, vice versa if you
            click the less button it will decrease by one
          </p>
    
          <h2>{number}</h2>

          <State1 number={number}/>
    
          <button onClick={Increment}>Add</button>
          <button onClick={Decrement}>Less</button>
        </div>
    );
}

// useState = ketika ada perubahan data akan langsung di render ulang konten
// variable (let) = harus di refresh baru kontennya di perbaharui