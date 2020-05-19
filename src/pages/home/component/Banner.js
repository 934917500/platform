import React, { Component } from 'react';
import './canvas_style.css';
import { 
    BannerWrapper,
    Particles
} from '../style';

class Banner extends Component {
    render() {
        return (
            <BannerWrapper className='banner'>
                <Particles id='particles'>
                    <div className="intro">
                        <h2>反校园霸凌互助平台</h2>
                        <p>Anti campus bullying platform</p>
                    </div>
                </Particles>
            </BannerWrapper>
        )
    }
}

export default Banner;