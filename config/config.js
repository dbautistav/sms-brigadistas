'use strict';

const Getenv = require('getenv');

const internals = {};

/**
 * The main configuration object for SMSBridgadistas. It will be used to
 * initialize all of the sub-components. It can extend any property of
 * the dead drop object.
 *
 * @memberof SMSBrigadistas
 * @typedef {object} tConfiguration
 * @property {number} [port=1989] the port where the app will listen on
 * @property {string} twilioAccountSid the twilio account sid used to authorize calls
 */
module.exports = internals.Config = {
  port: Getenv.int('SMS_BRIGADISTAS_PORT', 1989),
  twilioAccountSid: Getenv('SMS_BRIGADISTAS_TWILIO_ACCOUNT_SID')
};
