import Component from '@ember/component';
import { task } from "ember-concurrency";

export default class AsyncButtonComponent extends Component {
    tagName = "button";
    classNames = ["async-btn","e-card-btn"];
    classNameBindings = ["isClicked:disabled", "isError:error"]

    //args...
    initialButtonText = "";
    waitingButtonText = "";

    //properties...
    isClicked = false;
    isError = false;
    errorStack = "";

    click(){
        this.onClickTask.perform();
    }

    @task
    *onClickTask(){
        yield this.onClick().then(
            () => this.setProperties({errorStack: "", isError: false, isClicked: true}),
            (err) => this.setProperties({errorStack: `Some error occured... please retry... error message: ${err}`, isError: true}));
    }
}
