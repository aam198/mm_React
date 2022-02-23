import logo from './logo.svg';
import './App.css';
import { Auth } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'

function checkUser(){
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut(){
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from Auth Version</h1>
      
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
        
      </header>
    </div>
  );
}

export default App;
