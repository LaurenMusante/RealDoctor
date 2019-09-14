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
      console.log(body);
      let address = body.data[0].practice[0].visitaddress.street;
      $("#results").show();
      $("#info").append(`"<p> testing </p>"`);

    });
  });
});
