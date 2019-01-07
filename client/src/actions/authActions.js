import {GET_ERRORS} from './types'
import {SET_CURRENT_USER} from './types'

//Register user
export const registerUser = userData =>dispatch=>{
    dispatch({
        type: SET_CURRENT_USER,
        payload:userData
    })
}