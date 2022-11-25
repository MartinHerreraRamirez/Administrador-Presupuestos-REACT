import React from 'react'
import PropTypes from 'prop-types'

const Gasto = ({gasto}) => {

    const { nombreGasto, valorGasto } = gasto

    return ( 
        <li className='gastos'>
            <p className='alert'>
                {nombreGasto}

                <span className='gasto'>${valorGasto}</span>
            </p>
        </li>
     );
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;