import MainPageInformation from '#/modules/MainPageInformation/MainPageInformation';
import NavBar from '#/modules/NavBar/NavBar';
import ResultCounter from '#/modules/ResultCounter/ResultCounter';
import ResultTable from '#/modules/ResultTable/ResultTable';
import { Search } from '#/modules/Search/Search';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const RootRouter: React.FC = () => (
   <BrowserRouter>
      <NavBar />
      <MainPageInformation />
      <Search />
      <ResultCounter />
      <ResultTable />
      <Switch>
         <Route path="/" exact component={() => <a></a>} />

         <Route path="*" component={() => <span>404 Not found</span>} />
      </Switch>
   </BrowserRouter>
);
