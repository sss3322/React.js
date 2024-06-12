import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Usestate1() {
    const [count, setCount] = useState(1);

    const sample = () => {
        setCount(count => count + 1);
    };

    return (
        <div>
            <h1>My num is {count}</h1>
            <Button onClick={sample}>Change</Button>
        </div>
    );
}

export default Usestate1;
