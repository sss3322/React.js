import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Usestate3() {
    const [count, setCount] = useState(7);

    const sample = () => {
        if (count > 0) {
            setCount(count => count - 1);
        } else {
            alert('not possible');
        }
    };

    return (
        <div>
            <h1>My num is {count}</h1>
            <Button onClick={sample}>Change</Button>
        </div>
    );
}

export default Usestate3;
