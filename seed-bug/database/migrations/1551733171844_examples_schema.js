'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExamplesSchema extends Schema {
  up () {
    this.create('examples', (table) => {
      table.increments()
      table.string('foo', 30).notNullable()
      table.string('bar', 30).notNullable()
    })
  }

  down () {
    this.drop('examples')
  }
}

module.exports = ExamplesSchema
