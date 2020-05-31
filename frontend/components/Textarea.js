import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import styled from "styled-components";

const StyledTextarea = styled.div`
  textarea {
    max-width: 75rem;
  }
`;

const Textarea = (props) => {
  return (
    <StyledTextarea>
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={20}
        placeholder="Minimum 3 rows"
        {...props}
      />
    </StyledTextarea>
  );
};

export default Textarea;
