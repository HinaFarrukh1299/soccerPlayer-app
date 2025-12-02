/*import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
    submitPlayer(event) {
        event.preventDefault();
       // axios.post('http://localhost:4000/player',{
        axios.post('https://soccerplayer-application-backend.onrender.com/player',{
       
           firstName: this.refs.firstName.value,
           lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        })
        .then((response) => {
            console.log(response)
        
        .catch((error) => console.log(error))
    })
}
    render() {
        return (
            <>
            <div className="row">
                <h1 className='center'> Add a new player </h1>
                <form className='col s12'onSubmit={this.submitPlayer.bind(this)}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id='firstName' ref='firstName' type='text' />
                            <label htmlFor='firstName'> First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='lastName' ref='lastName' type='text' />
                            <label htmlFor='lastName'> Last Name</label>
                        </div>
                        
                    </div>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id='phone' ref='phone' type='text' />
                            <label htmlFor='phone'> Phone No </label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='email' ref='email' type='text' />
                            <label htmlFor='email'> Email </label>
                        </div>
                        
                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='action'> Add Player</button>
                </form>
            </div>
            </>
        )
    }
}


/*const PlayerForm = () => {

    return (
        <div> player Form </div>
    )
}*/

//export default PlayerForm; 

/*import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
    submitPlayer(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        axios.post('http://localhost:4000/players', {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        })
        .then((response) => {
            console.log('Player added:', response.data);
            // Optionally reset the form fields or do something else
            this.refs.firstName.value = '';
            this.refs.lastName.value = '';
            this.refs.phone.value = '';
            this.refs.email.value = '';
        })
        .catch((error) => {
            console.error('Error adding player:', error);
        });
    }

    render() {
        return (
            <div className="row">
                <h1 className='center'>Add a new player</h1>
                <form className='col s12' onSubmit={this.submitPlayer.bind(this)}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id='firstName' ref='firstName' type='text' required />
                            <label htmlFor='firstName'>First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='lastName' ref='lastName' type='text' required />
                            <label htmlFor='lastName'>Last Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id='phone' ref='phone' type='text' required />
                            <label htmlFor='phone'>Phone No</label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='email' ref='email' type='email' required />
                            <label htmlFor='email'>Email</label>
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Add Player</button>
                </form>
            </div>
        );
    }
}

export default PlayerForm; */

import React from 'react';
import axios from 'axios';


class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        // Create refs for each input
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.phoneRef = React.createRef();
        this.emailRef = React.createRef();
        
        this.submitPlayer = this.submitPlayer.bind(this); // Bind the method
    }

    /*submitPlayer(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        axios.post('http://localhost:4000/players', {
            firstName: this.firstNameRef.current.value,
            lastName: this.lastNameRef.current.value,
            phone: this.phoneRef.current.value,
            email: this.emailRef.current.value,
        })
        .then((response) => {
            console.log('Player added:', response.data);
            // Reset the form fields
            this.firstNameRef.current.value = '';
            this.lastNameRef.current.value = '';
            this.phoneRef.current.value = '';
            this.emailRef.current.value = '';
        })
        .catch((error) => {
            console.error('Error adding player:', error);
        });
    } */
        async submitPlayer(event) {
            event.preventDefault();
        
            try {
                const response = await axios.post('https://soccerplayer-application-backend.onrender.com//players', {
                    firstName: this.firstNameRef.current.value,
                    lastName: this.lastNameRef.current.value,
                    phone: this.phoneRef.current.value,
                    email: this.emailRef.current.value,
                });
                console.log('Player added:', response.data);
                // Reset form fields
                this.firstNameRef.current.value = '';
                this.lastNameRef.current.value = '';
                this.phoneRef.current.value = '';
                this.emailRef.current.value = '';
            } catch (error) {
                if (error.response) {
                    console.error('Error response:', error.response.data);
                    console.error('Error status:', error.response.status);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    console.error('Error setting up request:', error.message);
                }
            }
        }
        

    render() {
        return (
            <div className="row">
                <h1 className='center'>Add a new player</h1>
                <form className='col s12' onSubmit={this.submitPlayer}>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id='firstName' ref={this.firstNameRef} type='text' required />
                            <label htmlFor='firstName'>First Name</label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='lastName' ref={this.lastNameRef} type='text' required />
                            <label htmlFor='lastName'>Last Name</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input-field col s6'>
                            <input id='phone' ref={this.phoneRef} type='text' required />
                            <label htmlFor='phone'>Phone No</label>
                        </div>
                        <div className='input-field col s6'>
                            <input id='email' ref={this.emailRef} type='email' required />
                            <label htmlFor='email'>Email</label>
                        </div>
                    </div>
                    <button className='btn waves-effect waves-light' type='submit' name='action'>Add Player</button>
                </form>
            </div>
        );
    }
}

export default PlayerForm;
