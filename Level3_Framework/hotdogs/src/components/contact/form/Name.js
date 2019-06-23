import React from 'react'
const Name = ({name,setName}) => 
        <>
             <label htmlFor="name">Full Name</label>
            <input type="text" name='name' value ={name} onChange={({target:{value}})=>setName(value)} />
        </>

export default Name
