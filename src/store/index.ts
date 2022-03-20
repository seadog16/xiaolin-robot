import {makeObservable, observable, action, computed} from 'mobx';

class Store {
    @observable devices: any[]|never[] = [];
    @observable wx: any = {};
    @observable devicesLoaded: boolean = false;
    @observable wxLoaded: boolean = false;
    @observable wxOnline: boolean = false;
    @computed get device() {
        return this.devices.filter(obj => obj.status > -1)[0];
    }
    @computed get nonDevice() {
        return this.devices.filter(obj => obj.status === -1)[0];
    }
    constructor() {
        makeObservable(this)
    }
    @action setState(val: any) {
        for (let i in val) {
            (<any>this)[i] = val[i];
        }
    }
}

export default new Store();
