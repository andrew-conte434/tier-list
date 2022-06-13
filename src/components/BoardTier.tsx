import React from "react";
import Tier from "./Tier";
import { addImage } from "../editTier";
import {ItemTypes} from '../Constants';
import { useDrop } from "react-dnd";

interface BoardTier {
    rank: string
    index: number
}
export default function BoardTier(props: BoardTier){
    const[{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.IMAGE,
        drop: () => addImage(props.rank, props.index),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }))

    return (
        <div
            ref = {drop}>
            <Tier index={props.index} />
        </div>
    )
}