import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },

    destroyQuestion(question){
      if(confirm('Are you positive that you want to delete this question and all of it\'s answers?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    },

    saveAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answer').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
