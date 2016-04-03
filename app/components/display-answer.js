import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('answer');
  },

// HAVING A DIFFICULT TIME CONCEPTUALLY GRABBING HOW TO ADD TO A FIREBASE DATABASE BASED ON AN UN DEFINED VALUE
  // I AM PROBABLY OVERTHINKING IT BUT I COULD USE A LITTLE GUIDENCE
  // actions: {
  //   upVote(answer) {
  //     var upVoteCount = 0;
  //
  //     this.sendAction('upvoteCount2', answer.upVoteCount + 1)
  //   }
  // }
});
