export const initialState = {
    basket: [],
    user:null,
};

function reducer(state, action){
    switch(action.type){
        case `ADD_TO_BASKET`:
            return{
                ...state,
                basket: [...state.basket, action.item],
            }
          
       

        case `REMOVE_FROM_BASKET`:
            let newBasket = [...state.basket];

            // here we check to see if product exists in basket
            const index = state.basket.findIndex((basketItem)=> basketItem.id ===action.id);
            if (index >=0){
                newBasket.splice(index, 1);
                
                // item exists in basket, remove it
            } else {
    
            }
            return{...state, basket: newBasket};
        default:
            return state;
    }
}

export default reducer;