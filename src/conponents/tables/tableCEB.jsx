import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../conponents/spinners/spinner';
//import BaseValueCEB from '../../conponents/tables/formForTableCEB';


const TableEuropeanCentralBank  = ({isLoaded, currencyArray, buttonSortByName, buttonSortByValue, date}) => {
    if (!isLoaded) {
        return (
            <div><Spinner />Loading!!!</div>);
    }
    if (isLoaded) {
        return (
            <Fragment>
                <h4 className="text-dark">Published by the European Central Bank</h4>

                {   /*  Base Values Selection Form  */    }
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">Base currency:</label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        {currencyArray.map((itemOvject,i)=>
                            (<option key={`${itemOvject.name}${i}`}>
                                {itemOvject.name}
                            </option>
                            )
                        )}
                        <option selected>EUR</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Date on:</span>
                    </div>
                    <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={date}/>
                </div>

                {   /*  TABLE CURRENCY  */    }
                <table className="table table-sm shadow p-3 mb-5 bg-white rounded">
                    <thead>
                        <tr className="table-success alert alert-success">
                        <th scope="col">{`NameCurrency `}
                            <button className="btn btn-outline-success btn-sm" onClick={buttonSortByName}>&#9650;&#9660;</button>
                        </th>
                        <th scope="col">{`Value `} 
                            <button className="btn btn-outline-success btn-sm" onClick={buttonSortByValue}>&#9650;&#9660;</button>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currencyArray.map((itemOvject)=>
                            (<tr key={itemOvject.name}>
                                <td>{itemOvject.name}</td>
                                <td>{itemOvject.value}</td>
                            </tr>)
                            )}
                    </tbody>     
                </table>

                {   /*  Download file (currency rates)  */    }
                <div className="" style={{width: "3rem", height: "3rem", color: "red"}}>Download file...</div>

            </Fragment>
        );
    }
}

TableEuropeanCentralBank.propTypes = {
    isLoaded: PropTypes.bool,
    currencyArray: PropTypes.array,
    buttonSortByName: PropTypes.func,
    buttonSortByValue: PropTypes.func,
    date: PropTypes.string,
  }
  
TableEuropeanCentralBank.defaultProps = {
    isLoaded: false,
    currencyArray: [],
    buttonSortByName: () => {},
    buttonSortByValue: () => {},
    date: '',
  }


export default TableEuropeanCentralBank;