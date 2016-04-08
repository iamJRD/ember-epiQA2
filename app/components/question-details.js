import Ember from 'ember';

export default Ember.Component.extend({
  bookmark: Ember.inject.service(),

  actions: {
    bookmarkQuestion(question) {
      this.get('bookmark').add(question);
    }
  }
});
