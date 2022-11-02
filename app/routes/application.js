import Route from '@ember/routing/route';
import environment from 'e-cards/config/environment';

export default class ApplicationRoute extends Route {
   async model() {
     let res = await fetch(`${environment.API_URL}menuCards`).then(resp =>{
      return resp.json();
     }).catch(err=>{
      console.log("err: ",err);
     });
     return res;
   }
}
