import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      return this.store.findAll('review');
    },
  // model() {
  //   return Ember.RSVP.hash({
  //     reviews: this.store.findAll('review')
  //   });
  // }

});
