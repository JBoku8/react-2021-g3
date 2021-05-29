import AddNoteForm from '../../components/forms/add-note-form';
import NoteList from '../../components/list/note-list';
import NotesProviderComponent from '../../contexts/NotesProvider';

function NotesPage() {
  return (
    <NotesProviderComponent>
      <div className="row">
        <h2>Notes Page</h2>
        <div className="col-4">
          <AddNoteForm />
        </div>

        <div className="col-8 d-flex flex-wrap">
          <NoteList />
        </div>
      </div>
    </NotesProviderComponent>
  );
}
export default NotesPage;
