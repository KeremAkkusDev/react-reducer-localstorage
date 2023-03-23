import { useContext, useState } from "react";
import {NotesContext} from '../contexts/notesContext';
function AddNote() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {dispatch, notes} = useContext(NotesContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch ({
            type: "ADD_NOTE",
            id: notes.length+1,
            title: title,
            description: description
          })
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text"  value={title} placeholder="Title" onChange={ (e) => setTitle(e.target.value) } />
            <input type="text"  value={description} placeholder="Description" onChange={ (e) => setDescription(e.target.value) } />
            <input type="submit" value="Add Note" />
        </form>
    );
}
export default AddNote;