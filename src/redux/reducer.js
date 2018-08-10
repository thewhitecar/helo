const initialState={
    id: null,
    username : "",
    password : "",
    profile_pic : ""
}

const GET_USER = "GET_USER";



function reducer(state = initialState, action){
    console.log('REDUCER HIT: Action ->', action );
    switch (action.type) {
        case GET_USER:
            return {id: action.payload.id, username: action.payload.username, profile_pic: action.payload.profile_pic}
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

export default reducer;