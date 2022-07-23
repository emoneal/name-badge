import React from 'react'

export default function BadgeComponent(props) {
    
        
    
    
    return( 

        <div className="badge--container-container">
            <div className="badge--container">
                <p>Name: {props.fName} {props.lName}</p>
                <p>Phone: {props.phone}</p>
                <p>Place of Birth: {props.birthplace}</p>
                <p>Email: {props.email}</p>
                <p>Favorite Food: {props.favoriteFood}</p>
                <p>Comments: {props.comments}</p>
            </div>
        </div>

    )            
}
