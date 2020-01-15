import React from 'react';
import PropTypes from 'prop-types';

const TablePrivatBank = () => (
    <tbody>
        {currencyArray.map((currencyArray, i)=>
            (<tr key={i}>
                <th scope="row">img</th>
                <td>{currencyArray[i].name}</td>
                <td>{currencyArray[i].value}</td>
            </tr>)
            )}
    </tbody>
)

TablePrivatBank.propTypes = {
    title: PropTypes.string,
  }
  
TablePrivatBank.defaultProps = {
    title: 'Simple title',
  }


export default TablePrivatBank;