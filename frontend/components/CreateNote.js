import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
const CreateNote = () => {
  return (
    <form>
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={20}
        placeholder="Minimum 3 rows"
      />
    </form>
  );
};

export default CreateNote;