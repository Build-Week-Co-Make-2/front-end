import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialState={

}

const reducer = (state = initialState, action0) => {
  switch (action0.type) {

    return {
      ...state,
    }

    default: return state
  }
}





const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store