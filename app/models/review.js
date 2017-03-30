import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr(),
  rating: DS.attr(),
  restaurant: DS.attr(),
  date: DS.attr(),
  user: DS.attr(),
  image: DS.attr()
});
