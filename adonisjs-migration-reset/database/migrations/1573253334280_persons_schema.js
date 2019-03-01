'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonsSchema extends Schema {
  up () {
    this.table('persons', (table) => {
      table.dropPrimary()
      table.dropColumn('name')
      table.dropTimestamps()
      table.string('ssn', 30).primary()
      table.string('lname', 30).notNullable()
      table.string('fname', 30).notNullable()
      table.string('country_name', 30).notNullable().references('name').inTable('countries')
    })
  }

  down () {
    this.table('persons', (table) => {
      table.dropPrimary()
      table.dropColumn('ssn')
      table.dropForeign()
      table.dropColumn('country_name')
      table.dropColumns('lname', 'fname')
      table.string('name', 30).primary()
      table.timestamps()
    })
  }
}

module.exports = PersonsSchema
