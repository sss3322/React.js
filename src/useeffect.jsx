import React, { useState, useEffect } from 'react';

function Task() {
    const [counter, setCounter] = useState(0);
    const [Visible, setVisible] = useState(true);
    const [TaskComplete, setTaskComplete] = useState(false);

    useEffect(() => {
        console.log("useffect");
    }, [counter,Visible]);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const toggleVisibility = () => {
        setVisible(!Visible);
    };

    const handleCompleteTask = () => {
        setTaskComplete(!TaskComplete);
    };

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter}>Increment Counter</button>

            <hr />

            <button onClick={toggleVisibility}>
                {Visible ? 'Hide Content' : 'Show Content'}
            </button>
            {Visible ? (
                <div>
                    <p>This is the content</p>
                </div>
            ):<p></p>}

            <hr />

            <button onClick={handleCompleteTask}>
                {TaskComplete ? 'Task Completed' : 'Complete Task'}
            </button>
        </div>
    );
}

export default Task;
