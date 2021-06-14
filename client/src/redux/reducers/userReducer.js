import produce from "immer"
import execHandler from './reducerUtils'
import axios from 'axios'

const initialState = { 
 users:[{name: 'sara fremd', age: '31515',city:"bneyBrak" ,email:"sara@gmail.com",phone: '0583283801'}]
}

const user={
    addUserData(state,action){
    debugger
    axios.post('localhost:4000/createUser', action.payload)
    .then(res=>{
         console.log(res)
        //  state.users.push(action.payload)
    })  
    .catch(err=>console.log(err))
    state.users.push(action.payload)
  },
   getAllUsers(state,action){
    debugger  
    axios.get('localhost:4000/getAllUsers', action.payload)
    .then(res=>
    {console.log(res)
    state.users.push(res)}
    )
    .catch(err=>console.log(err))
   }
   
   , initialState
}

export default produce((state , action)=>{
  execHandler(state, action, user)
 }, initialState)