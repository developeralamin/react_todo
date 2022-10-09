import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const TodoEmpty = () => {
  return (
    <p className="bg-warning p-3">
      <FontAwesomeIcon icon={faInfoCircle} />
      Sorry,No todo found. Please Create one.
    </p>
  );
};

export default TodoEmpty;
