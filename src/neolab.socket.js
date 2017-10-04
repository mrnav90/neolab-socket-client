'use strict';

export default class NeoLabSocketClient {
  constructor(appKey, options) {
    this.checkAppKey(appKey);
    this.appKey = appKey;
    this.options = options || {};
  }

  checkAppKey(key) {
    if (key === null || typeof key === 'undefined') {
      throw 'You must pass your app key when you instantiate NeoLabSocketClient.';
    }
  }
}
