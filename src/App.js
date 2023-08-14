import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>LOGO EMPRESA</h1>
      </header>
      <div className='section-body flex-center-items flex-column'>
        <div className='mb-3'>
          <h1>Iniciar sesión</h1>
        </div>
        <div className='flex-column flex-center-items'>
          <div className='input-group my-2'>
            <div className='border px-3 flex-center-items'>
              <label for= "nameUser"><i className='fa regular fa-user'></i></label>
            </div>
            <div>
              <input type = "text" placeholder='Usuario' className='input form-control' id='nameUser'/>
            </div>
          </div>
          <div className='input-group my-2'>
            <div className='border px-3 flex-center-items'>
              <label for= "nameUser"><i className='fa regular fa-lock'></i></label>
            </div>
            <div>
              <input type = "password" placeholder='Contraseña' className='input form-control'/>
            </div>
          </div>
          <div className='mt-4'>
            <input type='button' className= "btn btn-success" value = "Iniciar sesión"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
