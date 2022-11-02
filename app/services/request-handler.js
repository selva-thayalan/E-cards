import Service from '@ember/service';
import environment from 'e-cards/config/environment';

export default class RequestHandlerService extends Service {
    //A helper service to handle the API request related stuffs to the API_URL.
    getRequest(path, params){
        return fetch(`${environment.API_URL}${path}`);
    }

    postRequest(path, data){
        return fetch(`${environment.API_URL}${path}`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    }
}
