import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import classes from "./index.module.css";

export default function ColorSelectorNode({ data, isConnectable }) {
  const [nodeName, setNodeName] = useState('Node 1');
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        // style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div>
        Custom Color Picker Node: <strong>{data.color}</strong>
      </div>
      <input
        className={classes.nodrag}
        type="color"
        onChange={data.onChange}
        defaultValue={data.color}
      />
      <input
        value={nodeName}
        onChange={(evt) => setNodeName(evt.target.value)}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: "#555" }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: "auto", background: "#555" }}
        isConnectable={isConnectable}
      />
    </>
  );
}
