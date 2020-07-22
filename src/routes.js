import React from 'react';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';

import Home from './pages/New home';
import SearchResult from './pages/SearchResult';
import Detail from './pages/Detail';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/movies'} component={SearchResult} />
                <Route path={'/detail/:id'} component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}