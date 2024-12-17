'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../components/Layout'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      router.push('/chat')
    }
  }, [router])

  return (
    (<Layout>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ChatApp</h1>
        <p className="text-xl mb-8">Experience the future of communication with our AI-powered chat application.</p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-200">
            Login
          </a>
          <a
            href="/signup"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-200">
            Sign Up
          </a>
        </div>
      </div>
    </Layout>)
  );
}

