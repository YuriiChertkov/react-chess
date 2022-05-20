import React, { FC } from "react";
import { Cell } from "../models/Cell";
import {motion} from "framer-motion"

interface CellProps {
  cell: Cell;
  selected: boolean;
  clickCell: (cell: Cell) => void;
}

export const CellComponent: FC<CellProps> = ({ cell, selected, clickCell }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => clickCell(cell)}
      style={{background: cell.available && cell.figure ? 'green': ''}}
    >
      {cell.available && !cell.figure && <div className={"available"}></div>}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        drag
        dragConstraints={{
        top: -124,
        left: -124,
        right: 124,
        bottom: 124,}}
      >{cell.figure?.logo && <img src={cell.figure.logo} alt="" />}</motion.div>
    </div>
  );
};
