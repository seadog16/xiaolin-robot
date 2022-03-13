import {observable, action, computed} from 'mobx';

class Store {
    @observable devices: any[]|never[] = [];
    @observable wx: any = {};
    @computed get device() {
        return this.devices.filter(obj => obj.status > -1)[0];
    }
    @computed get nonDevice() {
        return this.devices.filter(obj => obj.status === -1)[0];
    }
    @action setDevices(val: any[]|never[]) {
        this.devices = val;
    }
    @action setWx(val: any) {
        this.wx = val;
    }
}

export default new Store();
