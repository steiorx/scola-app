import React from "react";
import NumberSetter from "./NumberSetter";
import './style/NumberTable.css';

export default function NumberTable({modifyAverage}) {
    let componentList = [];

    for (let i = 10; i > 0; i--) {
        componentList.push(<NumberSetter number = {i} modifyAverage={modifyAverage}/>);
    }
    return (
      <table className="numberTable">
        <thead>
            <th>Grade</th>
            <p></p>
            <th>Set</th>
        </thead>
        <tbody>{componentList}</tbody>
      </table>
    );
}