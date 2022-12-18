import { useState } from "react";
import { Button } from 'react-bootstrap';

const Count = () => {

    const [count, setCount] = useState(0)

    function increment() {
        setCount((count) => count + 1)
    }

    function decrement() {
        setCount((count) => count - 1)
    }


    return (
        <>
            <h2>Simple Counter</h2><br></br>
            <h4>Count is : {count}</h4><br></br>
            <Button variant="success" onClick={() => { increment() }} style={{ width: "100px" }}>Plus</Button><br></br><br></br>
            <Button variant="danger" onClick={() => { decrement() }} style={{ width: "100px" }}>Minus</Button>
        </>
    )
}

export default Count