import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()

    return (
        <>
            <main className="home">
                <div className="home--content">
                    <h2>Your perfect island adventure awaits</h2>
                    <p>
                        Explore Taniti's enchanting allure. We promise an unforgettable
                        experience with our stunning beaches, vibrant rainforests, and 
                        a captivating active volcano.
                    </p>
                    <button onClick={() => navigate("/about")}>Discover more about Taniti</button>
                </div>
            </main>
        </>
    )
}