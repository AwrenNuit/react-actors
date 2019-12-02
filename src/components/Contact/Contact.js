import React from 'react';

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            impression: ''
        };
    
        this.onInputChange = this.onInputChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
      }  
        
    onInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    onButtonClick(event){
        alert(`Thank you for joining, ${this.state.fname}!`);
        event.preventDefault();

        this.setState({
            fname: '',
            lname: '',
            impression: ''
        })
    }

    render(){
        return(
            <>
                <form onSubmit={this.onButtonClick}>
                    <h2 id="contact">Contact</h2>
                    <input onChange={this.onInputChange} className="contact-input" type="text" name="fname" value={this.state.fname} placeholder="First Name" />
                    <input onChange={this.onInputChange} className="contact-input" type="text" name="lname" value={this.state.lname} placeholder="Last Name" />
                    <input onChange={this.onInputChange} className="contact-input" type="text" name="impression" value={this.state.impression} placeholder="Best Impression" />
                    <input type="submit" value="Submit" id="submit-btn" />
                    {/* unsure how to make input values append to p tag only on last input text */}
                    <p>{`${this.state.fname} ${this.state.lname} ${this.state.impression}`}</p>
                    <p id="phone">Phone: 1-800-WE-REACT</p>
                    <p id="email">email: info@reactactors.org</p>
                </form>
            </>
        )
    }
}



export default Contact;