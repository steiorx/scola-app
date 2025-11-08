import React, { useState } from "react";
import './style/NumberSetter.css';

function IDCrementButton({ offset, func }) {
    return (
        <button className="idcrementbutton" onClick={() => func(offset)}>{offset + 1 ? '+' : '—'}</button>
    );
}

function NumberInput({ amount, func }) {
    return (
        <input 
            type="number" 
            className="numberInput" 
            value={amount}
            onChange={(e) => func(e.target.value)}

            ></input>
    );
}

export default function NumberSetter({number, modifyAverage}) {
    const [amount, setAmount] = useState(0);

    function changeHandler(value) {
        const newAmount = parseInt(value);
        if (newAmount < 0) return;
        setAmount(newAmount);
        modifyAverage(number, newAmount);
    }

    function incrementHandler(offset) {
        const newAmount = amount + offset;
        if (newAmount < 0) return;
        setAmount(newAmount);
        modifyAverage(number, newAmount);
    }

    return (
        <tr className="numberSetter" id={'setter' + number}>
            <td><div className="numberDisplay"><p>{number}</p></div></td>
            <td><IDCrementButton offset={-1} func={incrementHandler} /></td>
            <td><NumberInput amount={amount} func={changeHandler}/></td>
            <td><IDCrementButton offset={1} func={incrementHandler} /></td>
        </tr>
    );
}