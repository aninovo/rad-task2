import React from 'react';
import './App.css';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux';
// COMPONENTS
import Table from './components/Table';
import TableRow from './components/TableRow';
import NoteTableRow from './components/NoteTableRow';
import NoteTable from './components/NoteTable';
import StatTable from './components/StatTable';
import { addNote } from './redux/Actions';
import NewNoteButton from './components/NewNoteButton';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <NoteTable />
                <div>
                    <NewNoteButton ><span>New Note</span></NewNoteButton>
                </div>
                <StatTable />
            </Provider>
        </div>
    );
}

export default App;
