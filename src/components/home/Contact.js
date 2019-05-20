import React from 'react';
class Contact extends React.Component{
	
state = {
    contacts: []
  }

  render() {
    return (
        <React.Fragment>
        <div className="container">
	        <h1>Contact Management</h1>
	        <table border='1' width='100%' >
	        <tr>
	            <th>Name</th>
	            <th>Email</th>
	            <th>Country</th>
	            <th>City</th>
	            <th>Job</th>     
	        </tr>
	        {this.state.contacts.map((contact) => (
	        <tr>
	            <td>{ contact.name }</td>
	            <td>{ contact.email }</td>
	            <td>{ contact.country }</td>
	            <td>{ contact.city }</td>
	            <td>{ contact.job }</td>
	        </tr>
	        ))}
	        </table>
	      </div>
        </React.Fragment>
    );
  }




}
export default Home;