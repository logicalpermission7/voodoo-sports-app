import React from 'react';




function TeamDetails({title,content}){
    return(
        <div className='info-preview-team'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default TeamDetails;