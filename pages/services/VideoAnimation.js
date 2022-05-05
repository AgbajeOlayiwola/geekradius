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
import Flexwrapper from '../../components/layout/Flexwrapper'

const VideoAnimation = () => {
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
                <h1>Video & Animation</h1>
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
        <Flexwrapper>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Concepts</h1>
                <p className={styles.subText}>The Future of Global Outreach</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    Evolution comes from awareness and our unique positioning allows us to continue evolving our communication. Our network of creatives have the attention of millions
                   </p>
                </div>
                <Requetbtn/>
            </div>
            <div>
                <MockupsImage width='950' height='950'/>
            </div>
        </Flexwrapper>




        <Flexwrapper orientation={'reverse'}>
            <div className={styles.servLftArchi}>
                <div>
                <h1 className={styles.mainText}>Story</h1>
                <p className={styles.subText}>End To End</p>
                </div>
                <div className={styles.content}>
                    <p>
                    We can create any asset to tell your story right. With green screen, motion capture and object tracking, we have the tools to create high end assets for you
                   </p>
                </div>
                <div className={styles.reqbtn}>
                <Requetbtn/>
                </div>

            </div>
            <div>
                <MockupsImage width='950' height='950'/>
            </div>
            </Flexwrapper>


        <Flexwrapper>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Style</h1>
                <p className={styles.subText}>The right fit for the night drip</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    From concept to lighting, the stylistic choices made when creating a video tells a strong story. From the emotions it can trigger, to the motivation it can deliver. The devil is in the details
                    </p>
                </div>
                <Requetbtn/>
            </div>
            <div>
                <MockupsImage width='950' height='950'/>
            </div>
        </Flexwrapper>
        <Calculatecost/>
    </div>
  )
}

export default VideoAnimation