import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: [
            'Overpass:600',
            'Source Sans Pro:400,700',
            'sans-serif'
        ]
    }
});

import './sass/main.scss';

import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Navtop from 'containers/NavtopContainer';
import Footer from 'components/Footer';

import routes from './routes';
import { store } from './store';
import { theme482 } from './theme';

class App extends Component{
    render(){
        return(
            <Fragment>
                <div className="container">
                    <Navtop />
                    <main className="main">
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                        </Switch>
                    </main>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

ReactDom.render(
    <Provider store = {store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme482}>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('web-page'));
