import React from "react";

const Dropbar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside
      style={{
        background: "#00445C",
        padding: "34px",
        paddingTop: "99px",
        textAlign: "left",
      }}
    >
      <div
        className="description"
        style={{
          color: "#EFF3F6",
          paddingBottom: "55px",
          fontWeight: "bold",
          fontSize: "14px",
          width: "94px",
        }}
      >
        Drag an event to the workflow area
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <div
          className="dndnode output"
          onDragStart={(event) => onDragStart(event, "STAGE")}
          draggable
          style={{
            color: "white",
            background: "#FFCB77",
            borderRadius: "3px",
            display: "flex",
            flexWrap: "wrap",
            padding: "4px",
            fontSize: "10px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          STAGE
        </div>
        <div
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, "TASK")}
          draggable
          style={{
            color: "white",
            background: "#227C9D",
            borderRadius: "3px",
            display: "flex",
            padding: "4px",
            fontSize: "10px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          TASK
        </div>
        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "MILESTONE")}
          draggable
          style={{
            color: "white",
            background: "#FE6D73",
            borderRadius: "3px",
            display: "flex",
            padding: "4px",
            fontSize: "10px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          MILESTONE
        </div>
        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "REPORTNOTE")}
          draggable
          style={{
            color: "white",
            background: "#B1B9BF",
            borderRadius: "3px",
            display: "flex",
            padding: "4px",
            fontSize: "10px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          REPORT NOTE
        </div>
      </div>
    </aside>
  );
};
export default Dropbar;
