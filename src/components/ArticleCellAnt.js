import React from "react";

import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

export default function ArticleCellAnt({ item }) {
    return (
        <>
            <Card
                title={item.title}
                size="default"
                style={{ width: 300 }}
                cover={
                    <img
                        
                        alt="example"
                        src={item.backgroundImg}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    description={item.subtitle}
                />
            </Card>
        </>
    )
}