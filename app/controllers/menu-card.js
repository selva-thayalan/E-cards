import Controller from '@ember/controller';
import { action } from "@ember/object"

export default class MenuCardController extends Controller {
    hotelName = '';
    menuItems = undefined;
  
    init() {
      super.init(...arguments);
      this.menuItems = [{ name: '', quantity: '', price: 0 }];
    }

    @action
    addNewItem(){
        this.menuItems.pushObject({ name: '', quantity: '', price: 0 });
    }
}
