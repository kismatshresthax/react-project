import React from 'react'



const Display = ({users}) => {
    return (
        <>
         <ul>
            {users ? (
                <li>{users}</li>
            ): (
                <li>Not Authorized</li>
            )}
         </ul>
        </>
    )
}

export default Display;