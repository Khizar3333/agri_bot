"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Layout({
  children
}) {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            ChatApp
          </Link>
          <div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200">
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 transition duration-200">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-200">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="flex-grow flex">
        {isLoggedIn && (
          <aside className="w-64 bg-gray-100 p-4">
            <h2 className="text-xl font-bold mb-4">Chat History</h2>
            {/* We'll add chat history items here later */}
            <div className="space-y-2">
              <div className="bg-white p-2 rounded shadow">Chat 1</div>
              <div className="bg-white p-2 rounded shadow">Chat 2</div>
              <div className="bg-white p-2 rounded shadow">Chat 3</div>
            </div>
          </aside>
        )}
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>)
  );
}

