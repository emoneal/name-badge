import React from 'react'
import BadgeComponent from './BadgeComponent'



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

    const [badges, setBadges] = React.useState([])


    const initState = {
        fName: "",
        lName: "",
        email: "",
        phone: "",
        birthplace: "",
        favoriteFood: "",
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
        setBadges(prevBadgeData =>
            [...prevBadgeData,
            badgeData])
        setBadgeData(initState)
        console.log(badges)
        
    }

    const mapBadge = badges.map((data, index) => {
        return (
            <BadgeComponent
                {...data}
                key={index}
            />

        )
    })

    return (
        <>
            <div className="form--container">
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
            {mapBadge}
        </>
    )
}