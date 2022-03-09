import {Card} from 'antd-mobile';
import {RightOutline} from 'antd-mobile-icons';
import {useNavigate} from 'react-router-dom';

const RobotMainGroupManage = () => {
    const navigate = useNavigate();
    return (
        <Card
            title="群管理(1/10)"
            extra={<RightOutline/>}
            onClick={() => {navigate('/groupmanage')}}/>
    )
}

export default RobotMainGroupManage;
