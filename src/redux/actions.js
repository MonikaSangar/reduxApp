import types from "./types";

export function incremnet(data){
    console.log(data,"DATA IN ACTIONS")
    return{
        type:types.INCREMENT,
        payload: data
    }

}

export function decremnet(data){
    return{
        type:types.DECREMENT,
        payload: data
    }

}