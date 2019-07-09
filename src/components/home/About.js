import React from 'react'
import styled from 'styled-components'
import Section from '../globals/Section'
import Title from '../globals/Title'
import aboutImg from '../../images/aboutBcg.jpeg'
import { setRem, setBorder, setColor, setLetterSpacing, media } from '../../styles'
import { PrimaryBtn } from '../globals/Buttons'


const About = () => {
    return (
        <Section>
            <AboutCenter>
                <div className="about-img">
                    <img src={aboutImg} alt="about us" />
                </div>
                <div className="about-info">
                    <Title title="about us"/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Praesentium, harum maiores nesciunt tenetur fugit tempore, 
                    labore reiciendis earum suscipit a dolorem iusto minima 
                    doloribus impedit maxime corporis ducimus repudiandae eos.
                    </p>
                    <PrimaryBtn>Read More</PrimaryBtn>
                </div>
            </AboutCenter>
        </Section>
    )
}

const AboutCenter = styled.div`
    .about-img, 
    .about-info {
        padding: ${setRem(30)}
    }

    .about-img {
        img {
            width: 100%;
            display: block;
            ${setBorder({width: setRem(6), color: setColor.primaryColor})}
        }
    }

    .about-info {
        p {
            ${setLetterSpacing(3)}
        }
    }

    width: 90vw;
    margin: 0 auto;
    ${media.desktop`
        width: 100vw;
        max-width: 1170px;
        display:grid;
        grid-template-columns: 1fr 1fr; 
        grid-column-gap: ${setRem(32)};
        .about-img {
            align-self: center;
        }
        .about-info {
            p {
                width: 80%;
            }
        }
    
    `}
`

export default About
