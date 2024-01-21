import { Account } from "../settings/interfaces/account.interface";

export const getAccounts = async () => {
    return await new Promise<Account[]>((resolve) => {
        setTimeout(() => {
            const data: Account[] = []

            resolve(data);
        }, 1000);
    })
}