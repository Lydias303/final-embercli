import DS from 'ember-data';

var List = DS.Model.extend({
  title: DS.attr('string'),
  todos: DS.hasMany('todo', {async: true})
});

export default List;
