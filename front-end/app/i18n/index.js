'use strict'

const enUS = require('./languages/en-us')

const {language: langCode} = navigator
const DEFAULT_LANG = enUS
let lang = DEFAULT_LANG

switch (langCode) {
  case 'en':
    lang = enUS
    break
  default:
    break
}

module.exports = lang
