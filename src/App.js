import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import List from './components/List';
import Pokemon from './components/Pokemon';
import './scss/main.scss';

function App() {
  return (
    <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={List}/>
                    <Route exact path="/pokemon/:pokemonName" component={Pokemon}/>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </BrowserRouter>
            </>
  );
}

export default App;
