import EmberRouter from '@ember/routing/router';
import config from 'e-cards/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('menu-card', function () {
    this.route('preview', { path: '/preview/:preview_id' });
    this.route('create');
    this.route('view');
  });
});
