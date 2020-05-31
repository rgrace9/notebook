/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Markdown from '../components/Markdown';
import Editor from '../components/Editor';

export default function Home() {
  // const [noteType, setNoteType] = useState('');
  // useEffect(() => {
  //   let notes = [];
  //   localStorage.setItem('notes', JSON.stringify(notes));
  // }, []);

  // const noteChange = () => {};

  return (
    <div className="container">
      <Markdown />
      <Editor />
    </div>
  );
}
