import React, {Component} from 'react';

class Contact extends Component{

    state = {
        firstName: '',
        lastName: '',
        impression: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for joining, ${this.state.firstName}!`);
    }
    
    handleChange(event, propName) {
        this.setState({[propName]: event.target.value});
    }
   
    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <h2 id="contact">Contact</h2>
                    <input onChange={(event)=>this.handleChange(event, 'firstName')} 
                        className="contact-input" 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        placeholder="First Name" 
                    />


                    <input onChange={(event)=>this.handleChange(event, 'lastName')} 
                        className="contact-input" 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName} 
                        placeholder="Last Name" 
                    />

                    <input onChange={(event)=>this.handleChange(event, 'impression')} 
                        className="contact-input" 
                        type="text" 
                        name="impression" 
                        value={this.state.impression} 
                        placeholder="Best Impression" 
                    />

                    <button type="submit">Submit</button>
                    <p>{this.state.firstName} {this.state.lastName} does an impression of {this.state.impression}</p>
                    <p id="phone">Phone: 1-800-WE-REACT</p>
                    <p id="email">email: info@reactactors.org</p>
                </form>
            </>
        )
    }
}



export default Contact;