import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: 'answer.length',
  sortedQuestions: Ember.computed.sort('questions', 'sortDefinition'),
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function() {
    var sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [`${this.get('sortBy')}:${sortOrder}`];
  })
});
