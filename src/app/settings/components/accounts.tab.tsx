'use client'

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
    return (
        <div>
            <div className="mb-8">
                <p className="text-gray-600">
                    Accounts are used to track your money.
                    You can have as many accounts as you want.
                </p>
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
        </div>
    )
}