import React from "react";
import "../styles/headacheform.css";

function HeadacheForm() {
  return (
    <>
      <form>
        <div className="form-row eachline">
          <div className="form-group col-md-3 col-lg-4 col-5 line">
            <label for="inputTemp">Temperature</label>
            <input
              type="number"
              className="form-control"
              id="inputTemp"
              placeholder="24"
              disabled
            />
          </div>
          <div className="form-group col-md-6 col-lg-4 col-5">
            <label for="inputWeather">Weather</label>
            <input
              type="text"
              className="form-control"
              id="inputWeather"
              placeholder="Cloudy"
            />
          </div>
        </div>

        <div className="form-row eachline">
          <div className="form-group col-md-3 col-lg-4 col-6 line">
            <label for="inputDate">Date</label>
            <input
              type="date"
              className="form-control"
              id="inputDate"
              placeholder="2020-04-23"
            />
          </div>
          <div className="form-group col-md-6 col-lg-4">
            <label for="inputTime">Time</label>
            <input
              type="time"
              className="form-control"
              id="inputTime"
              placeholder="20:15"
            />
          </div>
        </div>
        <div className="form-row col-md-6 col-lg-9">
          <label for="customRange1" class="form-label eachline">
            Pain Level
          </label>
          <input type="range" class="form-range eachline" id="customRange1" />
        </div>

        <div className="form-row eachline">
          <div className="form-group col-md-4 col-lg-4 col-5 line">
            <label for="inputState">Started at</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Before wakeup</option>
              <option>Before 12</option>
              <option>12-3</option>
              <option>3-6</option>
              <option>6-9</option>
              <option>9-12</option>
            </select>
          </div>
          <div className="form-group col-md-4 col-lg-4 col-5 line">
            <label for="inputState">Type of</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Summer</option>
              <option>Migraine</option>
              <option>Sharp</option>
              <option>Throbbing</option>
              <option>Dull</option>
            </select>
          </div>
        </div>

        <div className="form-row eachline">
          <div className="form-group col-md-4 col-lg-4 col-5 line">
            <label for="inputState">Location</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Left</option>
              <option>Right</option>
              <option>Both</option>
            </select>
          </div>
          <div className="form-group col-md-4 col-lg-4 col-5 line">
            <label for="inputState">Symptoms</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Weakness</option>
              <option>Lethargy</option>
              <option>Dizziness</option>
              <option>Nausea</option>
              <option>Visual</option>
            </select>
          </div>
        </div>

        <div className="form-row eachline">
          <div className="form-group col-md-4 col-lg-4 col-5 line">
            <label for="inputState">Possible Triggers</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Work</option>
              <option>Stress</option>
              <option>Screen</option>
              <option>Hungry</option>
            </select>
          </div>
          <div className="form-group col-md-4 col-lg-4 col-5 line">
            <label for="inputState">Outdoors</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="form-row eachline">
          <div className="form-group col-md-4 col-lg-4 col-5 line">
            <label>Medicine?</label>

            <div class="form-check line">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
              />
              <label class="form-check-label" for="gridRadios1">
                Yes
              </label>
            </div>
            <div class="form-check line">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label class="form-check-label" for="gridRadios2">
                No
              </label>
            </div>
          </div>
          <div className="form-group col-md-4 col-lg-6 col-6 line">
            <button type="button" className="btn btn-info buttonsave">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default HeadacheForm;
