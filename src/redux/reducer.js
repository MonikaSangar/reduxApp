import types from "./types";

let initial_state = {
    counter : 0 
}

export function  incdec (state = initial_state , action){
    switch (action.type) {
        case types.INCREMENT:{
            let data = action.payload
            console.log(data,"DATA IN REDUCER")
            return{...state,counter: data+1}
        }
            
        case types.DECREMENT:{
            let data = action.payload
            return{...state,counter: data-1}
        }
    
        default:
           return state
    }
}