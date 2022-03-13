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
                if (code === 200) {
                    devicesList();
                } else {
                    Toast.show({
                        content: message,
                        icon: 'fail'
                    })
                }
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
