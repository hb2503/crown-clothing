import React from 'react';
import './homepage.styles.css'
import {Directory} from '../../components/directory/directory.components';

export const Homepage=()=>{
    return(
        <div className="homepage">
            <Directory/>
        </div>
    );
}