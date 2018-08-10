const initialState={
    id: null,
    username : "",
    password : "",
    profile_pic : ""
}

const GET_USER = "GET_USER";
const RETURN_TO_DEFAULT = "RETURN_TO_DEFAULT"


function reducer(state = initialState, action){
    console.log('REDUCER HIT: Action ->', action );
    switch (action.type) {
        case GET_USER:
            return {id: action.payload.id, username: action.payload.username, profile_pic: action.payload.profile_pic}
        case RETURN_TO_DEFAULT:
            return state
        default: 
            return state
    }
} 

export function getUser(id, username, profile_pic){
    return {
        type: GET_USER,
        payload: {id, username, profile_pic}
        }
}

export function returnToDefault(){
    return {
        type: RETURN_TO_DEFAULT,
        payload: initialState
        }
}

export default reducer;