import axios from 'axios';
import md5 from 'crypto-js/md5';
import store from '@/store';

const request = axios.create({
    baseURL: 'https://api.xiaolinyouxuan.com'
});
request.interceptors.request.use((config: any) => {
    const {url}: any = config;
    if (!url.match(/^\/login/)) {
        const token = sessionStorage.getItem('token');
        if (token) config.headers.Authorization = token;
        else location.replace('/#/login');
    }
    return config;
})
request.interceptors.response.use(res => {
    const {data} = res;
    switch (data.code) {
        case 401:
            location.replace('/#/login');
            break;
        default:
            return data;
    }
})

export const login = ({phone, password}: {phone: string; password: string}) => {
    const pass = md5(password);
    return request.post('/login', {phone, password: pass.toString()})
        .then((res: any) => {
            const {code, data} = res;
            if (code === 200) {
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('user', data.id);
                location.assign('/#/robot');
            }
            return res;
        });
}

export const getDevicesList = ({deviceId}: {deviceId?: number}) =>
    request.post('/device/list', {deviceId}).then((res: any) => {
        if (res.code === 200) {
            store.setState({
                devices: res.data,
                devicesLoaded: true
            });
        }
    });

export const checkWXLogin = ({deviceId}: {deviceId:number}) =>
    request.get('/wxRobot/checkLogin', {
        params: {
            deviceId
        }
    });

export const WXLogin = ({deviceId}: {deviceId: number}) =>
    request.post('/wxRobot/login', {deviceId});

export const devicesList = async() => {
    const list: any = await getDevicesList({});
    if (list.code === 200) store.setState({
        devices: list.data
    });
    if (store.device) {
        const wx: any = await checkWXLogin({deviceId: store.device.deviceId});
        if (wx.code === 200) store.setState({
            wx: wx.data
        });
    }
}

export const newDevice = ({deviceId}: {deviceId?: string|number}) =>
    request.get('/device/create', {
        params: {deviceId}
    });



export const loginAgain = ({deviceId}: {deviceId: string|number}) =>
    request.get('/wxRobot/loginAgain', {
        params: {deviceId}
    });

export const isOnline = ({deviceId}: {deviceId: string|number}) =>
    request.get('/wxRobot/isOnline', {
        params: {deviceId}
    })
