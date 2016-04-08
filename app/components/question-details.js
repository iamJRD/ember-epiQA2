import Ember from 'ember';

export default Ember.Component.extend({
  bookmark: Ember.inject.service(),

  actions: {
    bookmarkQuestion(question) {
      console.log('success');
      this.get('bookmark').add(question);
    }
  }
});
