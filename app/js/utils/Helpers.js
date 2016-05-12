'use strict';

import _ from 'lodash';

const Helpers = {

  processObjectKeys(obj, convert) {
    let output;

    if ( _.isDate(obj) || _.isRegExp(obj) || !_.isObject(obj) ) {
      return obj;
    } else if ( _.isArray(obj) ) {
      output = _.map(obj, item => {
        return this.processObjectKeys(item, convert);
      });
    } else {
      output = {};
      _.forOwn(obj, (value, key) => {
        output[convert(key)] = this.processObjectKeys(obj[key], convert);
      });
    }

    return output;
  }

};

export default Helpers;
