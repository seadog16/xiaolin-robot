import {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Space, Button, Input, AutoCenter, Form} from 'antd-mobile';
import {login} from '@/request';
import store from '@/store'

const Login = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    store.setState({
        devices: [],
        wx: {},
        devicesLoaded: false,
        wxLoaded: false,
        wxOnline: false
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const phoneRegex = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    const onFinish = (value: any) => {
        setLoading(true);
        setMessage('');
        login(value)
            .then(({code, message}: any) => {
                if (code !== 200) {
                    setLoading(false);
                    setMessage(message);
                }
            })
            .catch(() => {
                setLoading(false);
            })
    }
    return (
        <Space
            block
            direction="vertical"
            justify="center"
            align="center"
            style={{height:'100%'}}>
            <Form
                mode="card"
                requiredMarkStyle="text-optional"
                layout="horizontal"
                validateTrigger="onBlur"
                onFinish={onFinish}
                footer={
                    <Button
                        color="primary"
                        block
                        type="submit"
                        loading={loading}>登录</Button>
                }>
                <Form.Header>
                    <AutoCenter>小邻机器人</AutoCenter>
                </Form.Header>
                <Form.Item
                    name="phone"
                    label="手机号"
                    style={{"--prefix-width": "3em"}}
                    rules={[{
                        pattern: phoneRegex,
                        message: "请输入正确的手机号"
                    }, {
                        required: true,
                        message: "请输入手机号"
                    }]}>
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="密码"
                    style={{"--prefix-width": "3em"}}
                    rules={[{
                        required: true,
                        message: "请输入密码"
                    }]}>
                    <Input type="password"/>
                </Form.Item>
            </Form>
            <AutoCenter style={{color:'var(--adm-color-danger)'}}>{message}</AutoCenter>
        </Space>
    )
}

export default observer(Login);
