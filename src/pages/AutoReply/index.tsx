import {Divider, Button, Card, NavBar, Tag, Switch, Space} from 'antd-mobile';
import {useNavigate} from 'react-router-dom';
import style from './index.module.styl'
import mock from './mock.json'

const AutoReply = () => {
    const navigate = useNavigate();
    return (<>
        <NavBar
            className="navbar"
            onBack={() => navigate('/robot')}>自动回复</NavBar>
        <div className={style.list}>
            {mock.map((v, i) => {
                return (
                    <Card key={i} className={style.card}>
                        <Space>
                            <span>关键词:</span>
                            {v.keys.map((k: string, j) =>
                                <Tag fill='outline' key={j}>
                                    {k}
                                </Tag>)
                            }
                        </Space>
                        <Divider/>
                        <span>回复: </span>
                        {v.reply}
                        <Divider/>
                        <Space block justify="between">
                            <Switch checked={v.flag}/>
                            <Space>
                                <Button
                                    color="primary"
                                    size="small"
                                    fill="outline">编辑</Button>
                                <Button
                                    color="danger"
                                    size="small"
                                    fill="outline">删除</Button>
                            </Space>
                        </Space>
                    </Card>
                )
            })}
        </div>
        <div className={style.bottom}>
            <Button
                block
                color="primary"
                onClick={() => navigate('/autoreply/add')}>添加自动回复</Button>
        </div>
    </>)
}

export default AutoReply
