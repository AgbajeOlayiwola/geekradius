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

const Illustrations = () => {
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
                <h1>Illustrations</h1>
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
                <h1 className={styles.mainText}>Symbols</h1>
                <p className={styles.subText}>Discovery time, story time</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    We begin with a brief, but don’t worry it’s nothing daunting. It could even be a voice note. Our goal here is to get your goals as clearly as possible so we can run our magic.
                    </p>
                </div>
                <Requetbtn/>
            </div>
        </Flexwrapper>




        <Flexwrapper>
            <div className={styles.servLftArchi}>
                <div>
                <h1 className={styles.mainText}>Abstract</h1>
                <p className={styles.subText}>Not to confuse but to intrigue</p>
                </div>
                <div className={styles.content}>
                    <p>
                    Abstract visuals? On-the-nose story telling? We have the tools to butter up your raw concepts and turn them into the refined roasted turkey on thanksgiving dinner.
                    </p>
                </div>
                <div className={styles.reqbtn}>
                <Requetbtn/>
                </div>

            </div>
            </Flexwrapper>


        <Flexwrapper>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Unique</h1>
                <p className={styles.subText}>Storyboard, Sketch, Icon Library</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    We’ll turn them upside down with the beauty of color and symmetry or asymmetry where it calls for. Either way we have a strong sense of composition and balance to create meaningful direction for the animators, video editors or brand style
                    </p>
                </div>
                <Requetbtn/>
            </div>
        </Flexwrapper>
        <Calculatecost/>
    </div>
  )
}

export default Illustrations