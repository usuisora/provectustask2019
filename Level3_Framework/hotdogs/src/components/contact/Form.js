import React, {useState} from 'react'
import Name from './form/Name';
import Email from './form/Email';
import Submit from './form/Submit';
import Comment from './form/Comment';
import {post} from '../../API'



function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

   const clearForm = () =>{
       setComment(''); setName('');setEmail('')
                    alert('Comment was sended')
   }

   let body = { name, email,comment};
 
    return (
           <form>
                <Name name={name} setName={setName}/>
                <Email email={email} setEmail={setEmail}/>
                <Comment comment={comment} setComment={setComment}/>
                <Submit postComment={post} clearForm={clearForm}  body={body} />
          </form>
    )
}

export default Form
