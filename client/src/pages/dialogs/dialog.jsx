import React from 'react';
import Cards from "../../compents/simples/card.jsx"


import "./dialog.css"

export default function Dialog(props) {
    return (
        <div className='dialog'>
            <div className='conteiner-dialogs'>
                <p>
                    <p>dialogs</p>
                </p>
                <Cards/>
            </div>
        </div>
    );
}

