import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Tag, Card, Avatar, SwipeAction} from 'antd-mobile';
import style from './index.module.styl';
import store from '@/store';

const RobotMainUserInfo = () => {
    const deadline = '2022-05-06 09:53:15'
    const actions = [{
        key: 'renew',
        text: '续费',
        color: 'success'
    }, {
        key: 'exit',
        text: '退出',
        color: 'danger'
    }];
    return (
        <Card>
            <SwipeAction rightActions={actions}>
                <div className={style.user}>
                    <Avatar
                        className={style.userAvatar}
                        src={store.wx.smallHeadImgUrl}/>
                    <div className={style.userInfo}>
                        <div>
                            <span className={style.userInfoName}>{store.wx.nickName}</span>
                            <Tag
                                className={style.userStatus}
                                color={store.wxOnline ? 'success' : 'default'}
                                fill="outline">{store.wxOnline ? '在线': '离线'}</Tag>
                        </div>
                        <div className={style.userInfoTime}>
                            <span>有效日期: {deadline}</span>
                        </div>
                    </div>
                </div>
            </SwipeAction>
        </Card>
    )
}

export default observer(RobotMainUserInfo);
