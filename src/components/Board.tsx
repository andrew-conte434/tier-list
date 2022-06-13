import React from "react";
import Tier from "./Tier";
import Image from "./Image";
import tierArr from "../tiers";
import imageArr from '../images';
import BoardTier from "./BoardTier";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function generateTier(index:number){
    return <BoardTier key={index} rank={tierArr[index].rank} index={index}/>
}

function generateImage(index:number){
    return <Image key={index} index={index}/>
}

export default function Board(){

    const tiers = []
    const images = []
    for(let i:number = 0; i < tierArr.length; i++){
        tiers.push(generateTier(i))
    }

    for(let i:number = 0; i < imageArr.length; i++){
        if(!imageArr[i].onTier){
            images.push(generateImage(i))
        }
    }
    return (
        <DndProvider backend={HTML5Backend}>
        <div style = {{
            width: '100%',
            height: '100%',
            display: 'block'
        }}>
            {tiers}
            <div style={{
                width: '100%',
                height: 'fit-content',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {images}
            </div>
            
        </div>
        </DndProvider>
    )
}