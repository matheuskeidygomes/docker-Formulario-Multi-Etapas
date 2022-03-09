const initialState = {
    name: '',
    experience: '',
    email: '',
    github: ''
}

export default function UserInfoReducer(state = initialState, action) {

    switch (action.type) {

        case 'ADD_NAME':
            return { ...state, name: action.payload };

        case 'ADD_EXPERIENCE':
            return { ...state, experience: action.payload };

        case 'ADD_EMAIL':
            return { ...state, email: action.payload };

        case 'ADD_GITHUB':
            return { ...state, github: action.payload };

        default:

            return state;
    }
}

