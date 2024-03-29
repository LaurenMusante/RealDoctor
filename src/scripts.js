export class DoctorInfo {
getDoctorInfo(searchedItem) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?%20&skip=0&query=${searchedItem}&limit=10&user_key=${process.env.exports.apiKey}&location=or-portland`;
    console.log(url);
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
     });
  } 
}
