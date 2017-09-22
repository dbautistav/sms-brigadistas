'use strict';

const Twilio = require('twilio');

const internals = {};

internals.kContentType = 'application/xml'; // The content type used to respond

/**
 * Handles the HTTP requests for the main menu
 *
 * @class DummyController
 */
module.exports = internals.DummyController = class DummyController {

  /**
   * Serves a dummy response
   *
   * @function serveDummyResponse
   * @memberof DummyController
   * @instance
   * @return {generator} a koa compatible handler generator function
   */
  serveDummyResponse() {

    return function * () {

      const response = new Twilio.TwimlResponse();

      // the action will default to post in the same URL, so no change
      // required there.
      response.message('mensaje recibido :)');

      this.type = internals.kContentType;
      this.body = response.toString();
    };
  }
};
