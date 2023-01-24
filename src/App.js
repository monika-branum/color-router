
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Colors from './components/Colors/Colors.js';
function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/rbg/:r/:b/g" component{Colors}></Route>
    </Switch>
    </>
  );
}

export default App;
