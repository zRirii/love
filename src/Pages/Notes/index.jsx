import "../../Assets/Styles/Note.css";
import Notess from "../../Components/NoteComponents/Notes";
import Header from "../../Components/NoteComponents/Header";


const Notes = () => {
    return (
        <div className="main">
            <Header />
            <Notess />
        </div>
    );
}
export default Notes;