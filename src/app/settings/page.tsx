'use client'
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import AccountTab from "./components/accounts.tab";

export default function Settings() {
    
    const router = useRouter();
    
    return (
        <div className="min-h-screen p-24">

            <div className="flex items-center mb-12">
                <button className="flex items-center px-4 py-2 rounded-md bg-gray-100 text-gray-600" onClick={router.back}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go back
                </button>
            </div>

            <div className="flex flex-col items-center justify-center mb-12">
                <h1 className="text-3xl font-semibold pb-2">Settings</h1>
                <p className="text-gray-600">Manage your accounts and categories</p>
            </div>

            <Tabs value="html">
                <TabsHeader placeholder={'header'}>
                    <Tab value={1} placeholder={'Accounts'}>
                        Accounts
                    </Tab>
                    <Tab value={2} placeholder={'Categories'}>
                        Categories
                    </Tab>
                </TabsHeader>
                <TabsBody placeholder={'tabs'}>
                    <TabPanel key={1} value={1}>
                        <AccountTab />
                    </TabPanel>
                    <TabPanel key={2} value={2}>
                        <h1>Categories</h1>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    )
}