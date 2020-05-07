import React, {Component} from 'react';

class FinancialPlan extends Component{
    state = {
        plans: []
      }
      componentDidMount() {
        fetch('http://localhost:8080/financeplanner/financialplan')
        .then(res => res.json())
        .then((data) => {
          this.setState({ plans: data })
        })
      }
    

      renderTableData() {
        return this.state.plans.map(plan => {
           const { monthAndYear,income , expense, savings, investment} = plan
           return (             
              <tr key={monthAndYear}>
                 <td>{monthAndYear}</td>
                 <td>{income}</td>
                 <td>{expense}</td>
                 <td>{savings}</td>
                 <td>{investment}</td>
              </tr>
           )
        })
     }

     render() {
      return (
         <div className="container">
          <button class="ui right floated button">Add Plan</button>
            <table class="ui green table">
               <thead>
                    <tr>
                        <th>Plan Start Date </th>
                        <th>Income </th>
                        <th>Savings </th>
                        <th>Investment </th>
                        <th>Expense </th>
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

export default FinancialPlan;