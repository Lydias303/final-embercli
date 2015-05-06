import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createList: function () {
      var title = this.get('newListTitle');

      if(!title){return false;}
      if(!title.trim()){ return; }

      var list = this.store.createRecord('list', {
        title: title
      });

      this.set('newListTitle', '');
      list.save();
    },
  }

});
