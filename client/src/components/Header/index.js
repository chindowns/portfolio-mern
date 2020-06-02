//Header/index.js
import React from 'react';
import ROW from 'react-bootstrap/Row';
import COL from 'react-bootstrap/Col';

export default function Header() {
    return(
    <COL>
        <header className="flex-nowrap">
            <h1>Michael Downs</h1>
            <p>Full Stack Developer</p>
        </header>
    </COL>
    )
}