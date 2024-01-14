import { Account } from "../settings/interfaces/account.interface";

export const getAccounts = async () => {
    return await new Promise<Account[]>((resolve) => {
        setTimeout(() => {
            const data: Account[] = [
                {
                    id: Math.random().toString(36).substr(2) + Date.now().toString(36),
                    name: 'Cash',
                    currency: 'ARS'
                }
            ]

            resolve(data);
        }, 1000);
    })
}