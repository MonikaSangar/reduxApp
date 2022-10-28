import types from "./types";

export function increment(data){
    console.log(data,"DATA IN ACTIONS")
    return{
        type:types.INCREMENT,
        payload: data
    }

}

export function decrement(data){
    return{
        type:types.DECREMENT,
        payload: data
    }

}