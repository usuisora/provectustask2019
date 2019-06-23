

export const post = async (e,serverLink,body) =>{
    e.preventDefault()
    let postdata =  await fetch(serverLink, {
        method: 'POST',
        headers : new Headers({
            'Content-Type': 'application/json'
          }),
        body:JSON.stringify(body)
    }).catch(err=>{
        console.log(err)
    })
    
let jsondata = await postdata.json()
console.log(jsondata)
}