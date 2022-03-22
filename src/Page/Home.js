import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import ArticleCellAnt from "../components/ArticleCellAnt";
import './Home.css';

const items = [
    {
        backgroundImg: "https://telegra.ph/file/62be520a341d36223eb3b.png",
        icon: "https://telegra.ph/file/1a53817ba80d201ae630b.png",
        iconBgcolor: "#7D3838",
        titleColor: "#E82F3E",
        title: "Огонь",
        subtitle: "Разведение костра, поддержание огня и другое значимость огня для выживания лалала",
    },

    {
        backgroundImg: "https://telegra.ph/file/4e90486ade66a989129d9.png",
        icon: "https://telegra.ph/file/1236a8e30ac339474446a.png",
        iconBgcolor: "#938F8B",
        titleColor: "#4F4B47",
        title: "Психология",
        subtitle: "Психология группы, как держать себя в руках в условиях выживания и другое лалалалалалала",
    },

    {
        backgroundImg: "https://telegra.ph/file/9bcb8698d78f62bc33485.png",
        icon: "https://telegra.ph/file/7e0e0ffddb102568d2b8e.png",
        iconBgcolor: "#1D4024",
        titleColor: "#4CAF50",
        title: "Растения",
        subtitle: "Растения, как правило, ведут неподвижный образ жизни, на протяжении которого постоянно растут.",
    },

    {
        backgroundImg: "https://telegra.ph/file/3f4d2d9c43585b8df34c2.png",
        icon: "https://telegra.ph/file/06b34a07285ff54c46a4e.png",
        iconBgcolor: "#1F547B",
        titleColor: "#4482C3",
        title: "Вода",
        subtitle: "Как добыть воду? Хуй знает? Как пить воду? Хуй знает? Хватит хуй знать, мы всё расскажем вам",
    },

    {
        backgroundImg: "https://telegra.ph/file/0ef737d0d50bba3141605.png",
        icon: "https://telegra.ph/file/00b590e7247f0383989fe.png",
        iconBgcolor: "#636646",
        titleColor: "#636646",
        title: "Снаряжение",
        subtitle: "Разведение костра, поддержание огня и другое значимость огня для выживания лалала",
    },
    {
        backgroundImg: "https://telegra.ph/file/62be520a341d36223eb3b.png",
        icon: "https://telegra.ph/file/1a53817ba80d201ae630b.png",
        iconBgcolor: "#7D3838",
        titleColor: "#E82F3E",
        title: "Огонь",
        subtitle: "Разведение костра, поддержание огня и другое значимость огня для выживания лалала",
    },

    {
        backgroundImg: "https://telegra.ph/file/4e90486ade66a989129d9.png",
        icon: "https://telegra.ph/file/1236a8e30ac339474446a.png",
        iconBgcolor: "#938F8B",
        titleColor: "#4F4B47",
        title: "Психология",
        subtitle: "Психология группы, как держать себя в руках в условиях выживания и другое лалалалалалала",
    },

    {
        backgroundImg: "https://telegra.ph/file/9bcb8698d78f62bc33485.png",
        icon: "https://telegra.ph/file/7e0e0ffddb102568d2b8e.png",
        iconBgcolor: "#1D4024",
        titleColor: "#4CAF50",
        title: "Растения",
        subtitle: "Растения, как правило, ведут неподвижный образ жизни, на протяжении которого постоянно растут.",
    },

    {
        backgroundImg: "https://telegra.ph/file/3f4d2d9c43585b8df34c2.png",
        icon: "https://telegra.ph/file/06b34a07285ff54c46a4e.png",
        iconBgcolor: "#1F547B",
        titleColor: "#4482C3",
        title: "Вода",
        subtitle: "Как добыть воду? Хуй знает? Как пить воду? Хуй знает? Хватит хуй знать, мы всё расскажем вам",
    },

    {
        backgroundImg: "https://telegra.ph/file/0ef737d0d50bba3141605.png",
        icon: "https://telegra.ph/file/00b590e7247f0383989fe.png",
        iconBgcolor: "#636646",
        titleColor: "#636646",
        title: "Снаряжение",
        subtitle: "Разведение костра, поддержание огня и другое значимость огня для выживания лалала",
    },
]

export const Home = () => (
    <div>
        <div class='slider-wrapper'>
            <Image src='https://telegra.ph/file/dad2a885846c4aa40318e.png' />
            <div class="titleLayout">
                <span>Survival Book</span>
            </div>
        </div>
        <Container className="py-2">
            <Row>
                <Col xl='6'>
                    <h1 className="title">Энциклопедия</h1>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                {items.map(item => (
                    <Col span={6}>
                        <ArticleCellAnt item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
)