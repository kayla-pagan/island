import React from "react";

export default function Restaurants(){
    return (
        <main className="restaurants--main">
            <div className="content">
                <h2><span className="underline">Dining</span> in Tanini</h2>
                <p>
                    Taniti offers a handful of selections when it comes to dining.
                    Each of these options cater to various visitors preferences and 
                    tastes.
                </p>

                <div className="restaurants--container">
                    <div className="restaurants--info">
                        <h3>Local</h3>
                        <p>
                            These restaurants are for those looking to explore with 
                            their tastebuds and experience the islands local dishes. 
                            We offer a variety of seafood and rice platters that give 
                            any visitor a true taste of Taniti culture. These meals 
                            celebrate our heritage and include recipes that have been 
                            passed down from generation to generation.
                        </p>
                    </div>
                    <div className="restaurants--seafood"></div>
                </div>

                <div className="restaurants--container">
                    <div className="restaurants--info">
                        <h3>American</h3>
                        <p>
                            Many of our visitors come from America, so some restuarants 
                            decided to offer a handful of American style dishes. If you 
                            prefer to enjoy comfort food at it's finest, these options 
                            might be best for you. All dishes are prepared with a twist 
                            as we feel that it wouldn't be complete with some Taniti flavor.
                        </p>
                    </div>
                    <div className="restaurants--burger"></div>
                </div>

                <div className="restaurants--container">
                    <div className="restaurants--info">
                    <h3>Pan-Asian</h3>
                    <p>
                        For those looking for the taste of Asian cuisine, look no further.
                        Our fusion dishes look to capture that classic Asian flavor and 
                        add a Tanitian touch as well. Enjoy all your favorite classics 
                        like sushi, kimchi, and curry but with some additional hints of 
                        Taniti in between each bite.
                    </p>
                    </div>
                    <div className="restaurants--sushi"></div>
                </div>
            </div>
        </main>
    )
}