'use strict';

const Koa = require('koa');
const KoaBodyParser = require('koa-bodyparser');
const KoaRoute = require('koa-route');

const DummyController = require('./controllers/dummy');

const internals = {};

/**
 * The SMSBrigadistas class is the main entry point for the application.
 *
 * @class SMSBrigadistas
 * @param {SMSBrigadistas.tConfiguration} config the initialization options to
 * extend the instance
 */
module.exports = internals.SMSBrigadistas = class SMSBrigadistas {

  constructor(config) {

    Object.assign(this, config);
  }

  /**
   * Initializes the application and starts listening. Also prints a
   * nice robotic banner with information.
   *
   * @function run
   * @memberof SMSBrigadistas
   * @instance
   */
  run() {

    this._initializeServer();
    this._startServer();
    this._printBanner();

    return Promise.resolve();
  }

  // Initializes the Koa application and all the handlers.

  _initializeServer() {

    const self = this;

    this._app = Koa();

    this._app.use(KoaBodyParser());

    this._app.use(function * (next) {

      const accountSid = this.request.body.AccountSid || this.request.query.AccountSid;

      if (accountSid === self.twilioAccountSid) {
        yield next;
      }
      else {
        this.throw('Unauthorized', 401);
      }
    });

    this._initializeDummyRoutes();

    this._app.use(function * () {

      this.body = 'How did you get here? Shoo!';
    });

  }

  // Starts listening

  _startServer() {

    this._app.listen(this.port);
  }

  // Initializes the main menu routes.

  _initializeDummyRoutes() {

    const dummyController = new DummyController();

    this._app.use(KoaRoute.get('/', dummyController.serveDummyResponse()));
  }

  // Prints the banner.

  _printBanner() {

    console.log('      >o<');
    console.log('    /-----\\');
    console.log(`    |ú   ù|  - Happy to listen on: ${this.port}`);
    console.log('    |  U  |');
    console.log('     \\---/');
    console.log('  +---------+');
    console.log(' ~|    ()   |~');
    console.log(' ~|    /\\   | ~');
    console.log(' ~|    \\/   |  ~c');
    console.log(' ^+---------+');
    console.log('   (o==o==o) ');

  }
};
