import React, { useState } from 'react'
import '../styles/Create.scss'
import axios from 'axios'
const Create = () => {
 const [name, setName]=  useState("")
 const [email, setEmail]=  useState("")
  const header = {"access-control-allow-Origin": "*"};
 const submitHandle=()=>{
    console.log('clicked')
     axios.post(
         "https://64fab2c9cb9c00518f7a19ea.mockapi.io/crudapp", {
           name: name,
           email: email, 
           header,
      }
     )
 }
  return (
    <>

      <div className="create">

        <div className="box">

          <p className='logoCreate'>Create</p>


          <form >

            <div className="name">
              <p>Name</p>
              <input required type="text" name="" id="" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="email">
              <p>password</p>
              <input required type="email" name="" id="" placeholder='Enter your email'  onChange={(e)=>setEmail(e.target.value)}/>
            </div>

             {name}
             {email}

            <div className='btn' onClick={submitHandle}>
              Submit
            </div>
          </form>
        </div>

      </div>





    </>
  )
}

export default Create