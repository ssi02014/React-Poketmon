import { createStore } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'; 
import rootReducer from './reducers/RootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;