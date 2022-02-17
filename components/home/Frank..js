import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState, useCallback, useEffect } from 'react'
import {OrbitControls} from '@react-three/drei';
import Frankincents05AnimBaked from './Frankincents05AnimBaked';
import styles from '../../styles/pages/home/frank.module.css'


const Frank = () =>{   
    
    
    const useMediaQuery = (width) => {
        const [targetReached, setTargetReached] = useState(false);
      
        const updateTarget = useCallback((e) => {
          if (e.matches) {
            setTargetReached(true);
          } else {
            setTargetReached(false);
          }
        }, []);
      
        useEffect(() => {
          const media = window.matchMedia(`(max-width: ${width}px)`);
          media.addListener(updateTarget);
      
          // Check on mount (callback is not called until a change occurs)
          if (media.matches) {
            setTargetReached(true);
          }
      
          return () => media.removeListener(updateTarget);
        }, []);
      
        return targetReached;
      };
      const isBreakpoint = useMediaQuery(680)
    return (
        <div className={styles.FrankCover}>
    {isBreakpoint?
        <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 20], fov: 20 }}
        style={{height:'350px', width:'350px', background:'none'}}
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
        :
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
            }
        </div>
    )
}

export default Frank