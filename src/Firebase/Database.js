import firebase from "firebase";

const database = firebase.database();
var ref = database.ref("aches");

ref.on("value", gotData, errData);
var triggers;
var triggerList = [];
var location;
var locationList = [];

function gotData(data) {
  var dataAches = data.val();

  const charts = () => {
    var keys = Object.keys(dataAches);
    for (let i = 0; i < keys.length; i++) {
      var k = keys[i];
      triggers = dataAches[k].triggers;
      triggerList.push(triggers);

      location = dataAches[k].location;
      locationList.push(location);
    }
  };
  if (dataAches != null) {
    charts();
  }
}
function errData(err) {
  console.log("Error");
}

//export {triggerList}
export { locationList };
