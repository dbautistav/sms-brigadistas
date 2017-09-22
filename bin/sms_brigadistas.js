#!/usr/bin/env node
'use strict';

const Config = require('../config/config');
const SMSBrigadistas = require('..');

const internals = {};

internals.smsBrigadistas = new SMSBrigadistas(Config);

internals.main = async function () {

  try {
    internals.smsBrigadistas.run();
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
};

internals.main();
