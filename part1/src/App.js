import './App.css';
import Footer from './Footer.js';
import Mensaje from './Mensaje.js';

function App() {
  const nombre = 'Erisc'

  return (
    <div className="App">
      Hola mundo!! {nombre}
      <Mensaje fuente= 'Tahoma' color='red' message='Estoy mirando contenido' />
      <Mensaje fuente= 'Arial Narrow' color='green' message='en un curso' />
      <Mensaje fuente= 'calibri' color='blue' message='de React' />
      <Footer />
    </div>
  );
}

export default App;
