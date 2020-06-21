import React, { useState } from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Textarea from './Textarea';

const Markdown = (props) => {
  const [text, setText] = useState('');

  const { handleChange } = props;

  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div>
      <FormControl>
        <FormControlLabel
          control={
            <Textarea
              value={text}
              onChange={(e) => {
                onChange(e);
                handleChange(e);
              }}
            />
          }
          name="note"
        />
      </FormControl>
      <div id="preview">{unified().use(parse).use(remark2react).processSync(text).result}</div>
    </div>
  );
};

export default Markdown;
