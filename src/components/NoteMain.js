import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const DEFAULT_COLOR = 'greenyellow';

class NoteMain extends Component {
	handleDeleteNote = () => this.props.onDeleteNote(this.props.id);

	render() {
		const {text, onEditNote} = this.props;
		return (
			<div className="note note-main"
			     >
				<p>{text}</p>
				<span>
            <Button icon
                    onClick={onEditNote}>
	            <Icon name="edit" color="violet"/>
            </Button>
            <Button icon
                    onClick={this.handleDeleteNote}>
	            <Icon  name="delete" color="red" />
            </Button>
           </span>
			</div>
		);
	}
}

NoteMain.propTypes = {
	color: PropTypes.string,
	text : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	onDeleteNote: PropTypes.func,
	onEditNote: PropTypes.func,
};
NoteMain.defaultProps = {
	color: DEFAULT_COLOR,
	text : '',
};

export default NoteMain;

