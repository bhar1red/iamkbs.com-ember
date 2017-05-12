import Ember from 'ember';

export default Ember.Controller.extend({
  //  displayArray('skills','experience','education'):[false,false,false],
  displayArrayFlags: {
    "skills": false,
    "education": false,
    "experience": false
  },
  actions: {
    showCategory: function(category) {
      this.set('displayArrayFlags.' + category, true);
    },
    hideCategory: function(category) {
      this.set('displayArrayFlags.' + category, false);
    }
  }
});
