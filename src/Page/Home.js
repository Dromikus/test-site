import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ArticleCell from "../components/ArticleCell";



export const Home = () => (
    <div>
        <Container className="py-2">
            <Row>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(item => (
                    <Col xxl='3' xl='4' lg='4' md='6'>
                        <ArticleCell />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
)