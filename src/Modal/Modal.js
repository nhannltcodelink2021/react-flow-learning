import React, { useState } from "react";
import ReactDOM from "react-dom";
import { backgroundBytype } from "../ReactFlowLearning/CustomNode";
import SelectSearch from "react-select-search";
import "./styles.css";

const Modal = ({ isShowing, hide, title, data }) => {
  const [dataSelected, setDataSelected] = useState("No");
  const handleChange = (...args) => {
    setDataSelected(args[1].name);
  };
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div
                className="modal-header"
                style={{
                  paddingLeft: "30px",
                  paddingTop: "21px",
                  paddingBottom: "24px",
                  paddingRight: "30px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    marginLeft: "auto",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Add a new {nameByType(title)}
                </div>

                <div
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ paddingRight: "-50%" }}
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#EAEDF3",
                  height: "1px",
                  width: "100%",
                  flex: 1,
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  alignItems: "end",
                  paddingLeft: "30px",
                  paddingTop: "28px",
                  paddingBottom: "24px",
                  paddingRight: "30px",
                  height: "300px",
                }}
              >
                <SelectSearch
                  // ref={searchInput}
                  options={options}
                  style={{ width: "100%" }}
                  filterOptions={handleFilter}
                  value=""
                  name="Workshop"
                  placeholder="Start typing to search"
                  search
                  onChange={handleChange}
                />
              </div>
              <div
                style={{
                  backgroundColor: "#EAEDF3",
                  height: "1px",
                  width: "100%",
                  flex: 1,
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingLeft: "30px",
                  paddingTop: "25px",
                  paddingBottom: "28px",
                  paddingRight: "30px",
                }}
              >
                <button
                  className="button"
                  style={{
                    backgroundColor: backgroundBytype(title),
                    color: "white",
                  }}
                  onClick={() => {
                    hide();
                    data(dataSelected, title);
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: "14px",
                      paddingLeft: "26.5px",
                      paddingTop: "7.6px",
                      paddingBottom: "7.6px",
                      paddingRight: "26.5px",
                    }}
                  >
                    Add {nameByType(title)}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

const handleFilter = (items) => {
  return (searchValue) => {
    if (searchValue.length === 0) {
      return options;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  };
};
const MockDataList = [
  "Open",
  "Education Evaluation is required. Run Bot to request Education Evaluation.",
  "Is an Education Evaluation Required.",
  "Confirm Education Evaluation has been received.",
  "Education evaluation received. Preparing the H-1B petition.",
  "Contact HR to highlight issue.",
  "Awaiting guidance from HR on how to address prevailing wage issue.",
  "Is there a prevailing wage issue?",
  "Billed.",
  "Bill project and request filing fees.",
  "Initiated case.",
  "Prep and file LCA with the Department of Labor identify blanket LCA.",
  "Submitted LCA to Department of Labor. Certificatiion expected in 7 to 10 days.",
  "Sent reminder to employee for completed questionnaire and supplementing documents. ",
  "Initial contact to employee.",
  "Initial email sent to employee. Awaiting completed questionnaires and requested documents",
  "Awaiting questionnaire and documents from employee. 1st reminder sent to employee [DATE].",
  "Legal team preparing petition. Received initial info.",
  "Awaiting H-1B petition from the Hub.",
  "Sentt for Atty Draft review",
  "Give draft H-1B petition to attorney for review.",
  "Return cap-subjeect petition nto drafter. Attorney draft review completed.",
  "Atty reviewed draft",
  "Finalize forms based on attorney feedback. Attorney draft review completed.",
  "Questionnaires received from employer. Reviewing questionnaire.",
];
const options = [
  {
    name: "Education Evaluation is required. Run Bot to request.",
    value: "1",
  },
  { name: "Open", value: "2" },
  { name: "Is an Education Evaluation Required.", value: "3" },
  {
    name: "Education evaluation received. Preparing the H-1B petition.",
    value: "4",
  },
  { name: "Confirm Education Evaluation has been received.", value: "5" },
  { name: "Initiated case.", value: "6" },
  { name: "Billed.", value: "8" },
  { name: "Awaiting H-1B petition from the Hub.", value: "7" },
  {
    name: "Submitted LCA to Department of Labor. Certificatiion expected in 7 to 10 days.",
    value: "9",
  },
  { name: "Give draft H-1B petition to attorney for review.", value: "11" },
  {
    name: "Finalize forms based on attorney feedback. Attorney draft review completed.",
    value: "10",
  },
  {
    name: "Questionnaires received from employer. Reviewing questionnaire.",
    value: "12",
  },
];
export function nameByType(type) {
  switch (type) {
    case "STAGE":
      return "stage";
    case "TASK":
      return "task";
    case "MILESTONE":
      return "mile stone";
    case "SUBTASK":
      return "subtask";
    case "REPORTNOTE":
      return "report note";
    default:
      return "none";
  }
}
export default Modal;
