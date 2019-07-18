import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; 
import DashboardComponent from './components/dashboard/Dashboard';
import ProjectDetailsComponent from './components/projects/ProjectDetails';
import SignInComponent from './components/auth/SignIn';
import SignUpComponent from './components/auth/SignUp';
import CreateProjectComponent from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={DashboardComponent} />
          <Route path='/project/:id' component={ProjectDetailsComponent} />
          <Route path='/signin' component={SignInComponent} />
          <Route path='/signup' component={SignUpComponent} />
          <Route path='/create' component={CreateProjectComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
