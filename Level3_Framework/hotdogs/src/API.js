

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

export const getJson  = async (link) =>{
    let data = await fetch('https://formula-test-api.herokuapp.com/menu')
    let jsonData = await data.json()
    return jsonData
}
