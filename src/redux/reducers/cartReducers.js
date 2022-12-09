const INITIALSTATE = {
    carts: []
};


export const cartreducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":

        const IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);

        if(IteamIndex >= 0){
            state.carts[IteamIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }

           

            case "SET_PRODUCTS":
              return { ...state, products: action.payload };
            

            
              case "SORT_PRODUCTS":
                console.log(action.payload);
                return { ...state,
                    
                     products: action.payload.sort((a,b)=>(a.price > b.price ? 1 : -1))
                     };
              default:
                return state;

        
        
    }
}