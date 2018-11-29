import DS from 'ember-data';
import { dasherize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(key) {
    return key;
  },

/*  extractId(modelClass, resourceHash) {
    if(this.get('system')) {
      return dasherize(`${this.get('system')}-${resourceHash.id}`);
    }
    else {
      return dasherize(resourceHash.id);
    }
  }*/
});
