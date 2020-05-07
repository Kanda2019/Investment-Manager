import React, { Component } from 'react';
class Investment extends Component {
    state = {
        investments: []
      }
      componentDidMount() {
        fetch('http://localhost:8080/financeplanner/investment')
        .then(res => res.json())
        .then((data) => {
          this.setState({ investments: data })
        })
      }
    

      renderTableData() {
        return this.state.investments.map(investment => {
           const { month, investmentType, amountInvested, currentValue} = investment
           return (             
              <tr key={month}>
                 <td>{month}</td>
                 <td>{investmentType}</td>
                 <td>{amountInvested}</td>
                 <td>{currentValue}</td>
              </tr>
           )
        })
     }

     render() {
      return (
         <div className="container">
          <button class="ui right floated button">Add Investment</button>
            <table class="ui green table">
               <thead>
                    <tr>
                        <th>Month </th>
                        <th>Investment Type</th>
                        <th>Amount Invested </th>
                        <th>Current Value </th>
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
 
export default Investment;