"use client"

import { Icon } from 'semantic-ui-react';

import "./notes.scss";
// interface Button {
//     color?: string,
// }

// interface Icon {
//   name: string
// }

const Notes = () => {
  return (
    <div className="notes-page__component">
      <h1>My Notes</h1>
      <div className='add-note-button'>
        <Icon name='sticky note'/> Add New Note
      </div>
    </div>
  )
}
export default Notes;