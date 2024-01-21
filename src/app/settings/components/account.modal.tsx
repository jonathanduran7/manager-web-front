import { Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { Account } from "../interfaces/account.interface";

interface Props {
    open: boolean;
    handleChange: (e: any) => void;
    handleSave: () => void;
    handleOpen: () => void;
    form: Omit<Account, 'id'>;
}

export function AccountModal({ open, handleChange, handleSave, handleOpen, form }: Props) {
    return (
        <Dialog open={open} handler={handleOpen} placeholder={""}>
            <DialogHeader placeholder={""}>Agregar nueva cuenta</DialogHeader>
            <DialogBody placeholder={""}>
                <div className="flex flex-col">
                    <label className="text-gray-600">Name</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-sm px-4 py-2"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col mt-4">
                    <label className="text-gray-600">Currency</label>
                    <select className="border border-gray-300 rounded-sm px-4 py-2"
                        name="currency"
                        value={form.currency}
                        onChange={handleChange}
                    >
                        <option value="ARS">ARS</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
            </DialogBody>
            <DialogFooter placeholder={""}>
                <div className="flex gap-3 justify-between w-full">
                    <button className="text-gray-600 hover:text-gray-900" onClick={handleOpen}>Cancel</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
                </div>
            </DialogFooter>
        </Dialog>
    )
}