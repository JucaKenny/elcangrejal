import React, { useReducer } from "react";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import firebase from "../firebase";

import { collection, query, where, onSnapshot } from "firebase/firestore";

//types
import { GETCATEGORIES, GETPRODUCTS, RESETPRODUCTS} from "../types";

const FirebaseState = (props) => {
  const initialState = {
    categories: null,
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const getCategories = () => {
    const q = query(collection(firebase.db, "categories"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const categories = [];
      querySnapshot.forEach((doc) => {
        categories.push(doc.data());
      });

      dispatch({
        type: GETCATEGORIES,
        payload: categories,
      });
    });
  };

  const getProducts = (id) => {
    const q = query(collection(firebase.db, id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push(doc.data());
      });
      if (products.length !== 0) {        
        dispatch({
          type: GETPRODUCTS,
          payload: products,
        });
      }else{
        dispatch({
          type: RESETPRODUCTS,
          
        });
      }
    });
  };
  return (
    <FirebaseContext.Provider
      value={{
        categories: state.categories,
        products: state.products,
        getCategories,
        getProducts,
        firebase,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
