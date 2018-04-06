import React from 'react';

export default function Product(props){
    return(
        <div>
            <p>
            Name: {props.name}
            </p>
            <p>
            Price: {props.price}
            </p>
            <p>
            image_url: {props.image}
            </p>
        </div>
    )
}