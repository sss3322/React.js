import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Usestate4() {
    const [text, setText] = useState('Black');
    const [bgColor, setBgColor] = useState('white');

    return (
        <div>
            <h1 style={{ color: bgColor }}>{text}</h1>
            <Button style={{ backgroundColor: 'red' }} onClick={() => { setText('Text color is Red'); setBgColor('red'); }}>Red</Button>
            <Button style={{ backgroundColor: 'yellow' }} onClick={() => { setText('Text color is Yellow'); setBgColor('yellow'); }}>Yellow</Button>
            <Button style={{ backgroundColor: 'green' }} onClick={() => { setText('Text color is Green'); setBgColor('green'); }}>Green</Button>
            <Button style={{ backgroundColor: 'brown' }} onClick={() => { setText('Text color is Brown'); setBgColor('brown'); }}>Brown</Button>
        </div>
    );
}

export default Usestate4;
