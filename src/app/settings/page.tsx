'use client'
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import AccountTab from "./components/accounts.tab";
import Header from "../components/header.component";
import CategoriesTab from "./components/categories.tab";

export default function Settings() {
    
    
    return (
        <div className="min-h-screen p-24">

            <Header />
    
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
                        <CategoriesTab />
                    </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    )
}