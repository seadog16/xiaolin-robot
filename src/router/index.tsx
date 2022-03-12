import {lazy} from 'react';
import {Navigate} from 'react-router-dom';

const Main = lazy(() => import('@/pages/RobotMain'));
const Analysis = lazy(() => import('@/pages/Analysis'));
const GroupManage = lazy(() => import('@/pages/GroupManage'));
const GroupManageAdd = lazy(() => import('@/pages/GroupManageAdd'));
const BroadcastSetting = lazy(() => import('@/pages/BroadcastSetting'));
const AutoReply = lazy(() => import('@/pages/AutoReply'));
const AutoReplyAdd = lazy(() => import('@/pages/AutoReplyAdd'));
const WelcomeEnter = lazy(() => import('@/pages/WelcomeEnter'));
const AutoMoments = lazy(() => import('@/pages/AutoMoments'));

const routes = [{
    path: '/',
    element: <Navigate to="/robot"/>
}, {
    path: '/robot',
    element: <Main/>
}, {
    path: '/analysis/:key',
    element: <Analysis/>
}, {
    path: '/groupmanage',
    element: <GroupManage/>
}, {
    path: '/groupmanage/add',
    element: <GroupManageAdd/>
}, {
    path: '/broadcast',
    element: <BroadcastSetting/>
}, {
    path: '/autoreply',
    element: <AutoReply/>
}, {
    path: '/autoreply/add',
    element: <AutoReplyAdd/>
}, {
    path: '/welcome',
    element: <WelcomeEnter/>
}, {
    path: '/automoments',
    element: <AutoMoments/>
}];


export default routes
