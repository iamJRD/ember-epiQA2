import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        note: this.get('note')
      };
      this.sendAction('saveQuestion2', params);
    }
  }
});
