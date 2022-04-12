import { Handle } from "react-flow-renderer";

const CustomNode = ({ type = "test", selected = "ABC", subflow = false }) => {
  return (
    <div>
      <div
        style={{
          border: "1px",
          borderRadius: "3px",
          paddingLeft: "4px",
          paddingRight: "4px",
          background: backgroundBytype(type),
          color: "white",
          fontWeight: "bold",
          fontSize: "10px",
          display: "inline-block",
          marginBottom: "3px",
        }}
      >
        {type}
      </div>
      {subflow && (
        <div>
          <Handle
            type="source"
            position="right"
            id="subStart"
            style={{ top: 16, background: "#555" }}
            isConnectable={true}
          />
          <Handle
            type="target"
            position="right"
            id="subEnd"
            style={{ bottom: 16, top: "auto", background: "#555" }}
            isConnectable={true}
          />
          <Handle
            type="source"
            position="left"
            id="subReturn"
            style={{ background: "#555" }}
            isConnectable={true}
          />
          <Handle
            type="target"
            position="left"
            id="subGet"
            style={{ top: 16, background: "#555" }}
            isConnectable={true}
          />
          <Handle
            type="source"
            position="bottom"
            id="start"
            style={{ background: "#555" }}
            isConnectable={true}
          />
        </div>
      )}
      <div style={{ color: "#68768C", fontSize: "10px" }}>{selected}</div>
    </div>
  );
};
export function backgroundBytype(type) {
  switch (type) {
    case "STAGE":
      return "#FFCB77";
    case "TASK":
      return "#227C9D";
    case "MILESTONE":
      return "#FE6D73";
    case "SUBTASK":
      return "#17C3B2";
    case "REPORTNOTE":
      return "#B1B9BF";
    default:
      return "#DFE2E5";
  }
}
export default CustomNode;
