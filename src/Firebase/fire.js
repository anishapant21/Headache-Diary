// Your web app's Firebase configuration
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC1tKCj1FmxgrJAeBRvHO9OIk1MIMpO73A",
  authDomain: "headachediary-34ced.firebaseapp.com",
  projectId: "headachediary-34ced",
  storageBucket: "headachediary-34ced.appspot.com",
  messagingSenderId: "121571143694",
  appId: "1:121571143694:web:b14cd1ec00c17b024c4c5f",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;

var database = firebase.database();
var ref = database.ref("aches");
ref.on("value", gotData, errData);
var triggers;
var triggerList = [];
var location;
var locationList = [];
var outdoors;
var outdoorsList = [];
var pain;
var painList = [];
var temp;
var tempList = [];

var med;
var medList = [];
var dataAches;

function gotData(data) {
  dataAches = data.val();

  const charts = () => {
    var keys = Object.keys(dataAches);
    for (let i = 0; i < keys.length; i++) {
      var k = keys[i];
      triggers = dataAches[k].triggers;
      triggerList.push(triggers);

      location = dataAches[k].location;
      locationList.push(location);

      outdoors = dataAches[k].outdoors;
      outdoorsList.push(outdoors);

      pain = dataAches[k].pain;
      painList.push(pain);

      temp = dataAches[k].temp;
      tempList.push(temp);

      med = dataAches[k].medicine;
      medList.push(med);
    }
  };
  if (dataAches != null) {
    charts();
  }
}
function errData(err) {
  console.log("Error");
}

export { triggerList, locationList, outdoorsList, painList, tempList, medList };

export { dataAches };
