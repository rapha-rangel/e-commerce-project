import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const listSlice = createSlice({
  name: 'list',
  initialState:{
    isLogin:false,
    allCategories:"",
    choiseCategory:"",
    onlyCategory:"",
    choiseProduct:"",
    cartUser:[],
    cepUser:"",
    loading:true,
  },
  reducers: {
    setLoading: (state, action)=>{
      state.loading = action.payload;
    },
    setIsLogin: (state)=>{
      state.isLogin = true;
    },
    setCepUser: (state, action)=>{
      state.cepUser = action.payload;
    },
    setAllCategories: (state, action)=>{
      state.allCategories = action.payload;
    },
    setErroList: (state) => {
      state.allCategories = "";
    },
    setChoiseCategory: (state, action)=>{
      state.choiseCategory = action.payload;
    },
    setChoiseProduct: (state, action)=>{
      state.choiseProduct = action.payload;
    },
    setOnlyCategory: (state, action)=>{
      state.onlyCategory = action.payload;
    },
    setCartUser:(state, action)=>{
      state.cartUser = [...state.cartUser, action.payload];
    },
    setIncreseOrDecreseQuantity:(state, action)=>{
      state.cartUser.splice(action.payload[1], 1, action.payload[0]);
    },
    setDeleteCartUser:(state, action)=>{
      state.cartUser.splice(action.payload, 1,);
    }
  }
})

export const {setOnlyCategory,
              setChoiseCategory,
              setAllCategories,
              setChoiseProduct,
              setIsLogin,
              setCartUser,
              setCepUser,
              setIncreseOrDecreseQuantity,
              setDeleteCartUser,
              setLoading,
              setErroList } = listSlice.actions;
export const getData = (state) => state.list.items;
export default listSlice.reducer;


export function fetchAllCategories() {
  return async (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => {
        console.log(response.data)
        setLoading(true);
        setTimeout(()=>{dispatch(setAllCategories(response.data))},[10000])
        

      })
      .catch((error) => {
        dispatch(setErroList());
      });
  };
}

export function fetchCategory(name) {
  return async (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${name}`)
      .then((response) => {
        console.log(response.data.results)
        setLoading(true);
        dispatch(setOnlyCategory(response.data.results));
      })
      .catch((error) => {
        dispatch(setErroList());
      });
  };
}