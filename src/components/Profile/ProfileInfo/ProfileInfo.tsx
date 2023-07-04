import React from 'react';
import styled from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img
                    src="https://www.freewebheaders.com/wp-content/gallery/nature-size-800x200/beautiful-river-trees-snow-mountain-clouds-nature-landscape-web-header_size-800x200.jpg"
                    alt="profile-logo"
                />
            </div>
            <div className={styled.descriptionBlock}>Ava + description</div>
        </div>
    );
};

