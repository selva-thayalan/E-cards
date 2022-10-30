import Controller from '@ember/controller';
import { action, set } from "@ember/object";
import isNullOrEmpty from '../utils/common/is-null-or-empty';

export default class MenuCardController extends Controller {
  isHotelNameInvalid = false;//To Show error message on the input tag.
  hotelName = '';
  menuItems = undefined;

  init() {
    super.init(...arguments);
    this.menuItems = [{ name: '', quantity: '', price: '' }];
  }

  @action
  addNewItem() {
    this.menuItems.pushObject({ name: '', quantity: '', price: '' });
  }

  @action
  async onCreateMenu(){
    let validationResult = this.validateMenu();
    //To testing the async button we are used this stuff. Need to repla
    ce with actual createMenu functionality.
    return new Promise((resolve, error)=>  {
      setTimeout(()=>{
        if(validationResult == true)
          resolve("Success");
        else
          error(validationResult);
      }, 1000);
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
