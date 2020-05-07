import React, { Component } from 'react';

class Goal extends Component {
    state = {
        goals: []
      }
      componentDidMount() {
        fetch('http://localhost:8080/financeplanner/financialgoals')
        .then(res => res.json())
        .then((data) => {
          this.setState({ goals: data })
        })
      }
    

      renderTableData() {
        return this.state.goals.map(goal => {
           const { goalName,duration , amountRequired, amountSaved} = goal
           return (             
              <tr key={goalName}>
                 <td>{goalName}</td>
                 <td>{duration}</td>
                 <td>{amountRequired}</td>
                 <td>{amountSaved}</td>
              </tr>
           )
        })
     }

     render() {
      return (
         <div className="container">
          <button class="ui right floated button">Add Goal</button>
            <table class="ui green table">
               <thead>
                  <tr>
                     <th>Goal Name </th>
                     <th>Duration </th>
                     <th>Required Amount </th>
                     <th>Saved Amount </th>
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
 
export default Goal;