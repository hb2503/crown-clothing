import React from 'react';
import './menu-item.styles.css';

export const MenuItem=(props)=>
{
    
    return(
        <div  className={`${props.sectionlist.size} menu-item` }>
            <div  style={{backgroundImage:`url(${props.sectionlist.imageUrl})`}} className="background-image"></div>
                    <div className="content">
                        <h1  className="title">{props.sectionlist.title}</h1>
                        <span className="subtitle">SHOP NOW</span>
                        
                    </div>
                </div>
    )
}