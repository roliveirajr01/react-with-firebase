import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import {database} from '../../firebase'
import './TinderCard.css'
const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect( () => {
        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => (
           setPeople(snapshot.docs.map(doc => doc.data()))
        ));
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div>
            <div className="tinderCards_cardsContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}>
                    <div
                    style={{backgroundImage: `url(${person.url})`}}
                    className="card">
                        <h3>{person.name}</h3>
                        <span>{person.size}</span>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards