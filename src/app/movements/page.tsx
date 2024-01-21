'use client'
import { useEffect, useState } from "react";
import Header from "../components/header.component";
import { Movement, Result } from "./interface/movement.interface";
import { getMovements } from "../api/movement.api";


export default function Movements() {

    const [movements, setMovements] = useState<Result>({});

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

            <Header />

            <div className="flex flex-col items-center justify-center mb-8">
                <h1 className="text-3xl font-semibold pb-2">Movements</h1>
                <p className="text-gray-600">
                    All your transactions will be grouped by category.
                    Create, edit and delete your categories here.
                </p>
            </div>


            {
                Object.keys(movements).length === 0 && (
                    <div className="flex items-center justify-center">
                        <p className="text-gray-600">
                            No movements yet.
                        </p>
                    </div>
                )
            }

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
        </main>
    )
}
