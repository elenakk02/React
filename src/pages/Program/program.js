import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './program.css'
import movies from './movies.jpg';
import Movies from './Movies/movies';
export default () => {
    return(
    <>
        <Form.Group class="main-card-0">
            <Card>
                <Card.Img class="pics" variant="top" src={movies}/>
                <Card.Body class="box">
                <Card.Text class="h1" href= {Movies}>
                The best movies for 2020
                </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
            <Card.Img class="pics" variant="top" src={movies} />
                <Card.Body class="box">
                <Card.Text class="h1">
                The best series for 2020
                </Card.Text>
                </Card.Body>
            </Card>
        </Form.Group>

        <Card  class="reg-card" style={{ width: '18rem'}}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
           
    </>
    )
}
