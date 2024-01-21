import Header from "../components/header.component";

interface Movement {
    id: string;
    title: string;
    description?: string;
    account: string;
    category: string;
    date: Date;
    currency: string;
    amount: number;
}

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

interface Result {
    [key: string]: Movement[]
}

const registrosAgrupados = data.reduce((result: Result, registro: Movement) => {
    const fecha = registro.date.toDateString();

    if (!result[fecha]) {
        result[fecha] = [];
    }
    result[fecha].push(registro);
    return result;
}, {});

export default function Movements() {
    return (
        <main className="min-h-screen p-24">

            <Header />

            <div className="flex flex-col items-center justify-center mb-10">
                <h1 className="text-3xl font-semibold pb-2">Movements</h1>
                <p className="text-gray-600">
                    All your transactions will be grouped by category.
                    Create, edit and delete your categories here.
                </p>
            </div>


            {
                Object.keys(registrosAgrupados).length === 0 && (
                    <div className="flex items-center justify-center">
                        <p className="text-gray-600">
                            No movements yet.
                        </p>
                    </div>
                )
            }

            <div>
                {
                    Object.keys(registrosAgrupados).map((fecha) => (
                        <div key={fecha} className="border-b border-gray-200">
                            <div className="mt-4">
                                <p className="text-gray-600">{fecha}</p>
                            </div>
                            <div>
                                {registrosAgrupados[fecha].map((registro: any) => (
                                    <div className="flex justify-between items-center py-3">
                                        <div>
                                            <p className="text-gray-800 font-semibold">{registro.title}</p>
                                            <p className="text-gray-600">{registro.account}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-800 font-semibold">{registro.currency} {registro.amount}</p>
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
