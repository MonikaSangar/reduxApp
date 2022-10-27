import {createStore} from 'redux';
import { incdec } from './reducer';

const store = createStore(incdec)

export default store;