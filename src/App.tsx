import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
// COMPONENTS
import Table from './components/Table';
import TableRow from './components/TableRow';
import NoteTableRow from './components/NoteTableRow';
import NoteTable from './components/NoteTable';
import StatTable from './components/StatTable';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <NoteTable />
                <div>create new button</div>
                <StatTable />
            </Provider>
        </div>
    );
}

export default App;
