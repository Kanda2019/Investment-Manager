import React, {Component } from 'react';

class Income extends Component{
    state = {
        incomedetails: []
      }
      componentDidMount() {
        fetch('http://localhost:8080/financeplanner/incomedetails')
        .then(res => res.json())
        .then((data) => {
          this.setState({ incomedetails: data })
        })
      }
    

      renderTableData() {
        return this.state.incomedetails.map(income => {
           const { month, incomeSource, amount} = income
           return (             
              <tr key={month}>
                 <td>{month}</td>
                 <td>{incomeSource}</td>
                 <td>{amount}</td>
              </tr>
           )
        })
     }

     render() {
      return (
         <div className="container">
            <button class="ui right floated button">Add Income</button>
            <table class="ui green table">
               <thead>
                    <tr>
                        <th>Month </th>
                        <th>Source of Income </th>
                        <th>Amount</th>
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

export default Income;