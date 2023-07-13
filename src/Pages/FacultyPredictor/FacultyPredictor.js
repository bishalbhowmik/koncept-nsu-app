import React from 'react';
import './FacultyPredictor.css';

const FacultyPredictor = () => {
    return (
        <div>
            <table class="table-1">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Section</th>
                        <th>Faculty </th>
                        <th>Time </th>
                        <th>Room No</th>
                        <th>Semester</th>
                        
                    </tr>
                </thead> 				
                <tbody>
                    <tr>
                        <td data-label="S.No">ACT202</td>
                        <td data-label="Name">1</td>  
                        <td data-label="Age">AhU</td>
                        <td data-label="Marks%">ST 01:50 PM - 02:50 PM</td>
                        <td data-label="Staus">NAC210</td>
                        <td data-label="Staus">Spring 2023 (231)</td>
                    </tr>

                 
                </tbody>
            </table>
        </div>
    );
};

export default FacultyPredictor;