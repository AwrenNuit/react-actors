import React, {Component} from 'react';

class Contact extends Component{

    state = {
        input: {
            firstName: '',
            lastName: '',
            impression: ''
        },
        display: {
            firstName: '',
            lastName: '',
            impression: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for joining, ${this.state.input.firstName}!`);
        this.setState({
            display: {
                firstName: this.state.input.firstName,
                lastName: this.state.input.lastName,
                impression: this.state.input.impression
            }
        });
    }
    
    handleChange(event, propName) {
        this.setState({
            input:{
                ...this.state.input,
                [propName]: event.target.value
            }
        });
    }
   
    render(){
        return(
            <>
            {JSON.stringify(this.state)}
                <form onSubmit={this.handleSubmit}>
                    <h2 id="contact">Contact</h2>
                    <input onChange={(event)=>this.handleChange(event, 'firstName')} 
                        className="contact-input" 
                        type="text" 
                        name="firstName" 
                        value={this.state.input.firstName} 
                        placeholder="First Name" 
                    />

                    <input onChange={(event)=>this.handleChange(event, 'lastName')} 
                        className="contact-input" 
                        type="text" 
                        name="lastName" 
                        value={this.state.input.lastName} 
                        placeholder="Last Name" 
                    />

                    <input onChange={(event)=>this.handleChange(event, 'impression')} 
                        className="contact-input" 
                        type="text" 
                        name="impression" 
                        value={this.state.input.impression} 
                        placeholder="Best Impression" 
                    />

                    <button type="submit">Submit</button>

                    {this.state.display.firstName ? 
                        <p>{this.state.display.firstName} {this.state.display.lastName} does an impression of {this.state.display.impression}</p>
                        : 
                        <p></p>
                    }

                    <p id="phone">Phone: 1-800-WE-REACT</p>
                    <p id="email">email: info@reactactors.org</p>
                </form>
            </>
        )
    }
}



export default Contact;