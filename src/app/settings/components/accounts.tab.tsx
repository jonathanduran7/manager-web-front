'use client'

import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { useState } from "react";

interface Account {
    id: number;
    name: string;
    currency: 'ARS' | 'USD';
}

const data: Account[] = [
    {
        id: 1,
        name: 'Cash',
        currency: 'ARS'
    },
    {
        id: 2,
        name: 'Banco galicia',
        currency: 'ARS'
    },
    {
        id: 3,
        name: 'Mercado pago',
        currency: 'ARS'
    }
]

export default function AccountTab() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div>
            <div className="mb-8">
                <p className="text-gray-600">
                    Accounts are used to track your money.
                    You can have as many accounts as you want.
                </p>
            </div>

            <div className="flex justify-end mb-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleOpen}>
                    Add account
                </button>
            </div>

            <div>
                {
                    data.map((account: Account) => {
                        return (
                            <div key={account.id} className="flex items-center justify-between py-2">
                                <div className="flex items-center">
                                    <div>
                                        <h4 className="font-semibold">{account.name}</h4>
                                        <p className="text-gray-600">{account.currency}</p>
                                    </div>
                                </div>
                                <button className="text-gray-600 hover:text-gray-900">Edit</button>
                            </div>
                        )
                    })
                }
            </div>

            <Dialog open={open} handler={handleOpen} placeholder={""}>
                <DialogHeader placeholder={""}>Agregar nueva cuenta</DialogHeader>
                <DialogBody placeholder={""}>
                    <div className="flex flex-col">
                        <label className="text-gray-600">Name</label>
                        <input type="text" className="border border-gray-300 rounded-sm px-4 py-2" />
                    </div>

                    <div className="flex flex-col mt-4">
                        <label className="text-gray-600">Currency</label>
                        <select className="border border-gray-300 rounded-sm px-4 py-2">
                            <option value="ARS">ARS</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </DialogBody>
                <DialogFooter placeholder={""}>
                    <div className="flex gap-3">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleOpen}>Save</button>

                        <button className="text-gray-600 hover:text-gray-900" onClick={handleOpen}>Cancel</button>
                    </div>
                </DialogFooter>
            </Dialog>
        </div>
    )
}