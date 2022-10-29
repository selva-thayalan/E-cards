import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class MenuCardController extends Controller {
  isHotelNameInvalid = false;//To Show error message on the input tag.
  hotelName = '';
  menuItems = undefined;

  init() {
    super.init(...arguments);
    this.menuItems = [{ name: '', quantity: '', price: 0 }];
  }

  @action
  addNewItem() {
    this.menuItems.pushObject({ name: '', quantity: '', price: 0 });
  }

  @action
  async onCreateMenu(){
    let validationResult = this.validateMenu();
    //To testing the async button we are used this stuff. Need to replace with actual createMenu functionality.
    return new Promise((resolve, error)=>  {
      setTimeout(()=>{
        if(validationResult == true)
          resolve("Success");
        else
          return error(validationResult);
      }, 1000);
    });
  }

  validateMenu(){//If menu is valid then return 'true' unless will return the issue message.
      let resultStatus = true;
      if(this.hotelName == null || this.hotelName == ""){
        this.set("isHotelNameInvalid", true);
        resultStatus = "Invalid hotel name";
      }
      return resultStatus;
  }
}
