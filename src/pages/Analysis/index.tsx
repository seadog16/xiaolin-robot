import {NavBar, Tabs} from 'antd-mobile';
import {useNavigate, useParams} from 'react-router-dom';
import style from './index.module.styl';
import ActiveUsers from '@/pages/AnalysisActiveUsers';
import Transactions from '@/pages/AnalysisTransactions';

const Analysis = () => {
    const navigate = useNavigate();
    const {key} = useParams();
    const tabs = [{
        label: '活跃用户',
        element: <ActiveUsers/>
    }, {
        label: '成交订单',
        element: <Transactions/>
    }]
    return (
        <>
            <NavBar
                className="navbar"
                onBack={() => navigate('/robot')}>收益</NavBar>
            <Tabs
                className={`tabs ${style.tab}`}
                activeKey={key}
                onChange={key => navigate(`/analysis/${key}`)}>
                {tabs.map((v, i) => {
                    return (
                        <Tabs.Tab
                            key={v.label}
                            title={v.label}>
                            {v.element}</Tabs.Tab>
                    )
                })}
            </Tabs>
        </>
    )
}

export default Analysis;
