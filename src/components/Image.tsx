import React from "react";
import imageArr from '../images'
import { ItemTypes } from '../Constants'
import { useDrag } from 'react-dnd'

interface Image {
    index: number
}

export default function Image(props: Image){

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.IMAGE,
        collect: (monitor) => ({
            isDragging : !!monitor.isDragging()
        })
    }))
    return (
        <div ref = {drag}
                style = {{
                    opacity: isDragging ? 0.5 : 1,
                    cursor: 'move'
                }}>
            <img src={imageArr[props.index].path}
                    style ={{
                        width: '5em',
                        height: '4em'
                    }}/>
        </div>
    )
}