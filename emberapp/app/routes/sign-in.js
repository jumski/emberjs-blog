import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service('authentication'),

  actions: {
    submit(login, password) {
      this.auth.signIn(login, password).done(() => {
        this.transitionTo('index');
      }).fail(() => {
        alert('failed login!');
      });
    }
  }
});
