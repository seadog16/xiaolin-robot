import {List, Avatar, Tag} from 'antd-mobile';
import style from './index.module.styl';
import ExtraContain from './ExtraContain';
import mock from './mock.json';

const AnalysisTransactions = () => {
    return (
        <List className={`${style.list} ${style.users}`}>
            {mock.data.map((v, i) => {
                return (
                    <List.Item
                        key={i}
                        prefix={
                            <Avatar
                                src={`https://picsum.photos/200?transaction${i}`}/>
                        }
                        description={v.goods}
                        extra={<ExtraContain data={v}/>}>
                        {v.username}
                        <Tag
                            color="warning"
                            fill="outline"
                            className={style.tag}>
                            {v.status}</Tag>
                    </List.Item>
                )
            })}
        </List>
    )
}

export default AnalysisTransactions;
