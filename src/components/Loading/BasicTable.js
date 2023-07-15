import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { useAsyncError } from 'react-router-dom';
import './style.css';

const BasicTable = () => {
    const [tableData, setTableData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('courseOfferList.json')
            .then(res => res.json())
            .then(data => {
                setTableData(data)
                setFilterData(data)
            });
    }, []);


    const columns = [
        {
            name: "Course",
            selector: (row) => row.course,
            sortable: true,

        },
        {
            name: <>Section</>,
            selector: (row) => row.section
        },
        {
            name: "Faculty",
            selector: (row) => row.faculty
        },
        {
            name: "Time",
            selector: (row) => row.time
        },
        {
            name: "Room No",
            selector: (row) => row.room
        },
        {
            name: "Semester",
            selector: (row) => row.semester
        }

    ];

    useEffect(() => {
        const result = tableData.filter((data) => {
            return data.course.toLowerCase().match(search.toLowerCase());
        })

        setFilterData(result)
    }, [search])

    return (
        <div className='table-1'>
            <DataTable
                title="Previous Semester Course offer List"
                columns={columns}
                data={filterData}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='500px'
                highlightOnHover
                subHeader
                subHeaderComponent={<input
                    type="text"
                    placeholder='Search Here'
                    value={search}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setSearch(e.target.value)}
                />}
                subHeaderAlign='right'
            />
        </div>
    );
};

export default BasicTable;