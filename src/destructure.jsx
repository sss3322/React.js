import React from 'react';

function Destructure() {
    const person = [{ name: 'jacob', age: 23 }];
    const [{ name, age }] = person;

    console.log(name);
    console.log(age);
    const numbers =[1,2,3,4]
    const[first,second,third,fourth]= numbers;
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    return (
        <div>
           
        </div>
    );
}

export default Destructure;
