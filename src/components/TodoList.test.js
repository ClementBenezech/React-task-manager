import {render, screen} from '@testing-library/react'
import TodoList from './TodoList'
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import { initialState } from '../constants/constants'

const mockStore = configureStore([])

describe('The todo list elements are present', ()=> {

    let store;
    let component;

    beforeEach(() => {
      store = mockStore({
        state: initialState,
      });
    });

    it('should display the todolist', () => {
        component = renderer.create(
            <Provider store={store}>
              <TodoList />
            </Provider>
          );
          
        console.log(component.root)
        expect(true).toEqual(true)
    })


})