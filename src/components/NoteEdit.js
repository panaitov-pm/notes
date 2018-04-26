import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const DEFAULT_COLOR = 'greenyellow';

class NoteEdit extends Component {

	render() {
		const {text, color, editNote, onSaveNote, onEditTextNote} = this.props;
		const activeNote = (editNote) ? 'note note-editor active' : 'note note-editor';
		return (
			<div className={activeNote}
			     style={{backgroundColor: color}}>
				<form onSubmit={onSaveNote}>
					<textarea defaultValue={text} onChange={onEditTextNote}/>
					<Button icon>
						<Icon name="save"
						      color="black" />
					</Button>
				</form>
			</div>
		);
	}
}

NoteEdit.propTypes = {
	color: PropTypes.string,
	text : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};
NoteEdit.defaultProps = {
	color: DEFAULT_COLOR
};

export default NoteEdit;

