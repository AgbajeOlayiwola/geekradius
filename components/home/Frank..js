import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState, useEffect } from 'react'
import {OrbitControls} from '@react-three/drei';
import Frankincents05AnimBaked from './Frankincents05AnimBaked';
import styles from '../../styles/pages/home/frank.module.css'


const Frank = () =>{        
    return (
        <div>
        <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 20], fov: 20 }}
        style={{height:'650px', width:'650px', background:'none'}}
        >

        <Suspense fallback={null}>
 
            <Frankincents05AnimBaked/>
 <OrbitControls
                minPolarAngle={Math.PI / 2} 
                maxPolarAngle={Math.PI / 2} 
                enableZoom={false} 
                enablePan={Math.PI / 2} />
            </Suspense>

        </Canvas>
        </div>
    )
}

export default Frank