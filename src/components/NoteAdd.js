import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Button, Header, Icon, Modal} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import NoteAddForm from './NoteAddForm';

export default class NoteAdd extends Component {
	static propTypes = {
		onAddTextNote: PropTypes.func,
		onAddNoteColor:PropTypes.func,
		onAddNote:PropTypes.func,
	};
	state = {modalOpen: false};

	handleOpen = () => this.setState({modalOpen: true});

	handleClose = () => this.setState({modalOpen: false});

	render() {
		const {onAddTextNote, onAddNoteColor, onAddNote} = this.props;
		return (
			<Modal
				trigger={<Button primary
				                 icon
				                 className="add"
				                 onClick={this.handleOpen}
				>
					<Icon name="plus" />
				</Button>}
				open={this.state.modalOpen}
				onClose={this.handleClose}
				basic
				size="small"
			>
				<Header icon="edit"
				        content="Add some text" />
				<Modal.Content>
					<NoteAddForm onClose={this.handleClose}
					             onAddTextNote={onAddTextNote}
					             onAddNoteColor={onAddNoteColor}
					             onAddNote={onAddNote}
					/>
				</Modal.Content>
			</Modal>
		)
	}
}