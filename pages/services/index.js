import React from 'react'
import { useRouter } from 'next/router'
import AssetsAnimations from './AssetsAnimations'
import BrandingLogo from './BrandingLogo'
import Illustrations from './Illustrations'
import UXUI from './UXUI'
import VideoAnimation from './VideoAnimation'

const Index = () => {
  const router = useRouter()


  const route = router.pathname;
  switch (route) {
    case "/services":
      return <UXUI/>;
    case "/services/BrandingLogo":
      return <BrandingLogo/>;
    case "/services/VideoAnimation":
      return <VideoAnimation/>;
      case "/services/Illustrations":
      return <Illustrations/>;
      case "/services/AssetsAnimations":
      return <AssetsAnimations/>;
  }
}

export default Index