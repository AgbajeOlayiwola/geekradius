import React, {useState} from 'react'
import ReadBtn from '../../components/readbtn'
import Requetbtn from '../../components/requestbtn'
import Content from '../../components/servcontent/content'
import DisplayContent from '../../components/servcontent/display'
import AudioImg from '../../components/spaces/Audio'
import styles from '../../styles/pages/services/services.module.css'
import {Contcontents}  from '../../components/data/Contentdata'
import MockupsImage from '../../components/commons/mockupsImage'
import Uxuiimage from '../../components/commons/Uxuiimage'
import Calculatecost from '../../components/commons/Calculatecost'
import FlexwrapperSingle from '../../components/layout/FlexwrapperSingle'
import Flexwrapper from '../../components/layout/Flexwrapper'

const AssetsAnimations = () => {
    const [hovered, setHovered] = useState(false)
    const [display, setDisplay] = useState(false)
    const onMouseEnter =()=>{
      setHovered(true)
  }
  const onMouseLeave = () =>{
      setHovered(false)
  }

  const displayStuff =()=>{
        setDisplay(!display)
        
  }
  console.log(display)
  return (
    <div className={styles.serv}>
        <Flexwrapper>
            <div className={styles.servLft}>
                <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
            <div>
                <div className={styles.uiux}>
                <h1>3D Assets & Animations</h1>
                <div onClick={displayStuff}
                    className={styles.dropSvg}>
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="26" viewBox="0 0 47 26">
                <path id="Polygon_3" data-name="Polygon 3" d="M23.5,0,47,26H0Z" transform="translate(47 26) rotate(180)" fill="#fff"/>
                </svg>

                </div>
            </div>
                <div className={display? styles.show:styles.hide}> 
                <DisplayContent displayData={Contcontents}/>
                </div>
                </div>
                <hr  className={hovered? styles.servHr:styles.servHrinitial}/>
                </div>
                <div className={styles.reqDiv}>
                    <p>
                    With our team of multidisciplinary experts, we’ll craft a seamless and gorgeous experience for your product
                    </p>
                </div>
                <Requetbtn/>
            </div>
            <div>
                <Uxuiimage  width='550' height='550'/>
            </div>
            </Flexwrapper>



{/* horizontal slidig components to go down here?÷ */}
 
 {/* slidig components to go up here?÷ */}
        <FlexwrapperSingle display='displayflexStart'>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Lights</h1>
                <p className={styles.subText}>How do you paint with them?</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    Our capabilities for Concepts, Storyboarding and Illustrations, make our processes go by smoothly, our cross functional team works together for stellar visual articulation.
                    </p>
                </div>
                <Requetbtn/>
            </div>
        </FlexwrapperSingle>




        <FlexwrapperSingle display='displayflex'>
            <div className={styles.servLftArchi}>
                <div>
                <h1 className={styles.mainText}>Camera</h1>
                <p className={styles.subText}>It about what you capture with it</p>
                </div>
                <div className={styles.content}>
                    <p>
                    This is where we turn ‘drab to fab” whether created or sourced, the consistency of the execution comes from how the models are interpreted and interpolated.
                   </p>
                </div>
                <div className={styles.reqbtn}>
                <Requetbtn/>
                </div>

            </div>
            </FlexwrapperSingle>


        <Flexwrapper>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Assets</h1>
                <p className={styles.subText}>Dreamy set different bugdet</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    Endless possibilities here as the camera movement is completely virtual and up to the creative process. Leaving tons of room for uniqueness.
                    </p>
                </div>
                <Requetbtn/>
            </div>
        </Flexwrapper>
        <Calculatecost/>
    </div>
  )
}

export default AssetsAnimations