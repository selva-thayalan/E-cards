import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { inject } from '@ember/service';
import isNullOrEmpty from '../../utils/common/is-null-or-empty';

export default class MenuCardCreateController extends Controller {
  isHotelNameInvalid = false; //To Show error message on the input tag.
  
  hotelName = '';
  menuItems = undefined;
  classificationList = [];//To add classifications for the menu items to be classified and search in view.

  //classfications input relates properties.
  currentClassificationValue = "";
  isClassificationEditEnabled = false;

  @inject
  router;

  @inject
  requestHandler;

  init() {
    super.init(...arguments);
    this.menuItems = [{ name: '', quantity: '', price: '' }];
  }

  @action
  addNewClassification(){
    this.classificationList.pushObject(this.currentClassificationValue);
    this.set("currentClassificationValue","");
  }

  @action
  addNewItem() {
    this.menuItems.pushObject({ name: '', quantity: '', price: '' });
  }

  @action
  async onCreateMenu(){
    let validationResult = this.validateMenu();
    //To testing the async button we are used this stuff. Need to replace with actual createMenu functionality.
    let _this = this;
    return new Promise((resolve, error)=>  {
      setTimeout(()=>{
        if(validationResult == true)
          resolve("Success");
        else
          error(validationResult);
      }, 1000);
    }).then(() => {
      return this.requestHandler.postRequest('menuCards', {
        name: _this.hotelName,
        items: _this.menuItems,
      }).then(resp => {
        return resp.json();
      });
    }).then(model => {
        this.router.transitionTo("menu-card.preview", {...model, id: "new"});
    });
  }

  validateMenu(hotelName = this.hotelName, menuItems = this.menuItems){//If menu is valid then return 'true' unless will return the issue message.
    let resultStatus = true;
    if(isNullOrEmpty(hotelName)){
      this.set("isHotelNameInvalid", true);
      resultStatus = "Invalid hotel name";
    }
    menuItems.forEach(menu => {
      if(isNullOrEmpty(menu.name)){
        resultStatus = "Invalid menu item";
        set(menu, "isInvalidName", "true");
      }
    });
    return resultStatus;
  }
}
