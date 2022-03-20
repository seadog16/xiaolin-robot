import {useState} from 'react';
import {AutoCenter, Image, Button} from 'antd-mobile';
import {WXLogin, loginAgain, isOnline, checkWXLogin} from '@/request';
import store from '@/store';
import UserInfo from '@/pages/MainUserInfo';
import style from './index.module.styl';

export default () => {
    const [loading, setLoading] = useState(false);
    const [qrUrl, setQrUrl] = useState('');
    const [deviceId]: any[] = useState(() => store.device?.deviceId);
    let timer: any;
    const timerRate = 1000;
    const online = () => {
        isOnline({deviceId}).then(({code}: any) => {
            if (code === 400) {
                timer = setTimeout(online, timerRate);
            } else if (code === 200) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                    window.location.assign('/#/main');
                }
            }
        });
    }
    const weixinLogin = () => {
        setLoading(true);
        checkWXLogin({deviceId}).then(({data, code}: any) => {
            if (code === 200) {
                store.setState({
                    wx: data,
                    xwLoaded: true
                });
                setLoading(true);
                window.location.assign('/#/main');
            } else if (code === 400) {
                loginAgain({deviceId}).then(({data, code}: any) => {
                    if (code === 200) {
                        setLoading(false);
                        store.setState({
                            wx: data,
                            wxLoaded: true
                        })
                        window.location.assign('/#/main');
                    } else if (code === 400) {
                        WXLogin({deviceId})
                            .then(({data}: any) => {
                                setLoading(false);
                                setQrUrl(data.qrCodeUrl);
                                online();
                            });
                    }
                }).catch(() => {
                    setLoading(false);
                })
            }
        }).catch(() => {
            setLoading(false);
        })

    }
    return (
        <div className={style.online}>
            <UserInfo className={style.onlineUser}/>
            <div className={style.onlineLogin}>
                {qrUrl
                    ? <Image src={qrUrl}/>
                    : <>
                        <AutoCenter>你的机器人已待命</AutoCenter>
                        <br/>
                        <Button
                            loading={loading}
                            color="primary"
                            onClick={weixinLogin}>登录机器人</Button>
                    </>}
            </div>
        </div>
    )
}
