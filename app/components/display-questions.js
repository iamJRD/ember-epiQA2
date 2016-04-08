import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['answer.length:asc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortBy'),

});
