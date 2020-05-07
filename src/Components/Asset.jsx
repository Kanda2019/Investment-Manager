import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';

class Asset extends Component {
    state = {
        assets: [],
        forms: []
      }
      componentDidMount() {
        fetch('http://localhost:8080/financeplanner/assets')
        .then(res => res.json())
        .then((data) => {
          this.setState({ assets: data })
        })
      }
    
      handleClick ()
      {
          console.log('Adding a new Asset')
          const AddAssetForm = () => (
            <Form>
              <Form.Field>
                <label>Asset Type</label>
                <input placeholder='Asset Type' />
              </Form.Field>
              <Form.Field>
                <label>Invested Amount</label>
                <input placeholder='Invested Amount' />
              </Form.Field>
              <Form.Field>
                <label>Invested Date</label>
                <input placeholder='Invested Date' />
              </Form.Field>
              <Form.Field>
                <label>Current Value</label>
                <input placeholder='Current Value' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          )
         
      }

      renderTableData() {
        return this.state.assets.map(asset => {
           const { assetType, investedAmount, investedDate, currentValue, returnOnInvestment} = asset
           return (             
              <tr key={assetType}>
                 <td>{assetType}</td>
                 <td>{investedAmount}</td>
                 <td>{investedDate}</td>
                 <td>{currentValue}</td>
                 <td>{returnOnInvestment}</td>
              </tr>
           )
        })
     }

     render() {
      return (
         <div>
            <Button
                floated='right'
                content='Add Asset'
                onClick={this.handleClick}
            />
            <table class="ui green table">
                <thead>
                    <tr>
                        <th>Asset Type </th>
                        <th>Invested Amount </th>
                        <th>Invested Date </th>
                        <th>Current Value </th>
                        <th>Return On Investment </th>
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
export default Asset;