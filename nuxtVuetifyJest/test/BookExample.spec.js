import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import { createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import BookExample from '@/components/BookExample.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('BookExample.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(BookExample, {
      localVue
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
