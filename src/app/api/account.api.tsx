import { Account } from "../settings/interfaces/account.interface";

export const getAccounts = async () => {
    return await new Promise<Account[]>((resolve) => {
        setTimeout(() => {
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
                }
            ]

            resolve(data);
        }, 1000);
    })
}