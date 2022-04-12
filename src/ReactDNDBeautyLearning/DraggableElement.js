import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";

const ColumnHeader = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const DraggableElement = ({ prefix, elements }) => (
  <div
    style={{
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#eff3f6",
    }}
  >
    <ColumnHeader>{prefix}</ColumnHeader>
    <Droppable droppableId={`${prefix}`}>
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((item, index) => (
            <div
              style={{
                width: "256px",
                borderRadius: "6px",
                background: snapshot.isDraggingOver ? "lightblue" : "#eff3f6",
              }}
            >
              <ListItem key={item.id} item={item} index={index} />
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default DraggableElement;
