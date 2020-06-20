import React from 'react';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/detail/:id'} exact component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}