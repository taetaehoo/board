import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import QnADetailPage from './pages/QnADetailPage';
import WritePage from './pages/writePage';

function App() {
  return (
    <Switch>
       <Route exact path='/' component={MainPage}></Route>
       <Route exact path='/qna/write' component={WritePage}></Route>
       <Route path='/qna/detail/:id' component={QnADetailPage}></Route>
    </Switch>
  );
}

export default App;
