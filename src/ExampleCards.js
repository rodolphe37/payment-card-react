import React from 'react';
import './exampleCard.css'

const ExampleCards = () => {
    return (
        <div className="examples">
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Type</th>
          <th>Card Number</th>
          <th>Security Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Visa</td>
          <td>4716108999716531</td>
          <td>257</td>
        </tr>
        <tr>
          <td>Master Card</td>
          <td>5281037048916168</td>
          <td>043</td>
        </tr>
        <tr>
          <td>American Express</td>
          <td>342498818630298</td>
          <td>3156</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    )
}

export default ExampleCards;