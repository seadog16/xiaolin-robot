import {useNavigate} from 'react-router-dom';
import {Card, Grid} from 'antd-mobile';
import style from './index.module.styl';

const Analysis = () => {
    const navigate = useNavigate();
    return (
        <Card>
            <Grid columns={4}>
                <Grid.Item>
                    <h2 className={style.amount}>0.00</h2>
                    <span className={style.label}>累计收益</span>
                </Grid.Item>
                <Grid.Item>
                    <h2 className={style.amount}>0.00</h2>
                    <span className={style.label}>今日收益</span>
                </Grid.Item>
                <Grid.Item onClick={() => navigate('/analysis/成交订单')}>
                    <h2 className={style.amount}>0.00</h2>
                    <span className={style.label}>今日订单</span>
                </Grid.Item>
                <Grid.Item onClick={() => navigate('/analysis/活跃用户')}>
                    <h2 className={style.amount}>0.00</h2>
                    <span className={style.label}>今日访客</span>
                </Grid.Item>
            </Grid>
        </Card>
    )
}

export default Analysis
