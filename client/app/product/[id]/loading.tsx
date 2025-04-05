// loading.tsx
import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen flex-col'>
      <div className='border-4 border-t-4 border-onPrimary border-t-primary rounded-full w-16 h-16 animate-spin'></div>
      <p className='mt-4 text-lg text-tertiary'>Loading...</p>
    </div>
  )
}

export default Loading
