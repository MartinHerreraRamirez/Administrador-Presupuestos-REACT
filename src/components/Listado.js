import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types'

const Listado = ({listadoGasto}) => {
    return (  
        <div className='gastos-realizados'>
            <h2>Listado</h2>
            {listadoGasto.map( gasto => (
                <Gasto
                    key={gasto.id} 
                    gasto={gasto}
                />
            ))}
        </div>
    );
}

Listado.propTypes = {
    listadoGasto: PropTypes.array.isRequired
}

 
export default Listado;