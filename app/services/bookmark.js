import Ember from 'ember';

export default Ember.Service.extend({
  bookmarks: [],

  add(question) {
    this.get('bookmarks').pushObject(question);
  }
});
