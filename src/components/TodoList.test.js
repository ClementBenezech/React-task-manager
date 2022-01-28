import {render, screen} from '@testing-library/react'
import TodoList from './TodoList'
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { initialState } from '../constants/constants'


//Initializing a 'fake' store using redux-mock-store
const mockStore = configureStore([])

describe('The todo list elements are present', ()=> {

    //Declaring variables. 
    let store;
    let component;

    //Initializing the store with initialState, that contains a sample state for the app
    /*beforeEach(() => {*/ // We could use this if we wanted the state to be initialized before each test
      store = mockStore(
        initialState
      );
    /*});*/

    //We render the component wrapped inside a provider, which will provide the mock store. 
    component = renderer.create(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    //Getting the number of children of the todo list element.
    const tasksInRender = component.toJSON().children.filter(child => child.props.className === 'todo__tasks')[0].children

    it('should display the todolist', () => {
        //We check that the todo list element exists in the rendered component. 
        expect(component.toJSON().props.className).toContain('todo')
    })

    it('should have the right number of items', () => {
        //Checking that we have the same number of elements in the rendered component and in the initial mockstate
        expect(tasksInRender.length).toEqual(initialState.todoTasksList.length) 
    })

    it('The items should be of the right type', () => {
        //Checking if each child of the task list is, indeed,  a task.
        tasksInRender.map(task => {
          expect(task.props.className).toContain('todo__task') 
        })
    })
    
    it('The tasks should have some content', () => {
      //Checking if each child of the task list contains 3 children()
      tasksInRender.map(task => {
        console.log(task.children[1].children[0])
        expect(task.children.length).toEqual(3)
        //Checking if the icon (<i> tag) is present
        expect(task.children[0].type).toBe('i')
        //Checking if the task title is not empty
        expect(task.children[1].children[0].length).not.toEqual(0)
      })
  })
})


    /*console.log(component.toJSON())*/
    /*console.log(tasksInRender)*/
    /*console.log(task)*/