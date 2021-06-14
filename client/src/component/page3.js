import React,{ useEffect } from 'react'
import { useSelector , useDispatch } from "react-redux";
import actions from "../redux/actions/actions"


export default function Page3(){

   const usersArr = useSelector((state) => state.user);
   const dispatch = useDispatch()

   useEffect(function(){
        debugger
       dispatch(actions.getAllUsers())
         
      },[])

    return(
      <>
      <h3>page 3</h3>
      <div>
      {usersArr.users.map((item) => (
        <div>
         {item.name}{" "}
         {item.email}
        </div>
       ))} 
    </div>
    </>
    )
}