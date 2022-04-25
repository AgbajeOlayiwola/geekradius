import React from 'react'
import { useRouter } from 'next/router'
import AssetsAnimations from './AssetsAnimations'
import BrandingLogo from './BrandingLogo'
import Illustrations from './Illustrations'
import UXUI from './UXUI'
import VideoAnimation from './VideoAnimation'
import styles from '../../styles/pages/services/services.module.css'

const Index = () => {
  const router = useRouter()


  const route = router.pathname;
  switch (route) {
    
    case "/services":
      return <div className={styles.cover}><div className={styles.coverinner}><UXUI/></div></div>;
    case "/services/BrandingLogo":
      return <div className={styles.cover}><div className={styles.coverinner}><BrandingLogo/></div></div>;
    case "/services/VideoAnimation":
      return <div className={styles.cover}><div className={styles.coverinner}><VideoAnimation/></div></div>;
      case "/services/Illustrations":
      return <div className={styles.cover}><div className={styles.coverinner}><Illustrations/></div></div>;
      case "/services/AssetsAnimations":
      return <div className={styles.cover}><div className={styles.coverinner}><AssetsAnimations/></div></div>;
  }
}

export default Index