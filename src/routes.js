import React from 'react';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';

import Index from './pages/Index';
import Detail from './pages/Detail';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={Index} />
                <Route path={'/detail/:id'} exact component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}