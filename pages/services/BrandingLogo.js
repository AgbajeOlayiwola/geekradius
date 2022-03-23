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

const BrandingLogo = () => {
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
                <h1>Branding & Logo</h1>
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




            <div>
                <h1>Samples</h1>
                <AudioImg  width='450' height='450'/>
            </div>
    
{/* horizontal slidig components to go down here?÷ */}
 
 {/* slidig components to go up here?÷ */}
        <FlexwrapperSingle display='displayflexStart'>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Voices</h1>
                <p className={styles.subText}>Your positioning determines a lot</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    There’s no template to create a logo or a brand style guide because your uniqueness is a factor we’ll always leverage to bring your truth to life.
                  </p>
                </div>
                <Requetbtn/>
            </div>
        </FlexwrapperSingle>




        <FlexwrapperSingle display='displayflex'>
            <div className={styles.servLftArchi}>
                <div>
                <h1 className={styles.mainText}>Vision</h1>
                <p className={styles.subText}>Articulate, Reach & Converse</p>
                </div>
                <div className={styles.content}>
                    <p>
                    Your understanding of the complexities of this generation will determine how well you navigate through business complications. Creating a unique position that allows your business to thrive. We’ll guide you through bringing out the best of you.
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
                <h1 className={styles.mainText}>Visuals</h1>
                <p className={styles.subText}>Stock images alone, won’t cut it</p>
                </div>
                <div>
                    <p className={styles.contentProcess}>
                    Your brand essence has to speak through every piece of collateral that you choose to represent you. The more attention that’s put into them, the more unique presence your brand has to offer. We’ll create unique photos and/or illustrations to suit you.
                    </p>
                </div>
                <Requetbtn/>
            </div>
        </Flexwrapper>
        <Calculatecost/>
    </div>
  )
}

export default BrandingLogo