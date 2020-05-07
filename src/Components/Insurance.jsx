import React, {Component} from 'react';

class Insurance extends Component{
    state = {
        insuranceDetails: []
      }
      componentDidMount() {
        fetch('http://localhost:8080/financeplanner/insurance')
        .then(res => res.json())
        .then((data) => {
          this.setState({ insuranceDetails: data })
        })
      }
    

      renderTableData() {
        return this.state.insuranceDetails.map(insurance => {
           const { insuranceType, personInsured, amountInsured, premium} = insurance
           return (             
              <tr key={insuranceType}>
                 <td>{insuranceType}</td>
                 <td>{personInsured}</td>
                 <td>{amountInsured}</td>
                 <td>{premium}</td>
              </tr>
           )
        })
     }

     render() {
      return (
         <div className="container">
           <button class="ui right floated button">Add Insurance</button>
            <table class="ui green table">
                <thead>
                <tr>
                        <th>Insurance Type </th>
                        <th>Insured Person </th>
                        <th>Insured Amount</th>
                        <th>Premium </th>
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

export default Insurance;