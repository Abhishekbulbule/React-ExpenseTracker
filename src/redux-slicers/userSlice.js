import { createSlice } from "@reduxjs/toolkit";
import secureLocalStorage from "react-secure-storage"

const userSlice = createSlice({
    name:"user",
    initialState:{name:'', id:'', photo:'', email:'',phone:'',emailVerified:"",lastSignIn:''},
    reducers:{
        
        removeUser:(state,action)=>{
            secureLocalStorage.clear();
            state = {name:'', id:'', photo:'', email:'',phone:'',emailVerified:"",lastSignIn:''};
        },
        getUser : (state, action)=>{        
            state.id = secureLocalStorage.getItem('user')[3];
            state.name = secureLocalStorage.getItem('user')[0].displayName;
            state.photo = secureLocalStorage.getItem('user')[0].photoURL;
            state.email = secureLocalStorage.getItem('user')[0].email;
            state.phone = secureLocalStorage.getItem('user')[0].phoneNumber;
            state.emailVerified = secureLocalStorage.getItem('user')[1];
            state.lastSignIn = secureLocalStorage.getItem('user')[2];
        }
    },
});

export const {getUser,removeUser} = userSlice.actions;
export default userSlice.reducer;