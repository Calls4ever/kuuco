const initialState ={

}

const authReducer =(state = initialState, action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':return {...state, currentUser: action.payload.user}
        default : return state
    }
    
}

export default authReducer