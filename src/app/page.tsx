'use client'
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  const goToPage = (page: 'settings' | 'movements') => {
    router.push(`/${page}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4">
        <div
          onClick={() => goToPage('movements')}
          className="border-2 border-black w-40 h-40 flex justify-center items-center rounded-lg cursor-pointer">
          Movimientos
        </div>

        <div
          onClick={() => goToPage('settings')}
          className="border-2 border-black w-40 h-40 flex justify-center items-center rounded-lg cursor-pointer">
          <p>Configuraciones</p>
        </div>
      </div>
    </main>
  )
}
