import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {NavBar} from 'antd-mobile';
import style from './index.module.styl';
import RobotLogin from '@/pages/RobotLogin';
import RobotEmpty from '@/pages/RobotEmpty';
import {getDevicesList} from '@/request';
import store from '@/store';

const Robot = () => {
    useEffect(() => {
        getDevicesList({});
    }, []);
    return (
        <>
            <NavBar
                className="navbar"
                backArrow={false}>小邻机器人</NavBar>
            <div className={`${style.main} clearfix`}>
                {store.device
                    ? <RobotLogin/>
                    : <RobotEmpty/>
                }
            </div>
        </>
    )
}

export default observer(Robot);
