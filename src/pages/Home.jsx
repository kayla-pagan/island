import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "Home"
    }, [])

    return (
        <>
            <main className="home">
                <div className="content home--container">
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