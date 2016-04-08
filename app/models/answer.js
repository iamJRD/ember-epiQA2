import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  upVote: DS.attr('number'),
  downVote: DS.attr('number')
});
