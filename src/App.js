import logo from './logo.svg';
import './App.css';
import Links from './conponents/Links';

function App() {

  let linkinfo=[
    {linkname:"Services"},
    {linkname:"Project"},
    {linkname:"About"},
  ]
  return (
    <div className="App">
    <div id="navbar">
      <div id="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEr337NlrFU0UNoV186QV14HjhQGKrnRAJg&usqp=CAU"></img>
      </div>
      <div id="links">
        {linkinfo.map((trlinks)=>(
          <Links {...trlinks} />
        ))}
      </div>
      <div id="btn_div">
        <button id="btn1">Contact</button>
      </div>
    </div>
    </div>
  );
}

export default App;
