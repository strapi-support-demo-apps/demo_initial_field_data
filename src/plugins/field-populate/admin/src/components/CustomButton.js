import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import React, { useEffect } from "react";

const CustomButton = () => {
  const cmeHook = useCMEditViewDataManager();
  console.log(cmeHook);
  useEffect(() => {
    const timedAction = setTimeout(() => {
      cmeHook.onChange({
        target: {
          name: "date_from",
          value: "2024-10-07T22:00:00.000Z",
        },
      });
    }, 500);

    return () => clearTimeout(timedAction);
  }, []);
  return (
    <div>
      <p
        style={{
          color: "white",
          fontWeight: "bold",
          border: "5px solid white",
          margin: 5,
          padding: 5,
        }}
      >
        The injected component!!
      </p>
    </div>
  );
};

export default CustomButton;
