import DS from 'ember-data';

export default DS.Model.extend({
  restaurant: DS.attr(),
  averageRating: DS.attr()
});
