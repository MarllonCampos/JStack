import { Route, Switch } from 'react-router-dom';
import EditContact from './Pages/EditContact';
import Home from './Pages/Home';
import NewContact from './Pages/NewContact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" exact component={NewContact} />
      <Route path="/edit/:id" exact component={EditContact} />
    </Switch>
  );
}
