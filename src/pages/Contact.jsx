import React, { useState, useEffect } from "react";

export default function Contact(){
    useEffect(() => {
        document.title = "Contact"
    }, [])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleChange(e){
        const {name, value} = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        setFormData({
            name: "",
            email: "",
            message: ""
        })

    }

    return (
        <>
            <main className="contact--main">
                <div className="content contact--container">
                    <div className="contact--info">
                        <h2><span className="underline">How</span> can we help you?</h2>
                        <p>
                            Please let us know how we can be of any assistance. <br />
                            Leave your information below and we'll get back to 
                            you as soon as possible.
                        </p>

                        <form id="contact--form" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Name: </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="John Smith" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email: </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="johnsmith@example.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message: </label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    placeholder="Type issue or concern here"
                                    value={formData.message}
                                    onChange={handleChange} 
                                    required
                                ></textarea>
                            </div>
                            <button>SUBMIT</button>
                        </form>
                    </div>

                    <div className="contact--questions">
                        <h2><span className="underline">Frequently</span> asked questions</h2>

                        <h3>How can I charge my devices while on vacation?</h3>
                        <p>Power outlets are 120 volts (the same as in the United States). </p>

                        <h3>Are there any laws or restrictions on alcohol?</h3>
                        <p>
                            Alcohol is not allowed to be served or sold between the hours of 
                            midnight and 9:00 a.m. 
                        </p>

                        <h3>What is the legal drinking age?</h3>
                        <p>
                            The drinking age on Taniti is 18 and the drinking age is not strictly 
                            enforced.
                        </p>

                        <h3>Is English spoken in Taniti?</h3>
                        <p>
                            Many younger Tanitians speak fluent English. Very little English is spoken 
                            in rural areas, especially by the older residents.
                        </p>

                        <h3>What if I get injured on vacation?</h3>
                        <p>
                            There is one hospital and several clinics. The hospital has many multilingual 
                            employees.
                        </p>

                        <h3>How safe is Taniti?</h3>
                        <p>
                            Violent crime is very rare on Taniti, but as tourism increases, there are more 
                            reports of pickpocketing and other petty crimes. 
                        </p>

                        <h3>Are there any times of year that attractions are closed?</h3>
                        <p>
                            Taniti enjoys a large number of national holidays, and many tourist attractions 
                            and restaurants will be closed on holidays, so visitors should plan accordingly.
                        </p>

                        <h3>What currency should I bring?</h3>
                        <p>
                            Taniti uses the U.S. dollar as its currency, but many businesses will also accept 
                            euros and yen. Several banks facilitate currency exchange, and many businesses accept 
                            major credit cards.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}