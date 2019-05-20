import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/home';
import NavBar from './home/NavBar';
class Master extends React.Component {
	render(){
		return(

			<div className="home">
					<div className="topbar-menu">
						<div className="container-fluid">
							<NavBar/>
						 </div>
					</div>
					<div className="code-bar">
						 <div className="container-fluid">
							 <div className="row">
							 	<div className="col-md-12 text-center">
							 	<div className="color-code-section">
									<div style={{background: 'red'}} className="color-box"> </div> #SDHJDSF  -   <div style={{background: 'blue'}} className="color-box"> </div>  #0000 
							 	</div>
							 	</div>
							 </div>
						 </div>
					 </div>
					 <div className="container-fluid">
					 	<Route exact path="/" component={Home} />
					 </div>	
       	   	 </div>


			)
		}
	}

export default Master;