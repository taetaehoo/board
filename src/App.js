import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import QnADetailPage from './pages/QnADetailPage';
import Header from './components/Header';
import CodePage from './pages/CodePage';
import QnaUpdatePage from './pages/QnaUpdatePage';
import CodeDetailPage from './pages/CodeDetailPage';
import CodeUpdatePage from './pages/CodeUpdatePage';

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path='/question' component={MainPage}></Route>
        <Route exact path='/question/add' render={(props) => <WritePage {...props} additionalProp={1} />}></Route>
        <Route exact path='/question/update/:id' component={QnaUpdatePage}></Route>
        <Route path='/question/:Id' component={QnADetailPage}></Route>
        <Route exact path='/codequestion' component={CodePage}></Route>
        <Route exact path='/codequestion/add' render={(props) => <WritePage {...props} additionalProp={2} />}></Route>
        <Route exact path='/codequestion/update/:id' component={CodeUpdatePage}></Route>
        <Route exact path='/codequestion/:Id' component={CodeDetailPage}></Route>
      </Switch>
    </>
  );
}

export default App;
