import logo from './logo.svg';
import './App.css';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="ota_div" >
          <p class="p1"><b class="b1">Kun.</b><b class="b2">uz</b></p>
          <ul class="ul1">
            <li>
              <a href="">Sayt haqida</a>
            </li>
            <li>
              <a href="">RSS</a>
            </li>
            <li>
              <a href="">Aloqa</a>
            </li>
            <li>
              <a href="">Reklama</a>
            </li>
            <li>
              <a href="">Kun.uz jamoasi </a>
            </li>
          </ul>
          <ul class="ul2">
            <li>
              <i class="ri-telegram-fill"></i>
            </li>
            <li>
               <i class="ri-facebook-circle-fill"></i>
            </li>
            <li>
                <i class="ri-twitter-fill"></i>
            </li>
            <li>
                <i class="ri-instagram-line"></i>
            </li>
          </ul>
          <ul>
            <li>
              <button class="apple"> <i class="ri-apple-fill"></i> <p id="p1">Download on the</p> <br/>
                                                                    <p id="p2">App Store</p></button>
            </li>
            <li>
              <button class="play"> <i class="ri-google-play-fill"></i> <p id="p1">GET IT ON</p> <br/>
                                                                    <p id="p3">Google Play</p></button>
            </li>
            
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
