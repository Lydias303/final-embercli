import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    editTitle: function() {
      this.set('isEditing', true);
    },

    updateTitle: function() {
      this.set('isEditing', false);
      if(Ember.isEmpty(this.get('model.title'))) {
        this.send('removeList');
      } else {
        this.get('model').save();
      }
    },
    removeList: function() {
      var list = this.get('model');
      list.destroyRecord();

      this.transitionTo('lists');
    }
  },

  isEditing: false,
});
