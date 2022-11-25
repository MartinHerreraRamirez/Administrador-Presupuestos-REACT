import React, {Fragment, useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({setPresupuesto, setRestante, setCargaCondicional}) => {

    const [ cantidad, setCantidad ] = useState(0)
    const [ errorCantidad, setErrorCantidad ] = useState(false)

    const definirPresupuesto = (e) => {
        setCantidad(parseInt(e.target.value, 10))
    }

    const submitPresupuesto = (e) => {
        e.preventDefault()

        if(cantidad < 1 || isNaN(cantidad)){
            setErrorCantidad(true)
            return
        }

        setErrorCantidad(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setCargaCondicional(false)
    }


    return (  
        <Fragment>

            <h2>Coloca Tu Presupuesto</h2>

            { errorCantidad 
            ? <Error 
                    mensaje='El presupuesto es incorrecto'
                />
            : null }

            <form
                onSubmit={submitPresupuesto}
            >
                <input 
                    type='number' 
                    className='u-full-width' 
                    placeholder='Coloca tu Presupuesto'
                    onChange={definirPresupuesto}
                />

                <input 
                    type='submit' 
                    className='button-primary u-full-width' 
                    value='Definir Presupuesto'
                />

            </form>

        </Fragment>
    );
} 

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setCargaCondicional: PropTypes.func.isRequired
}

export default Pregunta;