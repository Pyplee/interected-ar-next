"use client"
import type { NextPage } from 'next'
import ARViewer from '../../components/main/ARViewer'
import { useState } from 'react'
import { FirstBlock, SecondBlock } from '../../components/main/index'


const Main: NextPage = () => {
  const [showAR, setShowAR] = useState(false)

  const handleARClick = () => {
    setShowAR(true)
  }

  return (
    <>
      <main className="min-h-full flex flex-col items-center">
        {!showAR ? (
          <>
            <FirstBlock handleARClick={handleARClick} />
            <SecondBlock />
          </>
        ) : (
          <ARViewer />
        )}
      </main>
    </>
  )
}

export default Main