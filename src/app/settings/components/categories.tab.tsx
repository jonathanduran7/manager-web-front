'use client'
import { useState } from "react";
import { Category } from "../interfaces/category.interface";
import CategoryModal from "./category.modal";

const data: Category[] = [
    {
        id: 1,
        name: 'Food',
        type: 'expense'
    },
    {
        id: 2,
        name: 'Salary',
        type: 'income'
    },
    {
        id: 3,
        name: 'Freelance',
        type: 'income'
    }
]

export default function CategoriesTab() {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>(data);
    const [form, setForm] = useState<Omit<Category, 'id'>>({
        name: '',
        type: 'income'
    });
    const handleOpen = () => setOpen(!open);

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
        setCategories([
            ...categories,
            {
                id: categories.length + 1,
                name: form.name,
                type: form.type as 'income' | 'expense'
            }
        ])

        setForm({ name: '', type: 'income' })
        handleOpen();
    }

    return (
        <div>
            <div className="mb-8">
                <p className="text-gray-600">
                    All your transactions will be grouped by category.
                    Create, edit and delete your categories here.
                </p>
            </div>

            <div className="flex justify-end mb-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleOpen}>
                    Add Category
                </button>
            </div>

            <div>
                {
                    categories.map((category: Category) => {
                        return (
                            <div key={category.id} className="flex justify-between items-center border-b border-gray-200 py-3">
                                <div>
                                    <p className="text-gray-800 font-semibold">{category.name}</p>
                                    <p className="text-gray-600">{category.type.toUpperCase()}</p>
                                </div>
                                <div>
                                    <button className="text-blue-500 hover:text-blue-600">Edit</button>
                                    <button className="text-red-500 hover:text-red-600 ml-4">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <CategoryModal
                open={open}
                handleChange={handleChange}
                handleSave={handleSave}
                handleOpen={handleOpen}
                form={form}
            />
        </div>
    )
}