import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        note: this.get('note'),
      };
      this.sendAction('updateQuestion', question, params);
      this.set('updateQuestionForm', false);
    },
  }
});
