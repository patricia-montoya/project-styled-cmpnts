import React from 'react'
import Hero from '../globals/Hero'
import Banner from '../globals/Banner'
import { PrimaryBtn } from '../globals/Buttons'
import homeImg from '../../images/homeBcg.jpeg'



const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner 
                greeting="Welcome to" 
                title="BeachWalk Resort"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ab rem tempora modi repudiandae, quos molestiae.">

                <PrimaryBtn t="1rem">View Details</PrimaryBtn>
                {/* <PrimaryBtn as="a" href="http://www.google.com">View Details</PrimaryBtn> */}
            </Banner>
        </Hero>
    )
}

export default Header