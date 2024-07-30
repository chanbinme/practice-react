import React from "react";

const students = [
    {
        name: "inje"
    },
    {
        name: "steve"
    },
    {
        name: "bill"
    },
    {
        name: "jeff"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>;
            })}
        </ul>
    )
}

export default AttendanceBook;