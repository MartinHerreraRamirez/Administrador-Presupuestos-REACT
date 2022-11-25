import React, { useState, useEffect }from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0)
  const [ restante, setRestante ] = useState(0)
  const [ cargaCondicional, setCargaCondicional ] = useState(true)
  const [ listadoGasto, setListadoGasto ] = useState([])
  const [ gasto, setGasto ] = useState({})
  const [ crearGasto, setCrearGasto ] = useState(false)

  useEffect( () => {

    if(crearGasto){
      setListadoGasto([
        ...listadoGasto,
        gasto
      ])  

      const presupuestoRestante = restante - gasto.valorGasto
      setRestante(presupuestoRestante)

      setCrearGasto(false)
    }   
 
  }, [ gasto, restante, crearGasto, listadoGasto ])

  return (

    <div className="container">

      <header>

        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido'>

          { cargaCondicional 
          ? 
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setCargaCondicional={setCargaCondicional}
            />    
          : 
            <div className='row'>
              <div className='one-half column'>
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                  restante={restante}
                />
              </div>

              <div className='one-half column'>
                <Listado
                  listadoGasto={listadoGasto} 
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }         

        </div>
       
      </header>

    </div>

  );
}

export default App;
