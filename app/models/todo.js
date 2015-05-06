import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean', {defaultValue: false}),
  archived: DS.attr('boolean', {defaultValue: false}),
  dueDate: DS.attr('date'),
  description: DS.attr('string'),

  list: DS.belongsTo('list', {async: true})
});
