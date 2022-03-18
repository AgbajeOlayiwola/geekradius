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

const UXUI = () => {
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
                <h1>UX/UI</h1>
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



    <Flexwrapper>
            <div>
                <h1>Samples</h1>
                <AudioImg  width='450' height='450'/>
            </div>
    </Flexwrapper>
{/* horizontal slidig components to go down here?÷ */}
 
 {/* slidig components to go up here?÷ */}
        <FlexwrapperSingle display='displayflexStart'>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Process</h1>
                <p className={styles.subText}>Framework For The Right Ocassion</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    We have enough design experience with Human Centered Design frameworks like Design Thinking to know when and where they should be applied. We prioritise your business goals and limitations to create your unique solution.</p>
                </div>
                <Requetbtn/>
            </div>
        </FlexwrapperSingle>




        <FlexwrapperSingle display='displayflex'>
            <div className={styles.servLftArchi}>
                <div>
                <h1 className={styles.mainText}>Architecture</h1>
                <p className={styles.subText}>We’ll organize everything like it’s spring</p>
                </div>
                <div className={styles.content}>
                    <p>
                        Your information architecture defines your user’s experience. The effort put into your content could make or break your SEO rank which could in turn reflect on your customer’s journey
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
                <h1 className={styles.mainText}>Mockups</h1>
                <p className={styles.subText}>Visual stimulation for you faceholes</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    Our multidisciplinary team of experts are mutually skilled in graphic design. Hence, our team has an easy time creating strong options for your team to debate over.</p>
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

export default UXUI