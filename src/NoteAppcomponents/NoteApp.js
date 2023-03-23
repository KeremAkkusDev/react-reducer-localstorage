import AddNote from "./AddNote";
import Navbar from "./Navbar";
import NoteList from "./NoteList";
import NotesContextProvider from "../contexts/notesContext";



function NoteApp(){

 // const [notes, setNotes] = useState([]);
 


  //const newNote = (title, description) => {
    
    //setNotes([...notes, { id: notes.length + 1, title: title, description: description }]);
  //}

  //const removeNote = (id) => {
    
    //setNotes(notes.filter((note) => note.id !== id));
  //}


    return(
      <NotesContextProvider>
        <div className="container">
            <Navbar/>
            <NoteList/>
            <AddNote/>
        </div>
      </NotesContextProvider>
    );
}

export default NoteApp;