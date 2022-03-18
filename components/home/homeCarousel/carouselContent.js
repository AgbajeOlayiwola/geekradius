import React from "react";
import ServicesCarousel from "./services";

const CarouselCont =()=>{


///working on the Services carousel
    const Carcont =[
            {
            title: 'Design',
            subTitlei: 'Web & App',
            subTitleii: 'Logo & Branding',         
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
            itemsI:[
                {
                    cont:'User Experience',
                    link:'/#'
                },
                {
                    cont:'Websites',
                    link:'/#'
                },
                {
                    cont:'Email',
                    link:'/#'
                },
                {
                    cont:'Mobile Apps',
                    link:'/#'
                }
                ]
            },
            {
                title: 'Development',
                subTitlei: 'Front End',
                subTitleii: 'Back End',         
                items:['User Experience','Websites','Email','Mobile Apps'],
                itemsI:['User Experience','Websites','Email','Mobile Apps']
            },

        {
            title: 'Business Growth',
            subTitlei: 'Web & App',
            subTitleii: 'Logo & Branding',         
            items:['User Experience','Websites','Email','Mobile Apps'],
            itemsI:['User Experience','Websites','Email','Mobile Apps']
        },
    ]
    return(
        <div>
             <ServicesCarousel CarouselContent={Carcont}/>
        </div>
    )
}

export default CarouselCont