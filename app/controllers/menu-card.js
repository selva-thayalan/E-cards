import Controller from '@ember/controller';
import { action } from "@ember/object";

export default class MenuCardController extends Controller {
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
    //To testing the async button we are used this stuff. Need to replace with actual createMenu functionality.
    return new Promise((resolve, error)=>  {
      setTimeout(()=>{
        return error("hai");
      }, 1000);
    });
  }
}
