import React, { useCallback } from "react";
import { getBezierPath } from "reactflow";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        // onClick={editEdgeText}
      />{" "}
      <input
        className="nodrag"
        type="text"
        onClick={() => console.log("eee")}
        //   defaultValue={data.color}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: 12 }}
          startOffset="50%"
          textAnchor="middle"
          //   onClick={onEdgeClick}
          id={id}
        >
          {data.text}
        </textPath>
      </text>
    </>
  );
}
