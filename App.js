import './App.css';
import Images from './images.json'

function App() {
  return (
    <div className="App">

      <header className="header">
       <h2>IMAGE GALLERY</h2>
      </header>

      <div className="body">
          {
            Images && Images.map( (item) =>{
                return(
                    <div className="card" key={item.id}>  
                      <img src={item.img} alt=""/>
                      <div className="name-holder">
                            <p>{item.caption}</p>
                      </div>
                    </div>
                )
              })
          }
      
      </div>   

    </div>
  );
}

export default App;
