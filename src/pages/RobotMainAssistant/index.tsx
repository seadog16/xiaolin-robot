import {Card, Grid} from 'antd-mobile';
import {FaceRecognitionOutline, MessageOutline, ChatAddOutline, MailOutline, UserContactOutline} from 'antd-mobile-icons';
import style from './index.module.styl';

const Assistant = () => {
    const assistants = [{
        label: "自动发圈",
        icon: <FaceRecognitionOutline/>
    }, {
        label: "自动回复",
        icon: <MessageOutline />
    }, {
        label: "入群欢迎",
        icon: <ChatAddOutline />
    }, {
        label: "建议中心",
        icon: <MailOutline />
    }, {
        label: "采集对象",
        icon: <UserContactOutline />
    }]
    return (
        <Card title="智能助理">
            <Grid className={style.grid} columns={4}>
                {assistants.map((v, i) => {
                    return (
                        <Grid.Item
                            className={style.assistant}
                            key={i}
                            onClick={() => {}}>
                            <div className={style.assistantIcon}>{v.icon}</div>
                            <div>{v.label}</div>
                        </Grid.Item>
                    )
                })}
            </Grid>
        </Card>
    )
}

export default Assistant
