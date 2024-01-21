'use client'
import { ChangeEvent, useEffect, useState } from "react";
import { Category } from "../interfaces/category.interface";
import {CategoryModal} from ".";
import { getCategories } from "@/app/api/category.api";

const emptyForm: Omit<Category, 'id'> = { name: '', type: 'income' };

export function CategoriesTab() {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [form, setForm] = useState<Omit<Category, 'id'>>(emptyForm);
    
    const handleOpen = () => setOpen(!open);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {

        const newCategories = [
            ...categories,
            {
                id: Math.random().toString(36) + Date.now().toString(36),
                name: form.name,
                type: form.type as 'income' | 'expense'
            }]
        
        localStorage.setItem('categories', JSON.stringify(newCategories));

        setCategories(newCategories);
        setForm({ name: '', type: 'income' })
        handleOpen();
    }

    useEffect(() => {
        const getData = async () => {

            const categories = localStorage.getItem('categories');

            if (categories) {
                setCategories(JSON.parse(categories));
                return;
            }

            const data = await getCategories();
            localStorage.setItem('categories', JSON.stringify(data));
            setCategories(data);
        }

        getData();
    },[])

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

            {
                categories.length === 0 && (
                    <div className="flex items-center justify-center">
                        <p className="text-gray-600">
                            No categories yet.
                        </p>
                    </div>
                )
            }

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