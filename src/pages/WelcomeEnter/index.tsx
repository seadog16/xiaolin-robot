import {useState} from 'react';
import {NavBar, Space, TextArea, Card, List, Button, Avatar, CheckList} from 'antd-mobile';
import {useNavigate} from 'react-router-dom';
import style from './index.module.styl';
import mock from './mock.json';

const WelcomeEnter = () => {
    const navigate = useNavigate();
    const [selection, setSelections]: [string[]|never[], Function] = useState([]);
    return (
        <Space
            className={style.welcome}
            block
            direction="vertical"
            style={{"--gap-vertical": ".75rem"}}>
            <NavBar
                className="navbar"
                onBack={() => navigate('/robot')}>添加入群欢迎</NavBar>
            <Card className={`margin ${style.welcomeHeight}`}>
                <TextArea
                    placeholder="想说什么"/>
            </Card>
            <List
                mode="card"
                header="参考模版"
                className={style.welcomeBody}>
                {mock.temp.map((v, i) =>
                    <List.Item
                        key={i}
                        extra={<Button
                        fill="outline"
                        color="primary"
                        size="small">使用</Button>}>
                        {v}</List.Item>
                )}
            </List>
            <Space
                block
                justify="between"
                className={style.header}>
                <span>选择微信群</span>
                <a>全选</a>
            </Space>
            <CheckList
                mode="card"
                multiple
                className={style.welcomeBody}
                value={selection}
                onChange={v => setSelections(v)}>
                {mock.groups.map((v, i) =>
                    <CheckList.Item
                        key={i}
                        value={i.toString()}
                        prefix={<Avatar
                            className="avatar"
                            src={v.avatar}/>}>
                        {v.groupname}</CheckList.Item>
                )}
            </CheckList>
            <div className="bottomButton">
                <Button block color="primary">保存</Button>
            </div>
        </Space>
    )
}

export default WelcomeEnter;
