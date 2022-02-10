import React from "react";
import ServicesCarousel from "./services";

const CarouselCont =()=>{


///working on the Services carousel
    const Carcont =[
            {
            title: 'Design',
            subTitlei: 'Web & App',
            subTitleii: 'Logo & Branding',         
            items:['User Experience','Websites','Email','Mobile Apps'],
            itemsI:['User Experience','Websites','Email','Mobile Apps']
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