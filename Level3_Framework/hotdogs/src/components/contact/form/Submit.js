import React from 'react'
let serverLink = 'https://formula-test-api.herokuapp.com/contact'

const Submit = ({postComment,body,clearForm}) => 
         <button onClick={(e)=>postComment(e,serverLink,body)
                                                        .then(()=>clearForm())}>Submit</button>

export default Submit
