import { combineReducers } from 'redux'

import todo from './todoReducer'

const rootReducer = combineReducers({
  todo,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
