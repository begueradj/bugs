'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CountriesSchema extends Schema {
  up () {
    this.create('countries', (table) => {
      table.string('name', 30).primary()
      table.integer('population', 10).notNullable().unsigned()      
    })
  }

  down () {
    this.drop('countries')
  }
}

module.exports = CountriesSchema
