import React, { useState } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";

const ColorForm = ({ updateColors }) => {
    const [newColor, setNewColor] = useState({
        color: "",
        code: ""
    });

    const handleChanges = e => {
        setNewColor({
            ...newColor,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/colors", newColor)
            .then(res => {
                console.log("New color successfully added!", res);
                updateColors(res.data);
            })
            .catch(err => console.log("Error adding new color: ", err));
    };

    return (
        <div className="new-color-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="color" value={newColor.color} onChange={handleChanges} placeholder="Color Name" />
                <input type="text" name="code" value={newColor.code} onChange={handleChanges} placeholder="Color Code" />
                <button type="submit">Add Color</button>
            </form>
        </div>
    );
};

export default ColorForm;