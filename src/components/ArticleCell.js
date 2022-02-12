import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ArticleCell() {
    return (
        <>
            <Card className="my-2" bg='dark' text='light'>
                <Card.Img variant="top" src='https://telegra.ph/file/e57118283e829a98c95bd.png' />
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