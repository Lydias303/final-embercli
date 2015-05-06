import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),

  list: DS.belongsTo('list', {async: true})
});

export default Todo
