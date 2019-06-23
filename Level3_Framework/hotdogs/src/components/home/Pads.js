import React from 'react'
import doublePad2 from '../../resources/doublePad2.jpg'
import doublePad3 from '../../resources/doublePad3.jpg'


const Pads  = ({padsURL}) => 
<div id="doublePads">
                {[...padsURL,doublePad2,doublePad3].map( url => 
                <img className ='doublePad'  src={url} alt='pad'/>
                )}
        </div>

export default Pads






        
        {/* <div className="textPad "  id='pad1'>
            
                <div className='dashCon'>
                        <div className="dash">—</div>
                </div>
                    <div className="textPadCon">
                         <div className="padHeader">Gormet All Beef Hotdogs</div>
                         <div className='padArticle'>Praesent commodo cursus magna, vel scelerisque nisl consectetur  et. 
                             Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>
                    </div>
            
           
        </div>
        <img src={pad2} alt="" className="pad " id='pad2'/>
        <img src={pad3} alt="" className="pad"  id='pad3'/>
        <div className="textPad"  id='pad4'>
                <div className='dashCon'>
                        <div className="dash">—</div>
                </div>

            <div className="textPadCon" id='pad4'>
                <div className="padHeader">Vegan Hotdogs</div>
                <div className='padArticle'>Praesent commodo cursus magna, vel scelerisque nisl consectetur  et. 
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>
            </div>
        </div>  
            <div className="textPad "  id='pad5'>
                <div className='dashCon'>
                        <div className="dash">—</div>
                </div>
                
                 <div className="textPadCon">
                    <div className="padHeader">Vegitarian Hotdogs</div>
                    <div className='padArticle'>Praesent commodo cursus magna, vel scelerisque nisl consectetur  et. 
                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</div>
                </div>
            </div>  
        <img src={pad6} alt="" className="pad"  id='pad6'/> */}