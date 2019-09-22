import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './scripts.js';

$(document).ready(function(){
  $("#doctorForm").submit(function(event){
    event.preventDefault();
    $("#info").text("");
    const searchedItem = $("#userInput").val();
    let newInfo = new DoctorInfo();
    let newPromise = newInfo.getDoctorInfo(searchedItem);
    newPromise.then(function(response){
      const body = JSON.parse(response);
      body.data.forEach(function(doctor){
      let doctorFirstName = doctor.profile.first_name;
      let doctorLastName = doctor.profile.last_name;
      let address = doctor.practices[0].visit_address.street;
      let specialty = doctor.specialties[0].name;
      $("#results").show();
      $("#info").append(`Your doctor's name: ${doctorFirstName} ${doctorLastName} <br>`)
      $("#info").append(`Visit your doctor at: ${address} in Portland, OR <br>`);
      $("#info").append(`This doctor's specialty is listed as: ${specialty} <br>`)
      })
    });
  });
});
