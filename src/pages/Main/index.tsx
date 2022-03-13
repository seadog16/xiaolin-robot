import {useState, useEffect} from 'react';
import {NavBar} from 'antd-mobile';
import style from './index.module.styl';
import UserInfo from '@/pages/MainUserInfo';
import Analysis from '@/pages/MainAnalysis';
import GroupManage from '@/pages/MainGroupManage';
import AutoBroadcast from '@/pages/MainAutoBroadcast';
import Assistant from '@/pages/MainAssistant';

const RobotMain = () => {
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

export default RobotMain
