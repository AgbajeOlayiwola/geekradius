import React, {useState} from 'react'
import ReadBtn from '../../components/readbtn'
import Requetbtn from '../../components/requestbtn'
import Content from '../../components/servcontent/content'
import DisplayContent from '../../components/servcontent/display'
import AudioImg from '../../components/spaces/Audio'
import styles from '../../styles/pages/services/services.module.css'
import {Contcontents}  from '../../components/data/Contentdata'

const Services = () => {
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
        <div className={styles.servux}>
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
                <hr  className={hovered? styles.servHr:null}/>
                </div>
                <div className={styles.reqDiv}>
                    <p>
                    With our team of multidisciplinary experts, we’ll craft a seamless and gorgeous experience for your product
                    </p>
                </div>
                <Requetbtn/>
            </div>
            <div>
                <AudioImg  width='450' height='450'/>
            </div>
        </div>



        <div className={styles.servux}>
            <div>
                <h1>SAMPLES</h1>
                <AudioImg  width='450' height='450'/>
            </div>
            {/* slidig components to go down here?÷ */}
            <div className={styles.servLft}>
                
            <h4 className={styles.jocaro}>Jocaro</h4>
                <div className={styles.readDiv}>
                    <p>
                        lorem ipsum dolor fkjkvxf fgfbz dfwkejvdfn fweadvaszv div
                        Szdjvxhfn fdjehdv efejdgfh dsfhgf dskrejh disuajhf.
                    </p>
                </div>
                <ReadBtn/>

            </div>
        </div>
 {/* slidig components to go up here?÷ */}
        <div className={styles.servux}>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Process</h1>
                <p className={styles.subText}>Framework For The Right Ocassion</p>
                </div>
                <div>
                    <p className={styles.content}>
                    We have enough design experience with Human Centered Design frameworks like Design Thinking to know when and where they should be applied. We prioritise your business goals and limitations to create your unique solution.</p>
                </div>
                <Requetbtn/>
            </div>

        </div>




        <div className={styles.servuxArchi}>
            <div className={styles.servLftArchi}>
                <div>
                <h1 className={styles.mainText}>Architecture</h1>
                <p className={styles.subText}>We’ll organize everything like it’s spring</p>
                </div>
                <div>
                    <p className={styles.content}>
                        Your information architecture defines your user’s experience. The effort put into your content could make or break your SEO rank which could in turn reflect on your customer’s journey
                    </p>
                </div>
                <div className={styles.reqbtn}>
                <Requetbtn/>
                </div>

            </div>
        </div>


        <div className={styles.servux}>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Mockups</h1>
                <p className={styles.subText}>Framework For The Right Ocassion</p>
                </div>
                <div>
                    <p className={styles.content}>
                        lorem ipsum dolor fkjkvxf fgfbz dfwkejvdfn fweadvaszv div
                        Szdjvxhfn fdjehdv efejdgfh dsfhgf dskrejh disuajhf.
                        lorem ipsum dolor fkjkvxf fgfbz dfwkejvdfn fweadvaszv div
                        Szdjvxhfn fdjehdv efejdgfh dsfhgf dskrejh disuajhf.
                    </p>
                </div>
                <Requetbtn/>
            </div>
            <div>
                <AudioImg  width='450' height='450'/>
            </div>
        </div>
    </div>
  )
}

export default Services