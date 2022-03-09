import {NavBar} from 'antd-mobile';
import style from './index.module.styl';
import UserInfo from '@/pages/RobotMainUserInfo';
import Analysis from '@/pages/RobotMainAnalysis';
import GroupManage from '@/pages/RobotMainGroupManage';
import AutoBroadcast from '@/pages/RobotMainAutoBroadcast';
import Assistant from '@/pages/RobotMainAssistant';

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
