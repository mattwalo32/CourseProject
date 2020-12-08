import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const style = {
    border: '1px solid gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};

export const Card = ({ id, text, index, moveCard }) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover(item, monitor) {
            if (!ref.current)
                return;
            
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex)
                return;

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY)
                return;

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
                return;

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD, id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (<div ref={ref} style={{ ...style, opacity }}>
			    {text}
	        </div>);
};
