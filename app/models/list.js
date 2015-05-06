import DS from 'ember-data';

var List = DS.Model.extend({
  title: DS.attr('string')

});

export default List;
