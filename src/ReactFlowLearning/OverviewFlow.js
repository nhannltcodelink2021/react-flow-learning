import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Position,
  MarkerType,
} from "react-flow-renderer";
import "./index.css";
import { nodes as initialNodes, edges as initialEdges } from "./linkdata";
import { nodes as initialNodes2, edges as initialEdges2 } from "./linkdata2";
import Dropbar from "./Dropbar";
import CustomNode from "./CustomNode";
import Modal from "../Modal/Modal";
import useModal from "../Modal/UseModal";
import DragList from "../ReactDNDBeautyLearning/DragList";

const reactFlowStyle = {
  background: "#EFF3F6",
};
const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [updateNode, setUpdateNode] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [page, setPage] = useState(0);
  let [nodeId, setNodeId] = useState(0);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef();
  const defaultWidth = 306;
  const baseHeight = 26;
  const baseWidth = 41;
  const { isShowing, toggle, openModal } = useModal();

  useEffect(() => {
    toPage(initialEdges, initialNodes, 0);
  }, []);

  function pointerEdit(type, nextend) {
    if (type.data.style !== "SUBTASK" && nextend.data.style === "SUBTASK") {
      return ["subStart", "subGet"];
    }
    if (type.data.style === "SUBTASK" && nextend.data.style === "SUBTASK") {
      return ["start", ""];
    }
    if (type.data.style === "SUBTASK" && nextend.data.style !== "SUBTASK") {
      return ["subReturn", "subEnd"];
    }
    if (type.data.style !== "SUBTASK" && nextend.data.style !== "SUBTASK") {
      return ["start", ""];
    }
    return ["", ""];
  }
  function toPage(edges, thenodes, page) {
    setPage(page);
    if (page === 0) {
      let sum = 0;
      let stateNumber = 0;
      let layoutedNodes = [...thenodes];
      let layoutedEdges = [];
      let notConnect = 0;
      let sub = 0;
      let lastTask = 0;
      for (let i = 0; i < layoutedNodes.length; i++) {
        if (i > 0) {
          if (edges[notConnect].source !== (i - 1).toString()) {
            let caseSubtask = pointerEdit(
              layoutedNodes[i - 1],
              layoutedNodes[i]
            );
            if (
              layoutedNodes[i + 1] &&
              layoutedNodes[i + 1].data.style === "SUBTASK" &&
              layoutedNodes[i].data.style !== "SUBTASK"
            ) {
              lastTask = i;
            }
            if (caseSubtask[0] === "subReturn") {
              layoutedEdges = [
                ...layoutedEdges,
                {
                  id: "e" + lastTask + "-" + i,
                  source: lastTask.toString(),
                  type: "smoothstep",
                  sourceHandle: "start",
                  target: i.toString(),
                  markerEnd: {
                    type: MarkerType.Arrow,
                  },
                },
              ];
            }
            layoutedEdges = [
              ...layoutedEdges,
              {
                id: "e" + (i - 1) + "-" + i,
                source: (i - 1).toString(),
                type: "smoothstep",
                sourceHandle: caseSubtask[0],
                targetHandle: caseSubtask[1],
                target: i.toString(),
                markerEnd: {
                  type: MarkerType.Arrow,
                },
              },
            ];
          } else {
            if (notConnect < edges.length - 1) {
              notConnect++;
            }
          }
        }
        layoutedNodes[i].id = i.toString();
        if (
          layoutedNodes[i].data.style === "STAGE" &&
          layoutedNodes[i].id !== "0"
        ) {
          stateNumber++;
          sum = 0;
          layoutedNodes[i].targetPosition = Position.Left;
        }
        if (
          i !== layoutedNodes.length - 1 &&
          layoutedNodes[i + 1].data.style === "STAGE"
        ) {
          layoutedNodes[i].sourcePosition = Position.Right;
        }
        if (layoutedNodes[i].data.style === "SUBTASK") {
          layoutedNodes[i].position = {
            x: baseHeight + defaultWidth * (stateNumber + 1),
            y: baseWidth + sum - 100 + sub,
          };
          sub += 100;
        } else {
          layoutedNodes[i].position = {
            x: baseHeight + defaultWidth * stateNumber,
            y: baseWidth + sum,
          };
          sub = 0;
          sum = sum + 120;
        }
        layoutedNodes[i].style = {
          background: "#ffffff",
          color: "#333",
          border: "1px solid #DFE2E5",
          borderRadius: "8px",
          width: 191,
          textAlign: "left",
        };
      }
      setNodes([...layoutedNodes]);
      setUpdateNode(true);
    }
    // setEdges([...layoutedEdges]);
  }

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);
  const getId = () => `dndnode_${nodeId++}`;
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const positionNode = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      setPosition(positionNode);
      toggle(type);
    },
    [toggle, reactFlowInstance]
  );

  const betterVerticle = (newNode) => {
    newNode.position.x = newNode.position.x - ((newNode.position.x - 26) % 306);
    newNode.position.y = newNode.position.y - ((newNode.position.y - 41) % 120);
    let subNodes = [...nodes.filter((data) => data.id !== newNode.id)];
    let notAdd = true;
    let shouldPush = false;
    for (let i = 0; i < subNodes.length; i++) {
      if (
        subNodes[i].position.x === newNode.position.x &&
        subNodes[i].position.y >= newNode.position.y
      ) {
        if (subNodes[i].position.y === newNode.position.y) {
          console.log(
            "YESS",
            subNodes[i].position,
            newNode.position,
            subNodes[i],
            newNode
          );
          shouldPush = true;
        }
        if (notAdd) {
          subNodes.splice(i, 0, newNode);
          notAdd = false;
        }
        if (shouldPush) {
          subNodes[i].position.y += 120;
        }
      }
    }
  };
  const onDragEnd = (event, node) => {
    event.preventDefault();
    betterVerticle(node);
  };
  function selectedData(dataget, type) {
    console.log(dataget);
    const newNode = {
      id: getId(),
      position,
      style: {
        background: "#ffffff",
        color: "#333",
        border: "1px solid #DFE2E5",
        borderRadius: "8px",
        width: 191,
        textAlign: "left",
      },
      data: {
        style: type === "STAGE" ? "STAGE" : "",
        label: <CustomNode type={type} selected={dataget}></CustomNode>,
      },
    };
    betterVerticle(newNode);
    setNodes((nds) => nds.concat(newNode));
    setNodeId(nodeId + 1);
  }

  return (
    <div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        title={openModal}
        data={selectedData}
      />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <div
          style={{ flex: 1, cursor: "pointer" }}
          onClick={() => toPage(initialEdges, initialNodes, 0)}
        >
          <div
            style={{
              flex: 1,
              fontWeight: page === 0 ? "bold" : "normal",
              paddingBottom: "16px",
            }}
          >
            React flow
          </div>
          {page === 0 && (
            <div
              style={{
                flex: 1,
                background: "#0177BD",
                height: "2px",
                width: "100%",
              }}
            ></div>
          )}
        </div>
        <div
          style={{ flex: 1, cursor: "pointer" }}
          onClick={() => toPage(initialEdges2, initialNodes2, 1)}
        >
          <div
            style={{
              flex: 1,
              fontWeight: page === 1 ? "bold" : "normal",
              paddingBottom: "16px",
            }}
          >
            React drag and drop
          </div>
          {page === 1 && (
            <div
              style={{
                flex: 1,
                background: "#0177BD",
                height: "2px",
                width: "100%",
              }}
            ></div>
          )}
        </div>
      </div>
      <div
        className="floatingedges"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Dropbar />
        <div
          style={{ height: "1600px", width: "100%" }}
          className="floatingedges"
          ref={reactFlowWrapper}
        >
          {page === 0 ? (
            <ReactFlow
              style={reactFlowStyle}
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeDragStop={onDragEnd}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              onDrop={onDrop}
              onDragOver={onDragOver}
              panOnDrag={false}
              // nodesDraggable={false}
              nodesConnectable={false}
            ></ReactFlow>
          ) : (
            <DragList></DragList>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverviewFlow;
