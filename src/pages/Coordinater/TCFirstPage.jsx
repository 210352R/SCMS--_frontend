import React from "react";
import TCoDash from "./TCoDash";
import COODash from "./COODash";

export default function TCFirstPage() {
  return (
    <div>
      {/* //add props to COODash */}
      <COODash username={"User1"}></COODash>
    </div>
  );
}
