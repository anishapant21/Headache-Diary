import React, { useEffect, useState } from "react";
import "../styles/note.css";
import { useForm } from "react-hook-form";

import { FiFilePlus } from "react-icons/fi";
import firebase from "firebase";

function Note() {
  const [note, setNote] = useState("DRINK PLENTY OF WATER YOU’LL FEEL BETTER");
  const [addButton, setAddButton] = useState(true);
  const { register, handleSubmit } = useForm();
  const database = firebase.database();

  var ref = database.ref("notes");
  ref.on("value", gotData, errData);

  var datame;
  function errData(err) {
    console.log("Error");
  }

  function gotData(data) {
    var dataAll = data.val();
    console.log(dataAll);

    const callme = () => {
      var dataAll = data.val();
      var keys = Object.keys(dataAll);
      const d = keys[keys.length - 1];
      datame = dataAll[d].note;
      console.log(datame);
    };

    if (dataAll != null) {
      callme();
    }
  }
  useEffect(() => {
    setNote(datame);
  });

  const onSubmit = (d) => {
    setAddButton(true);
    //setNote(d.note);
    var data = {
      note: d.note,
    };
    console.log(d.note);
    var ref = database.ref("notes");
    ref.push(data);
  };

  let renderElem;

  if (addButton) {
    renderElem = (
      <div className="col-lg-5 offset-lg-1 col-md-6 col-10 offset-1">
        <div className="card mt-3 pb-5 writeme">
          <div className="written">{note}</div>
          <button
            type="button"
            class="btn btn-success buttonnote"
            onClick={() => setAddButton(false)}
          >
            <FiFilePlus className="iconplus" /> ADD NOTE
          </button>
        </div>
      </div>
    );
  } else {
    renderElem = (
      <div className="col-lg-5 offset-lg-1 col-md-6 col-10 offset-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Note for yourself</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              maxLength="90"
              {...register("note")}
            ></textarea>
          </div>
          <button type="submit" value="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return <>{renderElem}</>;
}

export default Note;
