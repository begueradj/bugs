'use strict'

/*
|--------------------------------------------------------------------------
| ExampleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ExampleSeeder {
  async run () {
    const example = await Factory
	  .model('App/Models/Example')
	  .create()
    console.log('examples successfully seeded')
  }
}

module.exports = ExampleSeeder
