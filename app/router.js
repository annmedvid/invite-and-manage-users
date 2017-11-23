import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('new', { path: '/new' });
    this.route('user', { path: '/:user_id' });
  });
  this.route('teams', function() {
    this.route('new', { path: '/new' });
    this.route('team', { path: '/:team_id' });
  });
});

export default Router;
