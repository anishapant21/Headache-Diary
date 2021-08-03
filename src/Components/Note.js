import React, { useState } from "react";
import "../styles/note.css";
import { useForm } from "react-hook-form";

import { FiFilePlus } from "react-icons/fi";

function Note() {
  const [note, setNote] = useState("DRINK PLENTY OF WATER YOU’LL FEEL BETTER");
  const [addButton, setAddButton] = useState(true);
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    setAddButton(true);
    setNote(d.note);
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
{
  /* <div className="col-lg-5 offset-lg-1 col-md-6 col-10 offset-1">
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <div class="form-group">
//       <label for="exampleFormControlTextarea1">Note for yourself</label>
//       <textarea
//         class="form-control"
//         id="exampleFormControlTextarea1"
//         rows="10"
//         {...register("note")}
//       ></textarea>
//     </div>
//     <button type="submit" value="submit" className="button">
//       Submit
//     </button>
//   </form>
// </div> */
}
