import React, { Component } from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component {

    render() {

        //Step 2 : Reducer state & action

        const reducer = (state = 0, action) => {
            switch(action.type){
                case 'ATTACK':
                    return action.payload;
                default:
                    return state;
            }
        } 

        //Step 1 : Create a store  reducer & state 
        const store = createStore(reducer, 'Peace');


        //Step 3 : Subscription 
        store.subscribe(() => {
            console.log('current state => '+store.getState())
        })

        //Step 4 : dispatcher
        store.dispatch({ type : 'ATTACK', payload: 'Iron Man' });
    
        return (
            <div>
                This is test {store.getState()}
            </div>
        );
    }
}

export default ReduxDemo;
