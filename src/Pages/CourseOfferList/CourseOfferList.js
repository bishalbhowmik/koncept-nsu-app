import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../components/Loading/Loading';

const CourseOfferList = () => {

    const [courseInfo, setCourseInfo] = useState();
    const { loading } = useContext(AuthContext);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('courseOfferList.json')
            .then(res => res.json())
            .then(data => setCourseInfo(data));
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    console.log(search);


    return (
        <div className=''>
            <form>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search By Course Name" className="input input-bordered w-full max-w-xs" />
            </form>
            <table class="table-1">
                <thead>
                    <tr>
                        <th></th>
                        <th>Course</th>
                        <th>Section</th>
                        <th>Faculty </th>
                        <th>Time </th>
                        <th>Room No</th>
                        <th>Semester</th>

                    </tr>
                </thead>



                <tbody>
                    {
                        courseInfo?.filter(item => {
                            return search.toLowerCase() === '' ? item : item.course.toLowerCase().includes(search) || item.course.toUpperCase().includes(search)}).map((course, i) => <tr key={i} className=''>
                            <td>{i + 1}</td>
                            <td>{course.course}</td>
                            <td>{course.section}</td>
                            <td>{course.faculty}</td>
                            <td>{course.time}</td>
                            <td>{course.room}</td>
                            <td>{course.semester}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        
        </div >
    );
};

export default CourseOfferList;