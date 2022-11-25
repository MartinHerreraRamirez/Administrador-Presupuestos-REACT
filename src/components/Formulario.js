import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({setGasto, setCrearGasto, restante}) => {

    const [ nombreGasto, setNombreGasto ] = useState('')
    const [ valorGasto, setValorGasto ]  = useState(0)
    const [ errorGasto, setErrorGasto ] = useState(false)

    const agregarGasto = (e) => {
        e.preventDefault()

        if(nombreGasto.trim() === '' || valorGasto < 1 || isNaN(valorGasto)){
            setErrorGasto(true)
            return
        }
        setErrorGasto(false)

        const gasto = {
            nombreGasto,
            valorGasto,
            id: shortid.generate()
        }

        setGasto(gasto)
        setCrearGasto(true)

        setNombreGasto('')
        setValorGasto(0)
    } 

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos</h2>

            { errorGasto
            ? <Error
                mensaje='Todos los campos son obligatorios - Presupuesto Incorrecto'   
                />
            : null
            }

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input 
                    type='text'                  
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={nombreGasto}
                    onChange={ e => setNombreGasto(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label>Valor Gasto</label>
                <input 
                    type='number'                    
                    className='u-full-width'
                    placeholder='Ej. 300'
                    value={valorGasto}
                    onChange={ e => setValorGasto(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
                disabled={!restante}
            />

            {!restante
            ? <Error
                    mensaje='Restante Insuficiente'
                />
            : null
            }
            
        </form>
     );
}


Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default Formulario;