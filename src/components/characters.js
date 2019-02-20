import React, { Component } from 'react';


export const Characters = (props) => {
    return (
        <ul className="nav flex-column">
            {
                props.characters.map((character, i) => (
                    <li key={i} className="nav-item" >
                        <a  className={character.name === props.currentCharacter ? 'nav-link, active' : 'nav-link'}   href="#" onClick={() => props.handleClick(character)}>{character.name}</a>
                    </li>))
            }
        </ul>

    )
}