import Route from '@ember/routing/route';
import { inject } from '@ember/service';
export default class ApplicationRoute extends Route {

   @inject
   requestHandler;
   
   async model() {
     let res = await this.requestHandler.getRequest("menuCards").then(resp =>{
      return resp.json();
     }).catch(err=>{
      console.log("err: ",err);
     });
     return res;
   }
}
