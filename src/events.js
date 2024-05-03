import React, { useState, useEffect } from 'react';

const Events = () => {
    let eventString =  ``;
    let [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("src/data/events.xml")
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
            .then(data => {
                console.log(data);
                const eventsCol = data.querySelectorAll("events event");
                console.log(eventsCol);
                const eventsData = Array.from(eventsCol).map((eventObj, index) => {
                    const name = eventObj.querySelector("name").textContent;
                    const location = eventObj.querySelector("location").textContent;
                    const time = eventObj.querySelector("timeObj").textContent;
                    return {
                        id: `event-${index+1}`,
                        name,
                        location,
                        time
                    };
                });
                console.log(eventsData);
                setEvents(eventsData);
            })
    }, []);
    console.log(events)
                    //     eventString += `
                    // <article class="card" id="event-${index+1}">
                    //     <h1>${name}</h1>
                    //     <p class="location">${location}</p>
                    //     <p class="time">${time}</p>
                    // </article>
                    // `;
    return (
        <section id='articles-wrapper'>
            {events.map(event => (
                <article key={event.id} className="card">
                    <h1>{event.name}</h1>
                    <p className="location">{event.location}</p>
                    <p className="time">{event.time}</p>
                </article>
            ))}
        </section>
    );
}

export default Events;