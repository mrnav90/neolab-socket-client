'use strict';

import { connect, Emitter } from 'socketcluster-client';

export default class Connection {
  constructor(options) {
    this.emit = new Emitter();
    this.connection = connect(options);
    // this.connection.on('connect', (status) => {
    //   this.emit('neolab:socket-connected', status);
    // });
    //
    // this.connection.on('connecting', () => {
    //   this.emit('neolab:socket-connecting');
    // });
    //
    // this.connection.on('authenticate', () => {
    //   this.emit('neolab:socket-authenticated');
    // });
    //
    // this.connection.on('deauthenticate', () => {
    //   this.emit('neolab:socket-deauthenticated');
    // });
    //
    // this.connection.on('disconnect', () => {
    //   this.emit('neolab:socket-disconnected');
    // });
    //
    // this.connection.on('error', (error) => {
    //   this.emit('neolab:socket-failed', error);
    // });
    return this.connection;
  }
}
