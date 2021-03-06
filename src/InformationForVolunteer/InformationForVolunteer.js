import React, { Component } from 'react';
import MyTitle from '../Title';
import firebase from '../Firebase/Firebase'; 
import './InformationForVolunteer.css';
import SecondaryTitle from '../SecondaryTitle'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url1: '',
            url2: ''
            
        }
        this.getImage1('url1')
        this.getImage2('url2')
       
    }

    getImage1(image) {
        let { state } = this
        firebase.storage().ref("images/").child('Rules.docx').getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
        }).catch((error) => {
            // Handle any errors
        })
    }


    getImage2(image) {
        let { state } = this
        firebase.storage().ref("images/").child('Presentation.pptx').getDownloadURL().then((url) => {
            state[image] = url
            this.setState(state)
        }).catch((error) => {
            // Handle any errors
        })
    }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
    
    render() {
  
    return (

        <div>
     

        <MyTitle title="מידע למתנדב" /> <p></p> <p></p>
        <SecondaryTitle title="קבצים של העמותה"></SecondaryTitle>

        <div class="row justify-content-md-center">
          <div class="col-md-7 py-2">
            <div class="card text-center text-black-50  bg-light">
              <div class="card-body ">
                
                            <a href={this.state.url1} download> כללים הוראות וכל מה שחשוב לדעת</a>
                            <br />
                            <br />
                            <a href={this.state.url2} download> מצגת יש תקווה</a>
              </div>
            </div>
          </div>

            </div>

           

        
      </div>
    );
  }
}


export default Home;

