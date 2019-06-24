import React from 'react'

const Comment = ({comment, setComment}) => 
        <>
            <label htmlFor="comment">Comment</label>
            <textarea type="text"  name='comment'  value ={comment} onChange={({target:{value}})=>setComment(value)}  />
        </>

export default Comment
