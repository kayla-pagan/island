import React from "react";
import { useNavigate } from "react-router-dom";
export default function About(){
    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className="about--img"></div>

                <div className="content about--container">
                    <div className="about--info">
                        <h2><span className="underline">Discover</span> our hidden paradise</h2>
                        <p>
                            Taniti is a small, tropical island in the Pacific. 
                            While the island has an area of less than 500 square miles, 
                            the terrain is varied and includes both sandy and rocky beaches, 
                            a small but safe harbor, lush tropical rainforests, and a mountainous 
                            interior that includes a small, active volcano. Taniti has an indigenous 
                            population of about 20,000. Until a recent increase in tourism, most 
                            the Tanitian economy was dominated by fishing or agriculture.
                        </p>
                    </div>

                    <div className="about--extra">
                        <p>Your destination awaits</p>
                        <p>Book a place to stay now</p>
                        <button onClick={() => navigate('/hotelsresorts')}>Explore our accomodations</button>
                    </div>
                </div>
            </main>
        </>
    )
}