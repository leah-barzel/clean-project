import { action, makeObservable, observable } from 'mobx';


class BusinessStore {

    isEdit = false;
    business = {
        name: "fly on music",
        address: "רמת שלמה ירושלים",
        phone: "0534110928",
        owner: "לאה ברזל",
        description: "", 
    };
    constructor() {
        makeObservable(this, {
            business: observable,
            isEdit: observable,
            editDeataild: action,
            markIsEdit: action,
            setBusiness: action,
        })
    }

    setBusiness = (business) => {
        this.business = business;
    }
    editDeataild(x) {
        this.business = x;

    }
    markIsEdit() {
        this.isEdit = !this.isEdit;
    }
}
export default new BusinessStore();