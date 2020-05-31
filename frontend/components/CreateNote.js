import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const CreateNote = () => {
  return (
    <form>
      <TextareaAutosize aria-label="minimum height" rowsMin={20} placeholder="Minimum 3 rows" />
    </form>
  );
};

export default CreateNote;
