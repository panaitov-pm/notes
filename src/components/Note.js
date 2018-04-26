import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NoteEdit from './NoteEdit';
import NoteMain from './NoteMain';

const DEFAULT_COLOR = 'greenyellow';

class Note extends Component {
	state = {
		editNote: false,
	};
	handleEditNote = () => this.setState({editNote: true});
	handleSaveNote = (e) => {
		e.preventDefault();
		this.setState({
			editNote: false
		});
		this.props.onEditNote(this.props.id);
	};

	render() {
		const {color, text, id, onDeleteNote, onEditTextNote} = this.props;
		return (
			<div className="note-wrap"
			     style={{backgroundColor: color}}>
				<NoteEdit
					text={text}
					color={color}
					editNote={this.state.editNote}
					onSaveNote={this.handleSaveNote}
					onEditTextNote={onEditTextNote}
				/>
				<NoteMain
					id={id}
					text={text}
					color={color}
					onEditNote={this.handleEditNote}
					onDeleteNote={onDeleteNote}
				/>
			</div>
		);
	}
}

Note.propTypes = {
	color: PropTypes.string,
	text : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};
Note.defaultProps = {
	color: DEFAULT_COLOR,
	text : ''
};

export default Note;

