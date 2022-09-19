import { GETCATEGORIES, GETPRODUCTS, RESETPRODUCTS } from "../types";

const FirebaseReducer = (state, action) => {
  switch (action.type) {
    case GETCATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GETPRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
      case RESETPRODUCTS:
        return{
          ...state,
          products:[]
        }
    default:
      return state;
  }
};

export default FirebaseReducer;
