import {observable} from "mobx";
import {observer} from "mobx-react";

class Store {
    @observable count=0;
    //all of your "State" goes here
    increment=()=>{
        this.count++;
    }
}

export default new Store();