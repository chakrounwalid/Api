
import './App.css';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{margin:'20px'}}>Our Users</h1>
      <UserList/>
    </div>
  );
}

export default App;
