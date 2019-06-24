import React from 'react'
import {showAlertBox} from '../../../lib'
let serverLink = 'https://formula-test-api.herokuapp.com/contact'

const Submit = ({postComment,body,clearForm}) => {
    
    const handlePost=_=>
    {
        postComment(serverLink,body)
        clearForm()
        showAlertBox()
    }

    const handleClick =(e)=>{
        // e.preventDefault()
        (body.email !== '' && body.comment !== '') ? handlePost() : showAlertBox('Fill the form!')
        
    }

    return  <button onClick={(e)=>handleClick(e)}>Submit</button>

}
      
export default Submit
