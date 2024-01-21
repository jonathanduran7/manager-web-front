export interface Movement {
    id: string;
    title: string;
    description?: string;
    account: string;
    category: string;
    date: Date;
    currency: string;
    amount: number;
}

export interface Result {
    [key: string]: Movement[]
}