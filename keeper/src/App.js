import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';




function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
          <Note 
          key = {noteItem.key}
          title = {noteItem.title}
          content = {noteItem.content}
          />
        ))}
      <Footer />
    </div>
  );
    
}

export default App;
