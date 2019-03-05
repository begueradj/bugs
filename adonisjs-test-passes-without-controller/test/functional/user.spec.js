'use strict'

const { test, trait } = use('Test/Suite')('User')
const Factory = use('Factory')

trait('Test/ApiClient')

test('Route /users responds to GET', async ( { client } ) => {                                                                                 
  const response = await client.get('/users').end()                                                                            
  response.assertStatus(200)                                                                                                                    })

test('Route /users/create responds to GET', async ( { client } ) => {
  const response = await client.get('/users/create').end()                                                                            
  response.assertStatus(200)                                                                                                                    
})

test('Route /users/:id/edit responds to GET', async ( { client } ) => {
  const user = await Factory
	  .model('App/Models/User')
	  .create()
  let id = user.id
  const response = await client.get(`/users/${id}/edit`).end()                                                                            
  response.assertStatus(200)                                                                                                                    
})
