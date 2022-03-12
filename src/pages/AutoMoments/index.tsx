import {useNavigate} from 'react-router-dom';
import {NavBar, Space, Card, Switch, Divider} from 'antd-mobile';
import {RightOutline} from 'antd-mobile-icons';

const AutoMoments = () => {
    const navigate = useNavigate();
    return (
        <Space
            block
            direction="vertical"
            style={{"--gap-vertical": ".75rem"}}>
            <NavBar
                className="navbar"
                onBack={() => navigate('/robot')}>自动发圈</NavBar>
            <Card>
                <Space
                    justify="between"
                    block>
                    <div>
                        <div>自动跟发官方朋友圈</div>
                        <div>自动转发店主链接</div>
                    </div>
                    <Switch/>
                </Space>
                <Divider/>
                <Space
                    justify="between"
                    block>
                    <div>谁可以看</div>
                    <div>所有人可见<RightOutline /></div>
                </Space>
            </Card>
        </Space>
    )
}

export default AutoMoments;
