"use client"
import type { NextPage } from 'next'
import { FirstBlock, SecondBlock } from '../../components/main/index'


const Main: NextPage = () => {
  return (
    <main className="min-h-full flex flex-col items-center">
      <FirstBlock />
      <SecondBlock />
    </main>
  )
}

export default Main