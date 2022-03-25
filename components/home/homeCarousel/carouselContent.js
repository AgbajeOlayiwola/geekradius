import React from "react";
import ServicesCarousel from "./services";

const CarouselCont =()=>{


///working on the Services carousel
    const Carcont =[
            {
            title: 'Design',      
            items:[
                {
                cont:'User Experience',
                link:'/services/UXUI'
                },
                {
                    cont:'Branding and Logo',
                    link:'/services/BrandingLogo'
                },
                {
                    cont:'Vide & Animation',
                    link:'/services/VideoAnimation'
                },
                {
                    cont:'Illustrations',
                    link:'/services/Illustrations'
                },
                {
                    cont:'3D Assets & Animations',
                    link:'/services/AssetsAnimations'
                }
                ],
            
            },
            {
                title: 'Branding',      
                items:[
                    {
                    cont:'Logo',
                    link:'/services/UXUI'
                    },
                    {
                        cont:'Visual Style Guides',
                        link:'/services/BrandingLogo'
                    },
                    {
                        cont:'Brand Book/Guidelines',
                        link:'/services/VideoAnimation'
                    },
                    {
                        cont:'Unique Brand Illustrations',
                        link:'/services/Illustrations'
                    },
                    ],
                
                },

                {
                    title: '3D Assets',      
                    items:[
                        {
                        cont:'Graphcs',
                        link:'/services/UXUI'
                        },
                        {
                            cont:'Videos',
                            link:'/services/BrandingLogo'
                        },
                        {
                            cont:'Animations',
                            link:'/services/VideoAnimation'
                        },
                        {
                            cont:'Augmented Reality',
                            link:'/services/Illustrations'
                        },
                        {
                            cont:'Virtual Reality',
                            link:'/services/AssetsAnimations'
                        }
                        ],
                    
                    },
    ]
    return(
        <div>
             <ServicesCarousel CarouselContent={Carcont}/>
        </div>
    )
}

export default CarouselCont