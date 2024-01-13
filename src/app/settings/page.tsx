'use client'
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";

export default function Settings() {
    return (
        <main className="min-h-screen p-24">

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
                        <h1>Accounts</h1>
                    </TabPanel>
                    <TabPanel key={1} value={2}>
                        <h1>Categories</h1>
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </main>
    )
}