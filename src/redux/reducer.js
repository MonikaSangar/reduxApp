import types from "./types";

let initial_state = {
    counter : 0 ,
    myData: [
        {
            _id: 1,
            title: "Mobile",
            desc: "Mobile are used for a variety of purposes",
            quantity: 0,
        },
        {
            _id: 2,
            title: "Watch",
            desc: "A watch is a portable timepiece",
            quantity: 1,
        },
        {
            _id: 3,
            title: "Laptop",
            desc: "a small computer that is easy to carry",
            quantity: 2,
        },
    ]
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