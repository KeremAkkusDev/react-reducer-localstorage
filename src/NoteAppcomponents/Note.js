import { useContext } from "react";
import {NotesContext} from '../contexts/notesContext';

export default function Note({note}) {
  const {dispatch} = useContext(NotesContext);
  const removeNote = (id) => {
    dispatch({
      type: "REMOVE_NOTE",
      id
    })
  }
  return (
    <li onClick={()=>removeNote(note.id)} key={note.id}>
        <h1 className="title">{ note.title }</h1>
        <p>{note.description}</p>
    </li>
  )
}
