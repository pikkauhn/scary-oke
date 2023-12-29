'use client'
import React, { useEffect, useState } from 'react'
import { FilterMatchMode } from 'primereact/api';
import { FileUpload } from 'primereact/fileupload';
import { DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import ListSongs from './ListSongs'
import Papa from 'papaparse';


const Songlist = () => {
    const defaultFilters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
    const [file, setFile] = useState(null);
    const [parsedSongData, setParsedSongData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSong, setSelectedSong] = useState(null);
    const [filters, setFilters] = useState(defaultFilters);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [songs, setSongs] = useState([])

    useEffect (() => {
        async function getSongs() {
            try {
            const song = await ListSongs();
            await setSongs(song);
            setLoading(false);
            } catch (error) {
                console.error('Failed to fetch songs: ', error);
            }
        }
        async function formatSongs() {

        }        
        getSongs();
    }, [])    

    const clearFilter = () => {
        initFilters();
    };

    const initFilters = () => {
        setFilters(defaultFilters);
        setGlobalFilterValue('');
    };
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        setFilters((prevFilters) => ({ ...prevFilters, global: { value, matchMode: FilterMatchMode.CONTAINS } }));
        setGlobalFilterValue(value);
    };

    const onSubmit = async () => {
        if (!file) return
        try {
            await Papa.parse(file, {
                worker: true,
                complete: function (result) {
                    setParsedSongData(result.data)
                }

            })
            if (parsedSongData[1]) {
                const res = await fetch('/api/loadSongs', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(parsedSongData),
                });
                if (!res.ok) throw new Error(await res.text());
            }
        } catch (e) {
            console.error(e);
        }
    };

    const columns = [
        { field: 'Artist', header: 'Artist' },
        { field: 'Title', header: 'Title' },
        { field: 'Year', header: 'Year' },
        { field: 'Duo', header: 'Duo' },
        { field: 'Explicit', header: 'Explicit' },
        { field: 'Styles', header: 'Styles' },
        { field: 'Languages', header: 'Languages' },
    ]

    const onRowSelect = (event) => {
        window.open('https://www.karafun.com/web/?song=' + event.data.Id)
    };

    const renderHeader = () => {
        return (
        <div>
            <span>
            <FileUpload mode="basic" name="upload" accept='.csv' customUpload onSelect={(e) => setFile(e.files?.[0])} uploadHandler={onSubmit} />
            </span>
            <span>
                <Button className="mr-2" type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText id="employeeSearch" value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </span>
        </div>
        )
    }

    const header = renderHeader();

    return (
        <div>         
            <DataTable
            value={songs}
            paginator
            rows={20}
            filters={filters}
            loading={loading}
            filterDisplay="row"
            selectionMode="single"
            selection={selectedSong ? selectedSong : null}
            onSelectionChange={(e) => setSelectedSong(e.value)}
            onRowSelect={onRowSelect}
            metaKeySelection={false}
            globalFilterFields={['Artist', 'Title', 'Year', 'Duo', 'Explicit', 'Styles', 'Languages']}
            header={header}
            emptyMessage="No Songs Found"
            tableStyle={{ minWidth: '50rem' }}
        >
            {columns.map((col) => {
                return (
                <Column key={col.field} sortable field={col.field} header={col.header} />
                )
            })
            }
        </DataTable>
            
        </div>
    )
}

export default Songlist
