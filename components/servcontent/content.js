import React from 'react'
import DisplayContent from './display'

const Content =()=>{

    const contcontents  =[
        {
            subhead: 'UI/UX',
            link:'#'
        },
        {
            subhead: 'Branding & Logo',
            link:'#'
        },
        {
            subhead: 'Concepts & Storyboarding',
            link:'#'
        },
        {
            subhead: 'Video Editing and Animation',
            link:'#'
        },
        {
            subhead: 'Front-end Development',
            link:'#'
        },
        {
            subhead: 'Illustration',
            link:'#'
        },
        {
            subhead: '3D and Graphics',
            link:'#'
        },
    ]

    return(
        <>
        <DisplayContent displayData ={contcontents}/> 
        </>
    )
}

export default Content