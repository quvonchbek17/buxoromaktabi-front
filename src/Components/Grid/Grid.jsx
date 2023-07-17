import React from "react";

function Grid({ children, minmax, gap, others }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${minmax}, 1fr))`,
        gap: gap,
      }}
      {...others}
    >
      {children}
    </div>
  );
}

export default Grid;
