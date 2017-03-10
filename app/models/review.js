import DS from 'ember-data';

export default DS.Model.extend({

comment: DS.attr(),
rating: DS.attr(),
restaurant: DS.attr(),
timestamp: DS.attr()

});
