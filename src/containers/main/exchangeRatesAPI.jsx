import React, { Component, Fragment } from 'react';

import TableEuropeanCentralBank from '../../conponents/tables/tableCEB';
//import { FormBaseValueCEB, BaseValueCEB } from '../../conponents/tables/formForTableCEB';

class ExchangeRatesApi extends Component {

    constructor(props){
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          date: '',
          base: 'EUR',
          currencyRate: {},
          tableSort: false,
          currencyArray: [],
        };
      }
    
      componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest')
          .then(response => response.json())
          .then(
            (result) => {
              this.setState({
                isLoaded:true,
                date: result.date,
                currencyRate: result.rates,
                currencyArray:  Object.entries(result.rates).map((element) => {
                  let obj = {};
                  obj.name = element[0];
                  obj.value = element[1];
                  element = obj;
                  return (element
                    );
                }),
              });  
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              })
            }
          )
      }

      hendleClickSortByName = () => {
          if (!this.state.tableSort) {
            this.setState({ currencyArray: this.state.currencyArray.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          });
          } else {
                this.setState({ currencyArray: this.state.currencyArray.sort().reverse()});
        }
            this.setState ({
                tableSort: !this.state.tableSort,
            });
      }

      hendleClickSortByValue = () => {
        if (!this.state.tableSort) {
          this.setState({ currencyArray: this.state.currencyArray.sort((a, b) => {
            if (a.value > b.value) {
              return 1;
            }
            if (a.value < b.value) {
              return -1;
            }
            return 0;
          })
        });
        } else {
              this.setState({ currencyArray: this.state.currencyArray.sort().reverse()});
      }
          this.setState ({
              tableSort: !this.state.tableSort,
          });
      }

    render() {
        const { currencyArray, isLoaded, date } = this.state;
        console.log(this.state.currencyRate);


    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                      <TableEuropeanCentralBank 
                        isLoaded={isLoaded} 
                        currencyArray={currencyArray}
                        buttonSortByName={this.hendleClickSortByName}
                        buttonSortByValue={this.hendleClickSortByValue}
                        date={date}
                      />
                    </div>
                    <div className="col-4">
                        One of two columns
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
}

export default ExchangeRatesApi;