import React, { Component } from 'react';
 
class Cashflow extends Component{
    state = {
        cashflows: []
      }
      componentDidMount() {
        fetch('http://localhost:8080/financeplanner/cashflow')
        .then(res => res.json())
        .then((data) => {
          this.setState({ cashflows: data })
        })
      }
    

      renderTableData() {
        return this.state.cashflows.map(cashflow => {
           const { month, income, investment, savings, expense, emi} = cashflow
           return (             
              <tr key={month}>
                 <td>{month}</td>
                 <td>{income}</td>
                 <td>{investment}</td>
                 <td>{savings}</td>
                 <td>{expense}</td>
                 <td>{emi}</td>
              </tr>
           )
        })
     }

     render() {
      return (
         <div className="container">
            <button class="ui right floated button">Add Cashflow</button>
            <table class="ui green table">
               <thead>
                    <tr>
                        <th>Month </th>
                        <th>Income </th>
                        <th>Investment</th>
                        <th>Savings </th>
                        <th>Expense </th>
                        <th>EMI </th>
                    </tr>
                </thead>
                <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      );
   }

}

export default Cashflow;