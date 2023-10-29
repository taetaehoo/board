import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import QnADetailPage from './pages/QnADetailPage';

function App() {
  return (
    <Switch>
      <Route path='/qna/detail/:id' component={QnADetailPage}></Route>
      <Route path='/' component={MainPage}></Route>
    </Switch>
  );
}

export default App;
