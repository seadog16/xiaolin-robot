import {useState, useCallback} from 'react';
import {Avatar, List, Space, DatePicker} from 'antd-mobile';
import {DownCircleOutline} from 'antd-mobile-icons';
import * as dayjs from 'dayjs';
import style from '../AnalysisTransactions/index.module.styl';
import mock from './mock.json';

const AnalysisActiveUsers = () => {
    const [pickerVisible, setPickerVisible] = useState(false);
    const labelRenderer = useCallback((type: string, data: number) => {
        switch (type) {
            case 'year':
                return data + '年'
            case 'month':
                return data + '月'
            case 'day':
                return data + '日'
            case 'hour':
                return data + '时'
            case 'minute':
                return data + '分'
            case 'second':
                return data + '秒'
            default:
                return data
        }
    }, []);
    const now = new Date();
    const [date, setDate] = useState(now);
    return (
        <>
            <Space
                block
                justify="between"
                className={style.space}>
                <div onClick={() => setPickerVisible(true)}>
                    {dayjs(date).format('YYYY-MM-DD')}
                    &nbsp;
                    <DownCircleOutline />
                </div>
                <div>共计1人</div>
            </Space>
            <DatePicker
                visible={pickerVisible}
                onClose={() => setPickerVisible(false)}
                max={now}
                renderLabel={labelRenderer}
                defaultValue={date}
                onConfirm={val => setDate(val)}/>
            <List className={`${style.list} ${style.transactions}`}>
                {mock.data.map((v, i) => {
                    return (
                        <List.Item
                            key={i}
                            prefix={
                                <Avatar
                                    src={`https://picsum.photos/200?transaction${i}`}/>
                            }
                            extra={v.date}>
                            {v.username}</List.Item>
                    )
                })}
            </List>
        </>
    )
}

export default AnalysisActiveUsers;
