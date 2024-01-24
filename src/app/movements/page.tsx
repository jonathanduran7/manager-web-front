'use client'
import { useEffect, useState } from "react";
import Header from "../components/header.component";
import { Movement, Result } from "./interface/movement.interface";
import { getMovements } from "../api/movement.api";
import { Button, Drawer, IconButton, Input, Select, Textarea, Typography } from "@material-tailwind/react";


export default function Movements() {

    const [movements, setMovements] = useState<Result>({});
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    useEffect(() => {

        const getGroup = (movements: Movement[]) => {
            return movements.reduce((result: Result, registro: Movement) => {
                const fecha = new Date(registro.date).toDateString();

                if (!result[fecha]) {
                    result[fecha] = [];
                }
                result[fecha].push(registro);
                return result;
            }, {});
        }

        const getData = async () => {
            const movementsStorage = localStorage.getItem('movements')

            if (movementsStorage) {
                setMovements(getGroup(JSON.parse(movementsStorage)))
                return
            }

            const movementData = await getMovements();
            localStorage.setItem('movements', JSON.stringify(movementData))
            setMovements(getGroup(movementData))
        }

        getData()
    }, [])

    return (
        <main className="min-h-screen p-24">

            <div className="flex justify-between">
                <Header />

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded h-10" onClick={openDrawer}>Add Movement</button>
            </div>



            {/* TODO: move title */}
            <div className="flex flex-col items-center justify-center mb-8">
                <h1 className="text-3xl font-semibold pb-2">Movements</h1>
                <p className="text-gray-600">
                    All your transactions will be grouped by category.
                    Create, edit and delete your categories here.
                </p>
            </div>

            {/* TODO: move empty message component */}
            {
                Object.keys(movements).length === 0 && (
                    <div className="flex items-center justify-center">
                        <p className="text-gray-600">
                            No movements yet.
                        </p>
                    </div>
                )
            }

            {/* TODO: move search and filters */}
            {
                Object.keys(movements).length > 0 && (
                    <div className="flex mb-8 flex-col md:flex-row justify-between gap-4">
                        <div className="flex items-center">
                            <input type="text" className="border border-gray-200 rounded-md px-4 py-2 w-full" placeholder="Search..." />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-4">Search</button>
                        </div>

                        <div className="flex items-center justify-end">
                            <p className="text-gray-600 mr-4">Filter by date</p>
                            <input type="date" className="border border-gray-200 rounded-md px-4 py-2" />
                        </div>
                    </div>
                )
            }

            {/* TODO: move movements list */}
            <div>
                {
                    Object.keys(movements).map((fecha) => (
                        <div key={fecha} className="border-b border-gray-200">
                            <div className="mt-4">
                                <p className="text-gray-600">{fecha}</p>
                            </div>
                            <div>
                                {movements[fecha].map((registro: any) => (
                                    <div className="flex justify-between items-center py-3">
                                        <div>
                                            <p className="text-gray-800 font-semibold">{registro.title}</p>
                                            <p className="text-gray-600">{registro.account}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-800 font-semibold">{registro.amount} {registro.currency}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* TODO: move drawer to component */}
            <Drawer open={open} onClose={closeDrawer} placeholder={""} placement="right">
                <div className="flex items-center justify-between px-4 pb-2">
                    <Typography variant="h5" color="blue-gray" placeholder={""}>
                        Add Movement
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer} placeholder={""}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <form className="flex flex-col gap-6 p-4">

                    <input
                        type="text"
                        placeholder="Title"
                        name="Title"
                        className="border border-gray-200 rounded-md px-4 py-2"
                    />

                    <input
                        type="text"
                        placeholder="Account"
                        name="Account"
                        className="border border-gray-200 rounded-md px-4 py-2"
                    />

                    <input
                        type="number"
                        placeholder="Amount"
                        name="Amount"
                        className="border border-gray-200 rounded-md px-4 py-2"
                    />

                    <select
                        className="border border-gray-200 rounded-md px-4 py-2"
                        name="Currency" >
                        <option value="ARS">ARS</option>
                        <option value="USD">USD</option>
                    </select>

                    <Button placeholder={""} onClick={closeDrawer}>Save</Button>
                </form>
            </Drawer>
        </main>
    )
}
