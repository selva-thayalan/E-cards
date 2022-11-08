import Component from '@ember/component';
import { action } from '@ember/object';

export default class StateSwitchComponent extends Component {
    classNames = ["state-switch-cont", "disp_flex"];

    options = [];//Option list as states. ex: [{name:"", icon: "", id:""}]
    selectedOption = null;
    isIconButton = true;//To show only the icon alone without the state text.

    @action
    onClickState(option){
        if(option != this.selectedOption){
            this.set("selectedOption", option);
            this.onChangeState?.();
        }
    }
}
