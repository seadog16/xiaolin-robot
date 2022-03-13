import store from '@/store';

export const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    store.setDevices([]);
    location.replace('/#/login');
}
