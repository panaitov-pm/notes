import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import Note from './components/Note';
import NoteAdd from './components/NoteAdd';
import {generate as id} from 'shortid';

import notes from './notes.json';

const OptionsMasonry = {
	percentPosition: true,
	gutter         : 15,
	itemSelector   : '.note-wrap'
};

const DEFAULT_COLOR = 'greenyellow';

class App extends Component {
	state = {
		notes: [...notes],
		text: '',
		color: DEFAULT_COLOR,
	};

	componentDidMount() {
		this.handleSavedNotes();
	}

	componentDidUpdate(prevState) {
		(prevState.notes !== this.state.notes) && this.handleSaveToLocalStorage();
	}

	handleDeleteNote = (id) => {
		this.setState(({notes}) => ({
			notes: (window.confirm('Are you sure?')) ? notes.filter(note => note.id !== id) : notes,
		}));
	};
	handleNoteColor = ({target}) => {
		const newColor = target.value;
		this.setState({
			color: newColor ? newColor : DEFAULT_COLOR
		});
	};
	handleAddNote = () => {
		const {text, color} = this.state;
		this.setState({
			notes: [{id: id(), text, color}, ...this.state.notes],
			text: '',
			color: DEFAULT_COLOR
		});
	};
	handleAddTextNote = ({target}) => {
		this.setState({
			text: target.value,
		});
	};
	handleSaveToLocalStorage = () => {
		const notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	};
	handleSavedNotes = () => {
		const savedNotes = JSON.parse(localStorage.getItem('notes'));
		(savedNotes) && this.setState({notes: savedNotes});
	};
	handleEditNote = (id) => {
		const {text, notes} = this.state;
		const editedNote = notes.map(note => {
			if(note.id === id) {
				return ({...note, text})
			} else {
				return note;
			}
		});
		this.setState(({notes}) => ({
			notes: [...editedNote],
		}));
	};
	render() {
		const {notes} = this.state;
		return (
			<div className="container">
				<h1>My Notes</h1>
				<NoteAdd onAddTextNote={this.handleAddTextNote}
				         onAddNote={this.handleAddNote}
				         onAddNoteColor={this.handleNoteColor}
				/>
				<Masonry className="grid"
				         options={OptionsMasonry}>
					{
						notes.map(note => (
							<Note
								key={note.id}
								id={note.id}
								text={note.text}
								color={note.color}
								onDeleteNote={this.handleDeleteNote}
								onEditTextNote={this.handleAddTextNote}
								onEditNote={this.handleEditNote}
							/>
						))
					}
				</Masonry>
			</div>
		);
	}
}

export default App;
