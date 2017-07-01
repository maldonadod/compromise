import React from 'react'
import TodoItem from './TodoItem'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
const mockStore = configureStore()
const initialState = {}
const goal = {
  _id: "5957d8d8f8f30d9f44060dc5",
  title: "Limpiar el fucking depto",
  created_at: "2017-07-01T17:16:08.338Z",
  user: "593e00a99bb7871eb7ffa477",
  status: false,
  __v: 0
}

describe('<TodoItem />', () => {

  const store = mockStore(initialState)
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Provider store={store}>
        <TodoItem goal={goal} />
      </Provider>
    )
  })

  it('should exist', () => {
    expect(wrapper.find(TodoItem).exists()).toBe(true)
  })
  describe('InputText', () => {
    it('should have one input type text', () => {
      expect(wrapper.find('input[type="text"]').length).toEqual(1)
    })
    it('should default value be goal title', () => {
      expect(wrapper.find('input[type="text"]').props().defaultValue).toEqual(goal.title)
    })
  })

  describe('Checkbox', () => {
    it('should have one input type checkbox', () => {
      expect(wrapper.find('input[type="checkbox"]').length).toEqual(1)
    })
    it('should be unchecked if goal status is false', () => {
      expect(wrapper.find('input[type="checkbox"]').props().checked).toEqual(false)
    })
    it('should be checked if goal status is true', () => {
      goal.status = true
      const wrapper = mount(
        <Provider store={store}>
          <TodoItem goal={goal} />
        </Provider>
      )
      expect(wrapper.find('input[type="checkbox"]').props().checked).toEqual(true)
    })
  })
})
