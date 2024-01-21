'use client'
import { useRouter } from "next/navigation";

export default function Header() {

    const router = useRouter();

    return (
        <div className="flex items-center mb-4">
            <button className="flex items-center px-4 py-2 rounded-md bg-gray-100 text-gray-600" onClick={router.back}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Go back
            </button>
        </div>
    )
}