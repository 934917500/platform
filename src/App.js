import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import Essay from './pages/essay/index';
import {GlobalStyle } from './style';
import store from './store';

class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyle></GlobalStyle>
                    <Header />
                    <BrowserRouter>
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail' exact component={Detail}></Route>
                            <Route path='/essay-list' exact component={Essay}></Route>
                        </div>
                    </BrowserRouter>
                    <Footer></Footer>
                </div>
            </Provider>
        )
    }
}

export default App;