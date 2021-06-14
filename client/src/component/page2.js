import React,{useEffect} from 'react'
import { useSelector , useDispatch } from "react-redux";
import actions from "../redux/actions/actions"
import {useParams, withRouter} from 'react-router-dom'


 

export default withRouter(function Page2(){
const usersArr = useSelector((state) => state.user);
const {name} = useParams()
const {age} = useParams()


    return(
      <>
    <div>
        {/* <h1>{name}</h1><h1>{age}</h1> */}
       <h1>my name is {usersArr.users[usersArr.length - 1].name} i am {usersArr.users[usersArr.length - 1].age} years old</h1>
    </div>
</>
    )
})