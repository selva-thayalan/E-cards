import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    async model(){
        let res = await fetch("https://e-cards-api-production.up.railway.app/menuCards");
        let data = await res.json();
        console.log("res: ",data);
        return data;
    }
}
