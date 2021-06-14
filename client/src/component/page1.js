import React,{useRef, useState} from 'react'
import { useSelector , useDispatch } from "react-redux";
import actions from "../redux/actions/actions"
import { Redirect } from 'react-router'


export default function Page1(){

  const dispatch = useDispatch();

  const [isEmpty,setIsEmpty] = useState(false)
  const [isFull,setIsFull] = useState(false)


  const nameRef = useRef()
  const ageRef = useRef()
  const cityRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()


  function formSubmit(event){
    debugger
    dispatch(actions.addUserData({name:nameRef.current.value, age:ageRef.current.value,city:cityRef.current.value,email:emailRef.current.value,phone:phoneRef.current.value}))
    if(nameRef.current.value&&ageRef.current.value&&cityRef.current.value&&emailRef.current.value&&phoneRef.current.value)
    setIsFull(true)
    else{
      setIsEmpty(true)
      event.preventDefault()
    }
  }
  
  //  const urlToPage2 = `/page2/${nameRef.current.value}/${ageRef.current.value}/,${cityRef.current.value}/,${emailRef.current.value}/,${phoneRef.current.value}`


  // if(isFull)
  // return <Redirect to={urlToPage2}></Redirect>
  // if(isEmpty)
  // return <Redirect to={{ pathname:"/page1", state:{flash: 'You sent an empty field please enter a value'}}}></Redirect>

    return(
      <div>
      <h3>page 1</h3>
      <form style={{border: '1px solid'}} onSubmit={(e)=>formSubmit(e)}>
        <label>enter full name</label>
        <input ref={nameRef} ></input><br/>
        <label >enter age</label>
        <input ref={ageRef} ></input><br/>
        <label>enter city</label>
        <input ref={cityRef} ></input><br/>
        <label>enter email</label>
        <input ref={emailRef} ></input><br/>
        <label>enter phone</label>
        <input ref={phoneRef} ></input><br/>
        <input type='submit'></input>
      </form>
      </div>

    )
}