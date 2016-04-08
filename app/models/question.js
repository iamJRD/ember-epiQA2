import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  content: DS.attr(),
  note: DS.attr(),
  date: DS.attr(),
  answer: DS.hasMany('answer', {async: true})
});
