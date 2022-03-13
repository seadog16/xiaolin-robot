import {Card, List, Avatar} from 'antd-mobile';
import {useNavigate} from 'react-router-dom';
import style from './index.module.styl';

const AutoBroadcast = () => {
    const navigate = useNavigate();
    const groups = [1]
    return (
        <Card className={style.card} title="自动播货(1/10)">
            <List className={style.list}>
                {groups.map((v, i) => {
                    return (
                        <List.Item
                            key={i}
                            prefix={
                                <Avatar
                                    src="https://picsum.photos/200?autobroadcast"/>
                            }
                            arrow
                            description="跟发官方素材:官方精品"
                            onClick={() => navigate('/broadcast')}>创链CCMALL核心群</List.Item>
                    )
                })}
            </List>
        </Card>
    )
}

export default AutoBroadcast
