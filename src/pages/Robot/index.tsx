import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {NavBar, Empty, Button, AutoCenter, Space} from 'antd-mobile';
import style from './index.module.styl';
import UserInfo from '@/pages/MainUserInfo';
import RobotEmpty from '@/pages/RobotEmpty';
import {devicesList} from '@/request';
import store from '@/store';

const RobotMain = () => {
    useEffect(() => {
        devicesList();
    }, []);
    return (
        <>
            <NavBar
                className="navbar"
                backArrow={false}>小邻机器人</NavBar>
            <div className={`${style.main} clearfix`}>
                {store.device
                    ? <UserInfo/>
                    : <RobotEmpty/>
                }
            </div>
        </>
    )
}

export default observer(RobotMain);
