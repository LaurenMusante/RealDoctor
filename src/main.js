import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './scripts.js';

$(document).ready(function(){
  $("#doctorForm").submit(function(event){
    event.preventDefault();
    const searchedItem = $("#userInput").val();
    let newInfo = new DoctorInfo();
    let newPromise = newInfo.getDoctorInfo(searchedItem);
    newPromise.then(function(response){
      const body = JSON.parse(response);
      let doctorFirstName = body.data[0].profile.first_name;
      let doctorLastName = body.data[0].profile.last_name;
      let address = body.data[0].practices[0].visit_address.street;
      let specialty = body.data[0].specialties[0].name;
      $("#results").show();
      $("#info").append(`Your doctor's name: ${doctorFirstName} ${doctorLastName} <br>`)
      $("#info").append(`Visit your doctor at: ${address} in Portland, OR <br>`);
      $("#info").append(`This doctor's specialty is listed as: ${specialty}`)

      for (i=0; i > body.data.length, i++) { // need to go through data array in order to find more than the same doctor over and over again. 

      }

    });
  });
});
