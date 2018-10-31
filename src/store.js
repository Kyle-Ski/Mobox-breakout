import {observable} from "mobx";
import {observer} from "mobx-react";

class Store {
    @observable count='🎃';
    //all of your "State" goes here
    increment=()=>{
        if(this.count.length % 4 === 2){
            this.count+='☠️';
        } else {
            this.count+='🎃'
        }
    }
}

export default new Store();