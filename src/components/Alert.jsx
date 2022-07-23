import React, {useContext} from "react";
import { AlertContext } from "../App";

export default function Alert() {
  const alert = useContext(AlertContext)
  if(!alert) return null;
  return (
    <div
      style={{
        background: "crimson",
        padding: "20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h4>This is messages very imprtant</h4>
    </div>
  );
}
