import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Markdown from './Markdown';
import Form from './styles/Form';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const INITIAL_STATE = {
  type: 'markdown',
  note: '',
};

const CreateNote = () => {
  const [text, setText] = useState('');
  const [note, setNote] = useState(INITIAL_STATE);

  const classes = useStyles();
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    setNote({
      ...note,
      [name]: val,
    });
  };

  console.log(note.type);

  return (
    <Form>
      <FormControl>
        <FormControlLabel
          control={
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="type"
              onChange={(e) => {
                handleChange(e);
              }}
              defaultValue={note.type}
            >
              <MenuItem value="markdown">Markdown</MenuItem>
              <MenuItem value="textEditor">Text Editor</MenuItem>
              <MenuItem value="codeEditor">Code Editor</MenuItem>
            </Select>
          }
          label="Note Type"
        />
      </FormControl>
      {note.type === 'markdown' && (
        <Markdown onChange={onChange} value={text} handleChange={handleChange} />
      )}
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </FormControl>
    </Form>
  );
};

export default CreateNote;
