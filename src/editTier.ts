import React from "react";
import tierArr from './tiers'
import imageArr from './images'

export function addImage(rank: string, index: number){
    for(let i:number = 0; i < tierArr.length; i++){
        if(tierArr[index].rank === rank){
            tierArr[index].images.push(index)
            imageArr[index].onTier = true
        }
    }
}