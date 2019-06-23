import React,{useState} from 'react'

import LogoCover from './home/LogoCover';
import Pads from './home/Pads'
import Footer from './Footer'
function Home (){
    const [src,setSrc] = useState('')

    const getImage =  async() =>{
        let data = await fetch('https://formula-test-api.herokuapp.com/menu')
        let res = await data.json()
        console.log(res)
        setSrc(res[0].backgroundURL)

     }
     getImage();

    return <>
            <LogoCover/>
            <Pads src={src}/>
        </>
}



export default Home
