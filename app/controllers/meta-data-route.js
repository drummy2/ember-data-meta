import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({


  actions: {

    doWhatever() {

      debugger;
      let data = get(this, 'store').findRecord('address', "1",{});
      data.then( response => {
        debugger;
        let meta = response.get('meta');
        console.log('meta');
      });

      return data;

    }


  }
});
