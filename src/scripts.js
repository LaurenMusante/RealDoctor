export class DoctorInfo {
getDoctorInfo(searchedItem) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?%20&query=${searchedItem}kip=0&limit=10&user_key=${exports.apiKey}=or-portland`;
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
  } //funciton closing curly
} //class closing curly
