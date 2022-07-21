import React from 'react'

export default function NameBadge() {
    
    const [badgeData, setBadgeData] = React.useState({
        fName: "",
        lName: "",
        phone: "",
        birthplace: "",
        email: "",
        favoriteFood: "",
        comments: ""
    })

    const [badge, setBadge] = React.useState({
        fName: "",
        lName: "",
        phone: "",
        birthplace: "",
        email: "",
        favoriteFood: "",
        comments: ""
    })


    const initState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        placeOfBirth: "",
        food: "",
        comments: ""
    }

    function handleChange(event) {
        const {name, value} = event.target
        setBadgeData(prevBadgeData => ({
            ...prevBadgeData,
            [name]: value
        }))
    }


    function SubmitButton() {
        if (!badgeData.fName || !badgeData.lName || !badgeData.email || !badgeData.phone || !badgeData.birthplace || !badgeData.favoriteFood || !badgeData.comments) {
            return <button className="form--submit-disabled"disabled>Submit</button>
        } else {
            return <button className="form--submit">Submit</button>
        }
    }


    function handleSubmit(event) {
        event.preventDefault()
        setBadge(prevData => {
            return [
            ...prevData,
            badgeData
            ]
        })
        setBadge(initState)
    }

    
    
    return (
        <>
            <div className="form--container">

                <input 
                    type="text" 
                    placeholder="First Name"
                    className="form--input"
                    name="fName"
                    onChange={handleChange}
                    value={badgeData.fName}
                    minLength={3}
                    required                      
                    />
                <input 
                    type="text" 
                    placeholder="Last Name"
                    className="form--input"
                    name="lName"
                    onChange={handleChange}
                    value={badgeData.lName}
                    minLength={3}
                    required                      
                    />
                <input 
                    type="email"
                    placeholder="Email"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={badgeData.email}
                    minLength={3}
                    required                    
                />
                <input 
                    type="number"
                    placeholder="Phone Number"
                    className="form--input"
                    name="phone"
                    onChange={handleChange}
                    value={badgeData.phone}
                    minLength={3}
                    required                    
                />
                <input 
                    type="text" 
                    placeholder="Place of Birth"
                    className="form--input"
                    name="birthplace"
                    onChange={handleChange}
                    value={badgeData.birthplace}
                    minLength={3}
                    required                    
                />
                    <input 
                    type="text" 
                    placeholder="Favorite Food"
                    className="form--input"
                    name="favoriteFood"
                    onChange={handleChange}
                    value={badgeData.favoriteFood}
                    minLength={3}
                    required                    
                />
                <input
                    type="text" 
                    placeholder="Comment"
                    className="form--comments"
                    name="comments"
                    onChange={handleChange}
                    value={badgeData.comments}
                    minLength={3}
                    required                    
                />
                <SubmitButton />

            </div>


            <div className="badge--container">
                <p>Name: {badgeData.fName} {badgeData.lName}</p>
                <p>Phone: {badgeData.phone}</p>
                <p>Place of Birth: {badgeData.birthplace}</p>
                <p>Email: {badgeData.email}</p>
                <p>Favorite Food: {badgeData.favoriteFood}</p>
                <p>Comments: {badgeData.comments}</p>
            </div>
        </>
    )
}