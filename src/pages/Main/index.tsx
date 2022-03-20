import {useState, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {NavBar} from 'antd-mobile';
import style from './index.module.styl';
import UserInfo from '@/pages/MainUserInfo';
import Analysis from '@/pages/MainAnalysis';
import GroupManage from '@/pages/MainGroupManage';
import AutoBroadcast from '@/pages/MainAutoBroadcast';
import Assistant from '@/pages/MainAssistant';
import store from '@/store';
import {checkWXLogin, getDevicesList, isOnline} from '@/request'

const Main = () => {
    let timer: any|null
    let timerRate = 5000;
    useEffect(() => {
        const checkOnline = () => {
            store.device?.deviceId && isOnline({deviceId: store.device.deviceId}).then(({code}: any) => {
                store.setState({
                    wxOnline: code === 200
                });
                timer = setTimeout(checkOnline, timerRate);
            });
        }
        checkOnline();
        if (!store.wxLoaded) {
            checkWXLogin({deviceId: store.device?.deviceId}).then(({code, data}: any) => {
                if (code === 200) {
                    store.setState({
                        wx: data
                    })
                } else if (code === 400) {
                    window.location.assign('/#/robot');
                }
            })
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        }
    }, [store.device]);
    useEffect(() => {
        if (!store.devicesLoaded) {
            getDevicesList({});
        }
    }, []);
    return (
        <>
            <NavBar
                className="navbar"
                backArrow={false}>小邻机器人</NavBar>
            <div className={`${style.main} clearfix`}>
                <UserInfo/>
                <Analysis/>
                <GroupManage/>
                <AutoBroadcast/>
                <Assistant/>
            </div>
        </>
    )
}

export default observer(Main)
