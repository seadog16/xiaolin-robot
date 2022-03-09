import {NavBar, List, Avatar, Switch, Button} from 'antd-mobile';
import {useNavigate} from 'react-router-dom';
import style from './index.module.styl';
import mock from './mock.json';

const GroupManage = () => {
    const navigate = useNavigate();
    return (
        <>
            <NavBar
                className="navbar"
                onBack={() => navigate('/robot')}>群管理</NavBar>
            <List className={style.list}>
                {mock.data.map((v, i) => {
                    return (
                        <List.Item
                            key={i}
                            prefix={
                                <Avatar src={`https://picsum.photos/200?autobroadcast?groupmanage${i}`}/>
                            }
                            description="群收益人"
                            extra={
                                <Switch
                                    checked={Boolean(v.beneficiary)}
                                    uncheckedText="本人"
                                    checkedText="代理"/>
                            }>
                            {v.groupname}</List.Item>
                    )
                })}
            </List>
            <div className={style.bottom}>
                <Button
                    block
                    color="primary"
                    onClick={() => navigate('/groupmanage/add')}>添加卖货群</Button>
            </div>
        </>
    )
}

export default GroupManage;
