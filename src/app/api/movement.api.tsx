import { Movement } from "../movements/interface/movement.interface";

export const getMovements = async () => {
    return await new Promise<Movement[]>((resolve) => {
        setTimeout(() => {
            const data: Movement[] = [
                {
                    id: '1',
                    title: 'Salary',
                    account: 'Cash',
                    category: 'Salary',
                    date: new Date(),
                    currency: 'USD',
                    amount: 400
                },
                {
                    id: '2',
                    title: 'Futbol 7',
                    account: 'Cash',
                    category: 'Sports',
                    date: new Date(),
                    currency: 'ARS',
                    amount: 1200
                },
                {
                    id: '3',
                    title: 'Futbol 5',
                    account: 'Cash',
                    category: 'Sports',
                    date: new Date("2023-08-01"),
                    currency: 'ARS',
                    amount: 1200
                },
                {
                    id: '4',
                    title: 'Futbol 5',
                    account: 'Cash',
                    category: 'Sports',
                    date: new Date("2023-08-01"),
                    currency: 'ARS',
                    amount: 1200
                },
                {
                    id: '5',
                    title: 'Futbol 5',
                    account: 'Cash',
                    category: 'Sports',
                    date: new Date("2023-09-01"),
                    currency: 'ARS',
                    amount: 1200
                },
                {
                    id: '6',
                    title: 'Futbol 5',
                    account: 'Cash',
                    category: 'Sports',
                    date: new Date("2023-09-01"),
                    currency: 'ARS',
                    amount: 1200
                },

            ]

            resolve(data);
        }, 1000);
    })
}