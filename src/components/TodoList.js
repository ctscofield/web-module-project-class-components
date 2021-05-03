// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Chore from "./Todo";

const ChoreList = props => {

    const handleClick = () => {
        props.clearChore();
    }

    return (
        <div className="list">
            {props.chores.map(chore => (
                <Chore toggleItem={props.toggleItem} chore={chore} key={chore.id} />
            ))}
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default ChoreList;
