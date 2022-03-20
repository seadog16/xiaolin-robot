import {useState} from 'react';
import {AutoCenter, Button, Empty, Space, Toast} from 'antd-mobile';
import {devicesList, newDevice} from '@/request';
import store from '@/store';

export default () => {
    const [loading, setLoading] = useState(false);
    const create = () => {
        setLoading(true);
        newDevice({deviceId: store.nonDevice?.deviceId})
            .then(({code, message}: any) => {
                setLoading(false);
                Toast.show({
                    content: message,
                    icon: code === 200 ? 'success' : 'fail'
                })
                devicesList();
            });
    }
    return (
        <Space
            block
            direction="vertical"
            justify="center"
            style={{height:"100%"}}>
            <Empty
                description={
                    <>
                        <AutoCenter>暂无机器人</AutoCenter>
                        <br/>
                        <Button
                            onClick={create}
                            loading={loading}
                            color="primary">点击创建机器人</Button>
                    </>
                }/>
        </Space>
    )
}
