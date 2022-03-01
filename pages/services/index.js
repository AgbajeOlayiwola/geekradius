import React, {useState} from 'react'
import ReadBtn from '../../components/readbtn'
import Requetbtn from '../../components/requestbtn'
import AudioImg from '../../components/spaces/Audio'
import styles from '../../styles/pages/services/services.module.css'

const Services = () => {
    const [hovered, setHovered] = useState(false)
    const onMouseEnter =()=>{
      setHovered(true)
  }
  const onMouseLeave = () =>{
      setHovered(false)
  }
  return (
    <div className={styles.serv}>
        <div className={styles.servux}>
            <div className={styles.servLft}>
                <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                <h1>UX/UI</h1>
                <hr  className={hovered? styles.servHr:null}/>
                </div>
                <div className={styles.reqDiv}>
                    <p>
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



        <div className={styles.servux}>
            <div>
                <h1>SAMPLES</h1>
                <AudioImg  width='450' height='450'/>
            </div>
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



        <div className={styles.servux}>
            <div className={styles.servLft}>
                <div>
                <h1 className={styles.mainText}>Processes</h1>
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




        <div className={styles.servux}>
            <div>
                <AudioImg  width='450' height='450'/>
            </div>
            <div className={styles.servLft}>
            <div>
                <h1 className={styles.mainText}>Architecture</h1>
                <p className={styles.subText}>Framework For The Right Ocassion</p>
                </div>
                <div>
                    <p>
                        lorem ipsum dolor fkjkvxf fgfbz dfwkejvdfn fweadvaszv div
                        Szdjvxhfn fdjehdv efejdgfh dsfhgf dskrejh disuajhf.
                    </p>
                </div>
                <Requetbtn/>

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