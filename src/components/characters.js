import React, { Component } from 'react';

export const Characters = (props) => {
    return (
        <ul className="nav flex-column">
            {
                props.characters.map((character, i) => <li key={i}  className="nav-item"><a className="nav-link" href="#" onClick={() => props.handleClick(character)}>{character.name}</a></li>)
            }
        </ul>

    )
}