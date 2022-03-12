import {Avatar, Button, CheckList, NavBar, Space, TextArea, Card} from 'antd-mobile';
import {useNavigate} from 'react-router-dom';
import style from './index.module.styl';

const AutoReplyAdd = () => {
    const navigate = useNavigate();
    const groups = [1, 2, 3, 4, 5, 6, 7]
    return (<>
        <NavBar
            className="navbar"
            onBack={() => navigate('/autoreply')}>添加自动回复</NavBar>
        <div className={style.content}>
            <Card title="关键词">
                <Space wrap>
                    <Button fill="outline" size="small">+新增</Button>
                </Space>
            </Card>
            <Card title="回复">
                <TextArea rows={5}/>
            </Card>
            <Card title="选择微信群" extra={<a>全选</a>}>
                <CheckList
                    className={style.list}
                    multiple>
                    {groups.map((v, i) => {
                        return (
                            <CheckList.Item
                                value={i.toString()}
                                key={i}
                                prefix={
                                    <Avatar
                                        src={`https://picsum.photos/200?autoreply${i}`}/>
                                }
                                description="跟发官方素材:官方精品"
                                onClick={() => {}}>创链CCMALL核心群</CheckList.Item>
                        )
                    })}
                </CheckList>
            </Card>
        </div>
        <div className={style.bottom}>
            <Button
                block
                color="primary"
                onClick={() => {}}>保存</Button>
        </div>
    </>)
}

export default AutoReplyAdd;
