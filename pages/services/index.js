import React from 'react'
import Requetbtn from '../../components/requestbtn'
import AudioImg from '../../components/spaces/Audio'
import styles from '../../styles/pages/services/services.module.css'

const Services = () => {
  return (
    <div className={styles.serv}>
        <div className={styles.servux}>
            <div className={styles.servLft}>
                <h1>UX/UI</h1>
                <hr/>
                <div>
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
                
            <h1>Jocaro</h1>
                <div>
                    <p>
                        lorem ipsum dolor fkjkvxf fgfbz dfwkejvdfn fweadvaszv div
                        Szdjvxhfn fdjehdv efejdgfh dsfhgf dskrejh disuajhf.
                    </p>
                </div>
                <Requetbtn/>

            </div>
        </div>
    </div>
  )
}

export default Services