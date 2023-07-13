import React, { useCallback, useState, useEffect, useMemo } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
  MarkerType,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

import CustomEdge from "./CustomEdge";
import DownloadButton from "./DownloadButton";
import ColorSelectorNode from "./ColorSelectorNode";
// import { initialNodes, initialEdges } from "./nodes-edges";

import classes from "./index.module.css";

const flowKey = "example-flow";

// const edgeTypes = {
//   custom: CustomEdge,
// };

const nodeTypes = {
  selectorNode: ColorSelectorNode,
};
const initBgColor = "transparent";
const getNodeId = () => `randomnode_${+new Date()}`;

const EdgesFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();

  const edgeTypes = useMemo(() => ({ custom: CustomEdge }), []);

  const onChangeColor = (event) => {
    console.log("event", event);
    setNodes((nds) =>
      nds.map((node) => {
        console.log("node", node);
        if (node.id !== "2") {
          return node;
        }

        const color = event.target.value;
        console.log("color", color);
        setBgColor(color);

        return {
          ...node,
          data: {
            ...node.data,
            color,
          },
        };
      })
    );
  };

  const initialNodes = [
    {
      id: "node-1",
      type: "input",
      data: { label: "Input 1" },
      position: { x: 250, y: 0 },
    },
    { id: "node-2", data: { label: "Node 2" }, position: { x: 150, y: 100 } },
    { id: "node-2a", data: { label: "Node 2a" }, position: { x: 0, y: 180 } },
    { id: "node-3", data: { label: "Node 3" }, position: { x: 250, y: 200 } },
    { id: "node-4", data: { label: "Node 4" }, position: { x: 400, y: 300 } },
    { id: "node-3a", data: { label: "Node 3a" }, position: { x: 150, y: 300 } },
    { id: "node-5", data: { label: "Node 5" }, position: { x: 250, y: 400 } },
    {
      id: "node-6",
      type: "output",
      data: { label: "Output 6" },
      position: { x: 50, y: 550 },
    },
    {
      id: "node-7",
      type: "output",
      data: { label: "Output 7" },
      position: { x: 250, y: 550 },
    },
    {
      id: "node-8",
      type: "output",
      data: { label: "Output 8" },
      position: { x: 525, y: 600 },
    },
    {
      id: "2",
      type: "selectorNode",
      data: { onChange: onChangeColor, color: initBgColor },
      style: {
        border: "1px solid #777",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 3,
        textAlign: "center",
      },
      position: { x: 400, y: 50 },
    },
    {
      id: "3",
      type: "selectorNode",
      data: { onChange: onChangeColor, color: initBgColor },
      style: {
        border: "1px solid #777",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 3,
        textAlign: "center",
      },
      position: { x: 400, y: 50 },
    },
  ];

  const initialEdges = [
    {
      id: "edge-1-2",
      source: "node-1",
      target: "node-2",
      label: "bezier edge (default)",
      className: "normal-edge",
    },
    {
      id: "edge-2-2a",
      source: "node-2",
      target: "node-2a",
      type: "smoothstep",
      label: "smoothstep edge",
    },
    {
      id: "edge-2-3",
      source: "node-2",
      target: "node-3",
      type: "step",
      label: "step edge",
    },
    {
      id: "edge-3-4",
      source: "node-3",
      target: "node-4",
      type: "straight",
      label: "straight edge",
    },
    {
      id: "edge-3-3a",
      source: "node-3",
      target: "node-3a",
      type: "straight",
      label: "label only edge",
      style: {
        stroke: "none",
      },
    },
    {
      id: "edge-3-5",
      source: "node-4",
      target: "node-5",
      label: "animated styled edge",
    },
    {
      id: "edge-5-6",
      source: "node-5",
      target: "node-6",
      label: "styled label",
      labelStyle: {
        fill: "red",
        fontWeight: 700,
      },
      markerEnd: {
        type: "arrow",
      },
    },
    {
      id: "edge-5-7",
      source: "node-5",
      target: "node-7",
      label: "label with styled bg",
      labelBgPadding: [8, 4],
      labelBgBorderRadius: 4,
      labelBgStyle: {
        fill: "#FFCC00",
        color: "#fff",
        fillOpacity: 0.7,
      },
      markerEnd: {
        type: "arrowclosed",
      },
    },
    {
      id: "edge-5-8",
      source: "node-5",
      target: "node-8",
      type: "custom",
      data: {
        text: "custom edge",
      },
      markerEnd: {
        type: "arrowclosed",
      },
    },
    {
      source: "node-1",
      sourceHandle: null,
      target: "2",
      targetHandle: null,
      animated: true,
      style: {
        stroke: "#fff",
      },
      id: "reactflow__edge-node-1-2",
    },
  ];
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: "#fff" } }, eds)
      ),
    []
  );
  const onSave = useCallback(() => {
    console.log("rfInstance", rfInstance);
    if (rfInstance) {
      const flow = { ...rfInstance.toObject(), bgColor: bgColor };
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance, bgColor]);

  const onInit = useCallback(() => {
    const flow = JSON.parse(localStorage.getItem(flowKey));
    console.log("flow", flow);
    if (flow) {
      const { x = 0, y = 0, zoom = 0.7 } = flow.viewport;
      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);
      setViewport({ x, y, zoom });
      setBgColor(flow.bgColor);
      return;
    }
    setNodes(initialNodes);
    setEdges(initialEdges);
    setBgColor("transparent");
    setViewport({
      x: 56.545308799191105,
      y: 73.63784695435365,
      zoom: 0.73324659691372,
    });
  }, [setNodes, setViewport, initialEdges, initialNodes, setEdges]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        console.log(flow);
        const { x = 0, y = 0, zoom = 0.7 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
        setBgColor(flow.bgColor);
        return;
      }
      setViewport({
        x: 56.545308799191105,
        y: 73.63784695435365,
        zoom: 0.73324659691372,
      });
    };

    restoreFlow();
  }, [setNodes, setViewport, setEdges]);

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: "Added node" },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  // useEffect(() => {
  //   const flow = JSON.parse(localStorage.getItem(flowKey));
  //   console.log("flow", flow);
  //   if (flow) {
  //     const { x = 0, y = 0, zoom = 0.7 } = flow.viewport;
  //     setNodes(flow.nodes || []);
  //     setEdges(flow.edges || []);
  //     setViewport({ x, y, zoom });
  //     setBgColor(flow.bgColor);
  //   }
  // }, [setEdges, setNodes, setViewport]);

  useEffect(() => {
    onInit();
  }, []);

  return (
    <div className={classes.wrapper} id={classes["download-image"]}>
      <DownloadButton />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onEdgeClick={onEdgeClick}
        onConnect={onConnect}
        onInit={setRfInstance}
        snapToGrid={true}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="top-right"
        style={{ background: bgColor }}
      >
        <MiniMap />
        <Controls />
        <Background />
        <div className={classes["save__controls"]}>
          {/* <button onClick={onSave}>save</button>
          <button onClick={onRestore}>restore</button>
          <button onClick={onInit}>return initial</button> */}
          <button onClick={onAdd}>add node</button>
        </div>
      </ReactFlow>
    </div>
  );
};

// export default EdgesFlow;

// wrapping with ReactFlowProvider is done outside of the component
function FlowWithProvider(props) {
  return (
    <ReactFlowProvider>
      <EdgesFlow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
