import React,{useState,useEffect} from 'react'
import LogoCover from './home/LogoCover';
import Pads from './home/Pads'
import {getJson} from '../API'
import { filterByExpiration  } from '../lib'




function Home (){

    const [padsURL, setPadsURL] = useState([]);

      
          useEffect(() => {
            const fetchImages =  async () =>{
                let pads = await getJson('https://formula-test-api.herokuapp.com/menu')
                let filteredPads = await filterByExpiration(pads);
                        console.log('Alive pads: ',filteredPads)
                        setPadsURL(filteredPads)
                }
             fetchImages()
          }, [])
    return  <>
                <LogoCover/>
                <Pads padsURL={padsURL}  />
            </>
}



export default Home
