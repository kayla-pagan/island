import React from "react";
import snorkling from '../assets/snorkling.jpg'
import ziplining from '../assets/ziplining.jpg'
import arcade from '../assets/arcade.jpg'
import art from '../assets/art.jpg'
import rainforest from '../assets/rainforest.jpg'
import volcano from '../assets/volcano.jpg'


export default function Things(){
    return (
        <>
            <main className="things--main">
                <div className="content">
                    <h2><span className="underline">Attractions</span> in Taniti</h2>
                    <p>
                        Vacation can't get any easier than this. Taniti offers a wide
                        selection of activities that can be enjoyed by thrill-seekers,
                        nature-lovers, and relaxation seekers alike.
                    </p>

                    <div className="things--container">
                        <div className="things--entertainment">
                            <h3>Entertainment</h3>
                            <p>
                                Most people visit Taniti to enjoy the beaches, explore 
                                the rainforest, and to visit the volcano. However, there are 
                                other things to do, including visiting a local history museum, 
                                going on chartered fishing tours, snorkeling, zip-lining in the 
                                rainforest, visiting several pubs, including a microbrewery, 
                                dancing at a new dance club, seeing a movie, taking helicopter 
                                rides, playing at an arcade, visiting art galleries, and bowling. 
                                Also, a nine-hole golf course should be operational by next year. 
                                Many of these activities are located in Merriton Landing, which is 
                                a rapidly developing area on the north side of Yellow Leaf Bay. 
                            </p>
                        </div>

                        <div className="things--sightseeing">
                            <h3>Sightseeing</h3>
                            <p>
                                Most tourists spend most of their time in Taniti City, where they 
                                can admire our native architecture and spend time relaxing on white, 
                                sandy beaches that encircle Yellow Leaf Bay. The island also offers 
                                other sightseeing opportunities that include: scenic boat and bus tours 
                                that showcase the island's natural beauty, advernturous hikes through the 
                                rainforest, and a guided tour to our very own active volcano. For those 
                                looking to explore further, there are also remote trails and hidden coves 
                                that provide a more private experience.
                            </p>
                        </div>
                    </div>

                    <div className="gallery">
                        <img src={snorkling} alt="" />
                        <img src={ziplining} alt="" />
                        <img src={arcade} alt="" />
                        <img src={art} alt="" />
                        <img src={rainforest} alt="" />
                        <img src={volcano} alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}