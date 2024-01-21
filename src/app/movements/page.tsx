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
    }

]

export default function Movements() {
    return (
        <main className="min-h-screen p-24">

            <Header />

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold pb-2">Movements</h1>
                <p className="text-gray-600">
                    All your transactions will be grouped by category.
                    Create, edit and delete your categories here.
                </p>
            </div>


            {
                data.length === 0 && (
                    <div className="flex items-center justify-center">
                        <p className="text-gray-600">
                            No movements yet.
                        </p>
                    </div>
                )
            }

            <div>
                {
                    data.map((movement: Movement) => {
                        return (
                            <div key={movement.id} className="flex justify-between items-center border-b border-gray-200 py-3">
                                <div>
                                    <p className="text-gray-800 font-semibold">{movement.title}</p>
                                    <p className="text-gray-600">{movement.date.toDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-gray-800 font-semibold">{movement.currency} {movement.amount}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </main>
    )
}
