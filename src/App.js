

import Card from './components/Card'
import LetsChat from './components/LetsChat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LetsChat}></Route>
          <Route exact path='/chat' component={Card}></Route>
        </Switch>     
      </div>
    </Router>
  );
}

export default App;         
            
     
              
              
              
            
            
          
       
