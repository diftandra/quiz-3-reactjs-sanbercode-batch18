import React, {useContext} from 'react'
import {LoginContext} from "./logincontext";
import './public/css/style.css'


function Login(){
    const [login, setLogin, input, setInput] = useContext(LoginContext) 
    
    const handleSubmit = (event) =>{
        event.preventDefault()
    
        let username = input.username
        let password = input.password
    
        if (login.username == username && login.password == password){       
              setLogin({enableEdit : true,logout : true})
              alert("Success");
        }
        else {
            setInput({username : '',password : '',enableEdit : false, logout:false})
            alert("Password Atau Username Salah");
        }
    
    }

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
    
        switch (typeOfInput){
          case "username":
          {
            setInput({...input, username: event.target.value});
            break
          }
          case "password":
          {
            setInput({...input, password: event.target.value});
            break
          }
        default:
          {break;}
        }
      }

    return(
        <>
            <div class = "logbox">
                <div class ='loginform'>
                    <h2>Login</h2>
                </div>
                <form class='dataform' onSubmit={handleSubmit}>
                    <label style={{paddingTop:'13px'}}>
                        Username
                    </label>
                    <input class="inpt" type="text" required name="username" value={input.title} onChange={handleChange}/>
                    <div class="inptborder"></div>
                    <label style={{paddingTop:'13px'}}>
                        Password
                    </label>
                    <input class="inpt" type="password" required name="password" value={input.title} onChange={handleChange}/>
                    <div class="inptborder"></div>
                    <br/>
                    <br/>
                    <br/>
                    <button style={{alignSelf: "center"}}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login