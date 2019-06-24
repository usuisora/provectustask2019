import React from 'react'

const Email = ({email,setEmail}) => 
        <>
        <label htmlFor="email">E-mail</label>
         <input required type="text" name='email'  value ={email} onChange={({target:{value}})=>setEmail(value)}  />
        </>


export default Email
