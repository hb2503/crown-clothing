import React from 'react';
import './homepage.styles.css'

export const Homepage=()=>{
    return(
        <div class="homepage">
            <div class="directory-menu">
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">HATS</h1>
                        <span class="subtitle">Shop Now</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">JACKETS</h1>
                        <span class="subtitle">Shop Now</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">SNEAKERS</h1>
                        <span class="subtitle">Shop Now</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">MENS</h1>
                        <span class="subtitle">Shop Now</span>
                    </div>
                </div>
                <div class="menu-item">
                    <div class="content">
                        <h1 class="title">WOMENS</h1>
                        <span class="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
}