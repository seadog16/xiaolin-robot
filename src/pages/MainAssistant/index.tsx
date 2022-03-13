import {Card, Grid} from 'antd-mobile';
import {FaceRecognitionOutline, MessageOutline, ChatAddOutline, MailOutline, UserContactOutline} from 'antd-mobile-icons';
import {useNavigate} from 'react-router-dom';
import style from './index.module.styl';

const Assistant = () => {
    const assistants = [{
        label: '自动发圈',
        icon: <FaceRecognitionOutline/>,
        link: '/automoments'
    }, {
        label: '自动回复',
        icon: <MessageOutline />,
        link: '/autoreply'
    }, {
        label: '入群欢迎',
        icon: <ChatAddOutline />,
        link: '/welcome'
    }, {
        label: '建议中心',
        icon: <MailOutline />
    }, {
        label: "采集对象",
        icon: <UserContactOutline />
    }];
    const navigate = useNavigate();
    return (
        <Card title="智能助理">
            <Grid className={style.grid} columns={4}>
                {assistants.map((v, i) => {
                    return (
                        <Grid.Item
                            className={style.assistant}
                            key={i}
                            onClick={() => navigate(v.link || '')}>
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
