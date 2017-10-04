'use strict';

import { connect } from 'socketcluster-client';

export default class NeoLabSocketClient {
  constructor(options) {
    this.connection = connect(options);
    return this.connection;
  }
}
