import React, { useState, useEffect } from 'react';
import { getAllChildren, createChild, updateChild, deleteChild } from './apiService';

const children = () => {
    const [children, setChildren] = useState([]);
    const [formData, setFormData] = useState({ name: '', age: '', guardian: '' });
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchChildren();
    }, []);

    // Fetch all children
    const fetchChildren = async () => {
        try {
            const response = await getAllChildren();
            setChildren(response.data);
        } catch (error) {
            console.error("Error fetching children:", error);
        }
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit for creating or updating a child
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                await updateChild(editId, formData);
                setEditId(null);
            } else {
                await createChild(formData);
            }
            setFormData({ name: '', age: '', guardian: '' });
            fetchChildren();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    // Handle delete child
    const handleDelete = async (id) => {
        try {
            await deleteChild(id);
            fetchChildren();
        } catch (error) {
            console.error("Error deleting child:", error);
        }
    };

    // Set form to edit mode
    const handleEdit = (child) => {
        setFormData({ name: child.name, age: child.age, guardian: child.guardian });
        setEditId(child.id);
    };

    return (
        <div>
            <h1>Children Management</h1>

            {/* Form for adding/updating children */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="guardian"
                    placeholder="Guardian"
                    value={formData.guardian}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">{editId ? "Update Child" : "Add Child"}</button>
            </form>

            {/* List of children */}
            <ul>
                {children.map((child) => (
                    <li key={child.id}>
                        {child.name} - Age: {child.age} - Guardian: {child.guardian}
                        <button onClick={() => handleEdit(child)}>Edit</button>
                        <button onClick={() => handleDelete(child.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default children;
