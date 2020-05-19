import React, { Component, Fragment } from 'react';
import Banner from './component/Banner';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BoomNode
} from './style';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner></Banner>
                <HomeWrapper>
                    <HomeLeft>
                        <BoomNode id='boomNode'>
                            <img src={require('../../static/3.jpg')} alt=""/>
                        </BoomNode>
                    </HomeLeft>
                    <HomeRight></HomeRight>
                </HomeWrapper>
            </Fragment>
            
        )
    }
}

export default Home;