import Ember from 'ember';

export function questionAnswers(params) {
  var question = params[0];

  if(question.get('answer').get('length') === 0) {
    return Ember.String.htmlSafe('<p class="helperText">Be the first to answer this question!</p>');
  } else {
    return Ember.String.htmlSafe('<p>Times this question has been answered: <span class="helperText">' +  question.get('answer').get('length') + '</span></p>');
  }
}

export default Ember.Helper.helper(questionAnswers);
