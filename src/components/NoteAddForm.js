import React, {Component} from 'react'

import { Button, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const NoteAddForm = (props) => {
	const {onClose, onAddTextNote, onAddNoteColor, onAddNote} = props;

	return (
		<Form onSubmit={onClose}>
			<Form.Group>
				<Form.TextArea label="Note Text"
				               placeholder="Note Content"
				               onChange={onAddTextNote}
				/>
				<Form.Input type="color"
				            label="Note color"
				            onChange={onAddNoteColor}
				            defaultValue="#adff2f"
				/>
			</Form.Group>
			<Form.Field>
				<Button type='submit'
				        primary
				        onClick={onAddNote}
				>Add Note</Button>
			</Form.Field>
		</Form>
	);
};


export default NoteAddForm;