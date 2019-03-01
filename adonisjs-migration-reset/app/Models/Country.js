'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Country extends Model {
  persons() {
    return this.hasMany('App/Models/Person')
  }
}

module.exports = Country
