import React from "react";
import Image from "./Image";
import tierArr from '../tiers';
import imageArr from '../images';

interface Tier {
    index: number
}

function generateImage(index:number){
    return <Image index={index}/>
}
export default function Tier(props: Tier){
    const images = []
    for(let i:number = 0; i < tierArr[props.index].images.length; i++){
        images.push(generateImage(tierArr[props.index].images[i]))
    }
    return (
        <div style = {{
            width: '75%',
            height: '4em',
            backgroundColor: '#444444',
            border: 'solid black 1px',
            display: 'flex'
        }}>
            <div style = {{
                width: '5em',
                height: '100%',
                backgroundColor: tierArr[props.index].color,
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    width: 'fit-content',
                    margin: '0 auto'
                }}>
                    {tierArr[props.index].rank}
                </div>
            </div>
            <div style = {{
                    height: '100%',
                    display: 'flex'
                }}>
                    {images}
                </div>
        </div>
    )
}