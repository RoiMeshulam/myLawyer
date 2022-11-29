import logo from './logo.svg';
import './App.css';
import LawyerLogin from './componenets/LawyerLogin';
import LawyerDashboard from './componenets/LawyerDashboard';
import { Component } from './componenets/LawyerDashboard';


function App() {
  return (
    <div className="App">
      {/* <Component/> */}
      <LawyerDashboard />
      {/* <LawyerLogin /> */}
    </div>
  );
}

export default App;
