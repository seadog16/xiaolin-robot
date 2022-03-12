import {NavBar, List, Avatar, Card, Tabs, Button, Switch} from 'antd-mobile';
import {useNavigate} from 'react-router-dom';
import style from './index.module.styl';

const BroadcastSetting = () => {
    const navigate = useNavigate();
    const tabs = [{
        label: '官方精选',
        key: 'guanfang'
    }, {
        label: '每日爆款',
        key: 'daily'
    }, {
        label: '淘宝精选',
        key: 'taobao'
    }, {
        label: '拼多多精选',
        key: 'pinduoduo'
    }]
    return (<>
        <NavBar
            className="navbar"
            onBack={() => navigate('/robot')}>播货设置</NavBar>
        <div className={style.flex}>
            <Card className={`${style.card} ${style.top}`}>
                <List mode="card" className={style.list}>
                    <List.Item
                        prefix={
                            <Avatar src={`https://picsum.photos/200?autobroadcast?broadcastsetting`}/>
                        }
                        extra={<Switch/>}>创链CCMALL核心群</List.Item>
                </List>
            </Card>
            <Card className={`${style.card} ${style.center}`} title="素材计划">
                <Tabs>
                    {tabs.map(v => (
                        <Tabs.Tab title={v.label} key={v.key}>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>456</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                            <p>789</p>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                        </Tabs.Tab>
                    ))}
                </Tabs>
            </Card>
            <div className={style.bottom}>
                <Button
                    block
                    color="primary"
                    onClick={() => {}}>确认跟发</Button>
            </div>
        </div>
    </>)
}

export default BroadcastSetting;
