
"use strict";

let AnalogWrite = require('./AnalogWrite.js')
let DigitalWrite = require('./DigitalWrite.js')
let ServoWrite = require('./ServoWrite.js')
let DigitalRead = require('./DigitalRead.js')
let DigitalSetDirection = require('./DigitalSetDirection.js')
let ServoRead = require('./ServoRead.js')
let AnalogRead = require('./AnalogRead.js')

module.exports = {
  AnalogWrite: AnalogWrite,
  DigitalWrite: DigitalWrite,
  ServoWrite: ServoWrite,
  DigitalRead: DigitalRead,
  DigitalSetDirection: DigitalSetDirection,
  ServoRead: ServoRead,
  AnalogRead: AnalogRead,
};
