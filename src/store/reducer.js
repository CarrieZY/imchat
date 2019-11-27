//合并所有reducer，并且返回
import {combineReducers} from 'redux'
import { user } from './userducer'
 
export default combineReducers({user})