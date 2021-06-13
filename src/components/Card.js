import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import image from '../images/img-7.jpg';
import image2 from '../images/img-6.jpg';
import image3 from '../images/img-5.jpg';

function Card() {
    return (
        <div className="cards">
            <h1>Checkout these epic destinations..</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={image}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle."
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src={image2}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle."
                        label="Adventure"
                        path="/services"
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src={image}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle."
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src={image2}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle."
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                        src={image3}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle."
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
