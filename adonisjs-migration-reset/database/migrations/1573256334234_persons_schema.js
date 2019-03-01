'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonsSchema extends Schema {
  up () {
    this.create('persons', (table) => {
      table.string('name', 30).notNullable().primary()
      table.timestamps()
    })
  }

  down () {
    this.drop('persons')
  }
}

module.exports = PersonsSchema
