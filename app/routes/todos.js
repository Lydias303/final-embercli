import Ember from 'ember';

export default Ember.Route.extend({

    actions: {

      deleteTodo: function(id) {
        var list = this.modelFor(this.routeName);

        this.store.find('todo', id).then(function(todo) {
          list.get('todos').removeObject(todo);
          list.save();

          todo.destroyRecord();
        });
      },

      createTodo: function() {
        var newTodoTitle = this.controllerFor(this.routeName).get('newTodoTitle');

        if (Ember.isBlank(newTodoTitle)) {return false;}

        var list = this.modelFor(this.routeName);

        var todo = this.store.createRecord('todo', {
          title: newTodoTitle,
          list: list
        });

        this.controllerFor(this.routeName).set('newTodoTitle', '');

        todo.save().then(function(todo) {
          list.get('todos').addObject(todo);
          list.save();
        });
      }
    }
});
