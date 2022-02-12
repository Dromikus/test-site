import React from "react";
import { Card, Button } from "react-bootstrap";
import logo from '../image/img_1.jpg';

export default function ArticleCell() {
    return (
        <>
            <Card className="my-2" bg='dark' text='light'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" >Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}