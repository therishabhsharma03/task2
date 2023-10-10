import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Basic from './components/basic';
import CalBody from './components/calBody';
function App() {
  return (
    <div >
      <Basic>
      </Basic>
      <div class="container d-flex justify-content-center align-items-center vh-100"> 
        <CalBody></CalBody>
      </div>
    </div>
  );
}

export default App;
