import React, { useEffect } from "react";

export default function GettingHere(){
    useEffect(() => {
        document.title = "Getting here"
    }, [])

    return (
        <>
            <main className="gettinghere--main">
                <div className="content">
                    <h2><span className="underline">Getting</span> to Taniti</h2>
                    <p>
                        Taniti offers two main avenues 
                        for reaching its stunning shores: by air or by boat. Whether 
                        you prefer the speed and convenience of flying or the scenic 
                        voyage by sea, Taniti is accessible and ready to welcome you.
                    </p>

                    <div className="gettinghere--container">
                        <div className="gettinghere--info">
                            <h3>By air</h3>
                            <p>
                                Taniti is served by a small airport, that can accommodate small 
                                jets and propeller planes. We are in the process of expanding the 
                                airport so larger jets will be able to land on the island within the 
                                next few years. Although our airport is small, it is well-equipped, 
                                with modern amenities to ensure a smooth arrival. The airport features 
                                a duty-free shop, a few small cafes, and a tourist information desk where 
                                you can get maps, brochures, and tips for your stay.
                            </p>
                        </div>

                        <div className="gettinghere--img-plane"></div>
                    </div>

                    <div className="gettinghere--container">
                        <div className="gettinghere--info">
                            <h3>By boat</h3>
                            <p>
                                Taniti is a popular stop for several cruise lines, offering a scenic way to 
                                reach the island. Cruises to Taniti often include multiple Pacific destinations, 
                                allowing you to explore the beauty of the region before arriving at Taniti’s 
                                harbor.
                            </p>
                        </div>

                        <div className="gettinghere--img-cruise"></div>
                    </div>
                </div>
            </main>
        </>
    )
}