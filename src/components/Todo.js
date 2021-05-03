import React from "react";

const Chore = props => {

    const handleClick = () => {
        props.toggleItem(props.chore.id);
    }
    

    return (
        <div onClick={handleClick} className={`chore${props.chore.completed ? 'completed' : ''}`}>
            <p>{props.chore.name}</p>
        </div>
    );
}

export default Chore;
