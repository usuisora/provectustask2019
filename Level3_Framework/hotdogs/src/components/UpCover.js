import React from 'react'
import  upCoverImg from '../resources/upCover.jpg'  
import instaLogo from '../resources/instalogo.svg'
const  UpCover = () =>
        <div id="upcover">
                <img src={upCoverImg} alt="upcoverimg"/>
                <div id="insta">
                <a href="https://www.instagram.com/explore/tags/hotdogs/?hl=uk" rel="noopener noreferrer" target="_blank">
                    <div id="instacon">
                        <img src={instaLogo} alt="instalogo"/>
                        <span>#hotdogs</span>   
                    </div>
                  </a>
                 </div>
            </div>

export default UpCover
