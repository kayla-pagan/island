import React from "react";

export default function HotelResorts(){
    return (
        <>
            <main className="hotelsresorts--main">
                <div className="content">
                    <h2><span className="underline">Accomodations</span> in Taniti</h2>
                    <p>
                        Taniti offers a diverse range of options for lodging. Whether you 
                        are looking for luxury, comfort, or some budget friendly places to 
                        stay, there's a perfect place for your home away from home.
                    </p>

                    <div className="hotelsresorts--container">
                        <div className="hotelsresorts--info">
                            <h3>Four-Star Resort</h3>
                            <p>
                                Taniti’s four-star resort offers everything a traveler 
                                looking to vacation luxuriously could desire. Located right on 
                                the stunning shores of Yellow Leaf Bay, this resort includess 
                                breathtaking ocean views, private beach access, and white glove service. 
                                The resort also offers a range of activities that include guided snorkeling 
                                tours and yoga classes on the beach. This option is the ideal spot for 
                                those looking to experience the very best that Taniti has to offer.
                            </p>
                        </div>
                        <div className="hotelsresorts--resort"></div>
                    </div>

                    <div className="hotelsresorts--container">
                        <div className="hotelsresorts--info">
                            <h3>Family-Owned Hotels</h3>
                            <p>
                                For a more intimate experience, consider staying at one of Taniti’s 
                                charming family-owned hotels. These smaller establishments are scattered 
                                throughout the island, each offering a unique blend of local hospitality 
                                and comfort. Many of these hotels have been in the same families for 
                                generations, and they pride themselves on providing personalized service 
                                and insider knowledge of the island’s hidden gems. Whether you’re staying in the heart of Taniti City or 
                                in a quieter, rural area, these hotels provide a cozy and welcoming 
                                atmosphere.
                            </p>
                        </div>
                        <div className="hotelsresorts--family-hotel"></div>
                    </div>
                    
                    <div className="hotelsresorts--container">
                        <div className="hotelsresorts--info">
                            <h3>Bed and Breakfast</h3>
                            <p>
                                Taniti’s growing number of bed and breakfasts offer a place that
                                feels just like home, providing a more relaxed experience for travelers. 
                                Mornings begin with breakfast, often featuring local fruits, fresh-baked bread, 
                                and other island specialties. The owners of these establishments are make 
                                themselves available to share their knowledge of the island, recommend 
                                the best places to visit, and even assist with arranging tours and activities. 
                                This option is a wonderful way to experience the warmth and friendliness of 
                                the Tanitian people.
                            </p>
                        </div>
                        <div className="hotelsresorts--bed-and-breakfast"></div>
                    </div>
                    
                </div>
            </main>
        </>
    )
}