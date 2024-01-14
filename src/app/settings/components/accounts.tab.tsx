'use client'

import { ChangeEvent, useEffect, useState } from "react";
import { Account } from "../interfaces/account.interface";
import { AccountModal } from "./account.modal";
import { getAccounts } from "@/app/api/account.api";

export function AccountTab() {

    const [open, setOpen] = useState(false);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [form, setForm] = useState<Omit<Account, 'id'>>({ name: '', currency: 'ARS' });

    const handleOpen = () => setOpen(!open);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSave = () => {
        setAccounts([
            ...accounts,
            {
                id: accounts.length + 1,
                name: form.name,
                currency: form.currency as 'ARS' | 'USD'
            }
        ])

        setForm({ name: '', currency: 'ARS' })
        handleOpen();
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getAccounts();
            setAccounts(data);
        }

        getData();
    }, [])

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

            {
                accounts.length === 0 && (
                    <div className="flex items-center justify-center">
                        <p className="text-gray-600">
                            No accounts yet.
                        </p>
                    </div>
                )
            }

            <div>
                {
                    accounts.map((account: Account) => {
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

            <AccountModal
                open={open}
                handleChange={handleChange}
                handleSave={handleSave}
                handleOpen={handleOpen}
                form={form}
            />
        </div>
    )
}