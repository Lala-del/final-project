

const initialState ={
    first_name: null,
    last_name: null,
    email: null,
    id: null,
    token:  localStorage.getItem("token")
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOADED":
        case "SIGN_IN":
        case "SIGN_UP" :
        case "USER_LOADED":
            const user =action.token;
            console.log(action.token)
            return {
                ...initialState,
                token: user,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                id: user.id,
            };
        case "SIGN_OUT":
            localStorage.removeItem("token");
            return {
                token: null,
                first_name: null,
                last_name: null,
                email: null,
                id: null
            }
        default: return state;
    }
};

export default authReducer;