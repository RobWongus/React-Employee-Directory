import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


export default function Navbar() {
    return (
        <div>
           <Jumbotron fluid>
            <Container>
                <h1>Fluid jumbotron</h1>
                 <p>Employee Directory</p>
            </Container>
           </Jumbotron>
        </div>
    )


}