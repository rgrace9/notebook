import React, { useState } from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Textarea from './Textarea';
import Form from './styles/Form';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Markdown = () => {
  const [text, setText] = useState('');
  const classes = useStyles();
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div>
      <Form>
        <FormControl>
          <FormControlLabel
            control={<Textarea value={text} onChange={onChange} />}
            label="Markdown"
            value="note"
          />
        </FormControl>
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
      <div id="preview">{unified().use(parse).use(remark2react).processSync(text).result}</div>
    </div>
  );
};

export default Markdown;
