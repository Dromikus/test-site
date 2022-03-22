import React from "react";
import { Card, Image } from "react-bootstrap";
import '../style/ComponentStyle.css';

export default function ArticleCell({ item }) {
    return (
        <>
            <Card className="my-2 item" bg='light' text='dark'>
                <Card.Img className="itemImage" variant="top" src={item.backgroundImg} />
                <div className="iconLayout">
                    <div className="whiteRound">
                        <div className="coloredRound" style={{ backgroundColor: item.iconBgcolor }}>
                            <Image className="itemIcon" src={item.icon}></Image>
                        </div>
                    </div>
                </div>
                <div className="infoLayout">
                    <Card.Body>
                        <Card.Title className="itemTitle" style={{ color: item.titleColor }}>{item.title}</Card.Title>
                        <Card.Text className="itemText">
                            {item.subtitle}
                        </Card.Text>
                        <span className="itemButton" >Узнать больше</span>
                    </Card.Body>
                </div>

            </Card>
        </>
    )
}