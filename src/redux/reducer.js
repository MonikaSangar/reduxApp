import types from "./types";

let initial_state = {
    
    myData: [
        {
            id: 1,
            title: "Mobile",
            desc: "Mobile are used ",
            quantity: 0,
        },
        {
            id: 2,
            title: "Watch",
            desc: "A watch is a portable timepiece",
            quantity: 0,
        },
        {
            id: 3,
            title: "Laptop",
            desc: "a small computer that is easy to carry",
            quantity: 0,
        },
    ]
}

export function  incdec (state = initial_state , action){
    switch (action.type) {
        case types.INCREMENT:{
            let data = action.payload.quantity
            let mainArr =[...state.myData]
            console.log(data,"DATA IN REDUCER",state)
            let index=mainArr.findIndex(target=> target.id == action.payload.id)


            console.log(index,"INDEX IN REDUCER",action.payload.id)
            if (index>=0)
            {
                mainArr[index].quantity=data+1
            }
            return {...state,myData:mainArr}
        }
            
        case types.DECREMENT:{
            let data = action.payload.quantity
            let mainArr =[...state.myData]
            console.log(data,"DATA IN REDUCER")
            let index=mainArr.findIndex(target=> target.id == action.payload.id)
            if (index>=0)
            {
                mainArr[index].quantity=data-1
            }
            return {...state,myData:mainArr}
        }
    
        default:
           return {...state}
    }
}