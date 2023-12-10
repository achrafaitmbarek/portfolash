import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()
    const Links = [
        {
            link: 'https://mediaexperts.ma/'
        },
        {
            link: 'https://drive.google.com/file/d/1Cf4fcnm5_t4qRhDCneWunLCSsCJBFhah/view?usp=sharing'
        }
    ]
    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                <p>
                    Hello! I'm Achraf. I'm a Front-end engineer from <a
                        target={'_blank'} rel={'noreferrer'} href={Links[0].link}>MediaExperts.</a>
                    My interests are in Front End Engineering, I
                    like to create beautiful and powerful
                    products with delightful user experiences,
                    building reusable components that meet
                    specific requirements...<br />
                    Stop ! I still don't know if it's "front-end", "frontend, or "front end", and at this point I'm too afraid to ask. <br />
                    <a
                        target={'_blank'} rel={'noreferrer'} href={Links[1].link}>Resume.</a>
                </p>
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}