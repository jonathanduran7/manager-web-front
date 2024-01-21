import { Category } from "../settings/interfaces/category.interface";

export const getCategories = async () => {
    return await new Promise<Category[]>((resolve) => {
        setTimeout(() => {
            const data: Category[] = []

            resolve(data);
        }, 1000);
    })
}