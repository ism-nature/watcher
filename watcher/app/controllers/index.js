import Controller from '@ember/controller';

export default Controller.extend({

    user: null,
    isLoggedIn: false,

    actions: {
        submit() {
            if(!this.loggedIn)
                this.toggleProperty('isLoggedIn')
        }
      }

});
