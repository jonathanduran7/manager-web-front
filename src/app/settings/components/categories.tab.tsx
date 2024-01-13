interface Category {
    id: number;
    name: string;
    type: 'income' | 'expense';
}

const data: Category[] = [
    {
        id: 1,
        name: 'Food',
        type: 'expense'
    },
    {
        id: 2,
        name: 'Salary',
        type: 'income'
    },
    {
        id: 3,
        name: 'Freelance',
        type: 'income'
    }
]

export default function CategoriesTab() {
    return (
        <div>
            <div className="mb-8">
                <p className="text-gray-600">
                    All your transactions will be grouped by category.
                    Create, edit and delete your categories here.
                </p>
            </div>

            <div className="flex justify-end mb-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={() => console.log('hola')}>
                    Add Category
                </button>
            </div>

            <div>
                {
                    data.map((category: Category) => {
                        return (
                            <div key={category.id} className="flex justify-between items-center border-b border-gray-200 py-3">
                                <div>
                                    <p className="text-gray-800 font-semibold">{category.name}</p>
                                    <p className="text-gray-600">{category.type.toUpperCase()}</p>
                                </div>
                                <div>
                                    <button className="text-blue-500 hover:text-blue-600">Edit</button>
                                    <button className="text-red-500 hover:text-red-600 ml-4">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}