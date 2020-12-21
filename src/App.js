import logo from './logo.svg';
import './App.css';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome!
        </p>
        <p>
          This is a simple react app created using <code>create-react-app</code>
          in the command line. 
          <br>
          </br>
          This app is just a sandbox app to test and play around with deployment workflow.
          The following technologies are used
        </p>
          <ul style={{textAlign: 'left'}}>
            <li>React/Node.JS - For front and beackend respectively</li>
            <li>Travis CI - For CI/CD</li>
            <li>AWS - For hosting, using Elastic Beanstalk</li>
          </ul> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
