import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import ImgTV  from '../images/tab-tv.png';
import ImgTablet  from '../images/tab-tablet.png';
import ImgMacbook  from '../images/tab-macbook.png';
// Media Query
import { generateMedia } from "styled-media-query";

function TabContentTwo() {
    return (   
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5rem'}}>Watch TV shows and movies anytime, anywhere - personalized for you.</span>
                    <Button className="btn">try it now</Button>
                </div>
                {/* Tab Botton Content */}
                <div className="tab-bottom-content">
                    <div>
                        <img src={ImgTV} alt="" style={{width: '18.75rem'}} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray players and more.</p>
                    </div>
                    {/* Tablet Botton Content */}
                    <div>
                        <img src={ImgTablet} alt="" style={{width: '18.75rem', paddingTop: '0.625rem'}} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray players and more.</p>
                    </div>
                    {/* Macbook Botton Content */}
                    <div>
                        <img src={ImgMacbook} alt="" style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray players and more.</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    );
}

export default TabContentTwo;

// Media Query
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '900px'
}) 

// Main Tab Content Container
const TabContainer = styled.div`
    bacground: var(--main-deep-dark);

    .tab-contnet {
        margin: 0 15%
    }

    // Tab Top Content
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        ${customMedia.lessThan('smDesktop')`
            grid-template-columns: repeat(2, 1fr);
        `}
        ${customMedia.lessThan('tablet')`
            grid-column: 1 / -1 ;
            text-align: center;
            row-gap: 1.5rem;
        `}
    }

    span {
        grid-column: 1 / 8;
        ${customMedia.lessThan('tablet')`
            grid-template-columns: 1fr;
            font-size: 1.5rem;
        `}
    }

    .btn {
        margin: 0 1.25rem 1.25rem;
        grid-column: 10 / 12;
        ${customMedia.lessThan('tablet')`
            grid-template-columns: 1fr;
            margin-left: 30%;
            margin-right: 30%;
        `}
    }

    img {
        width: 100%;
    }

    // Tab Bottom Content
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
        ${customMedia.lessThan('tablet')`
            grid-template-columns: 1fr;
        `}
    }

    h3 {
        margin: 0.5rem, 0; 
    }

    p {
        color: var(--main-grey);
    }
`;