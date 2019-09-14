import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './scripts';

$(document).ready(function(){
  $("#doctorForm").submit(function(event){
    event.preventDefault();
    const searchedItem = $("#userInput").val();
    let newInfo = new DoctorInfo();
    let newPromise = newInfo.getDoctorInfo(searchedItem);
    newPromise.then(function(response){
      const body = JSON.parse(response);
      address = body.data[0].practice[0].visitaddress.street;
      specialty


    });
  });
});
