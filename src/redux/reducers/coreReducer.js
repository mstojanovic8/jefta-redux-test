import { REGISTER_USER, LOGOUT } from '../actions';

const initialState = {
  registrationForm: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    prefix: null,
  },
  isRegistered: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { 
        ...state,
        registrationForm: {
          ...action.payload 
        },
        isRegistered: true
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
