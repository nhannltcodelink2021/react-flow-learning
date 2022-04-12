import React from "react";
import CustomNode from "./CustomNode";

export const nodes = [
  {
    type: "input",
    data: {
      style: "STAGE",
      label: <CustomNode type="STAGE" selected="OPEN"></CustomNode>,
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      label: (
        <CustomNode type="MILESTONE" selected="Initiate case."></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Education evaluation required. Submit documents to evaluation agency"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode type="MILESTONE" selected="Initiate case."></CustomNode>
      ),
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Education evaluation required. Submit documents to evaluation agency"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="MILESTONE"
          selected="Send reminder to employee for completed questionnaire and supplementing documents. Initial email sent to …"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      style: "STAGE",
      label: <CustomNode type="STAGE" selected="OPEN"></CustomNode>,
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Education evaluation required. Submit documents to evaluation agency"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Education evaluation required. Submit documents to evaluation agency"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      label: (
        <CustomNode type="MILESTONE" selected="Initiate case."></CustomNode>
      ),
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      style: "STAGE",
      label: <CustomNode type="STAGE" selected="OPEN"></CustomNode>,
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Education evaluation required. Submit documents to evaluation agency"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Send reminder to employee for completed questionnaire and supplementing documents. Initial email sent to …"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Education evaluation required. Submit documents to evaluation agency"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      style: "STAGE",
      label: <CustomNode type="STAGE" selected="OPEN"></CustomNode>,
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Send reminder to employee for completed questionnaire and supplementing documents. Initial email sent to …"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode type="MILESTONE" selected="Initiate case."></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Send reminder to employee for completed questionnaire and supplementing documents. Initial email sent to …"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode type="MILESTONE" selected="Initiate case."></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          selected="Send reminder to employee for completed questionnaire and supplementing documents. Initial email sent to …."
          subflow={true}
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      style: "SUBTASK",
      label: (
        <CustomNode
          type="SUBTASK"
          subflow={true}
          selected="This is an alternate path task….1"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      style: "SUBTASK",
      label: (
        <CustomNode
          type="SUBTASK"
          selected="This is an alternate path task….2"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      style: "SUBTASK",
      label: (
        <CustomNode
          type="SUBTASK"
          selected="This is an alternate path task….3"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      style: "SUBTASK",
      label: (
        <CustomNode
          type="SUBTASK"
          subflow={true}
          selected="This is an alternate path task….4"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: (
        <CustomNode
          type="TASK"
          subflow={true}
          selected="Send reminder to employee for completed questionnaire and supplementing documents. Initial email sent to …"
        ></CustomNode>
      ),
    },
  },
  {
    data: {
      label: <CustomNode type="TASK" selected="Initiate case."></CustomNode>,
    },
  },
  {
    data: {
      label: (
        <CustomNode type="MILESTONE" selected="Initiate case."></CustomNode>
      ),
    },
  },
];

export const edges = [
  {
    id: "e21-22",
    source: "21",
    type: "smoothstep",
    target: "22",
  },
];
