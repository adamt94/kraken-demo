'use client'

import { useBasketStore } from '@/store/basketStore'
import BasketIcon from '../Icons/Basket'
import OctopusLogo from '../Icons/OctopusLogo'

export const NavBar = () => {
  const { basketQuantity } = useBasketStore()
  return (
    <div className='flex justify-between items-center p-4 md:p-6 lg:px-12 lg:py-6  mx-auto relative'>
      <div className='text-white text-xl font-medium'>
        <OctopusLogo className=' h-8 w-48 text-onBackground' />
      </div>
      <div className='relative'>
        <BasketIcon className='w-7 h-7 text-onBackground' />
        {basketQuantity > 0 && (
          <span className='absolute -right-1 -bottom-3 bg-primary text-onBackground w-5 h-5 items-center justify-center rounded-full text-xs flex'>
            {basketQuantity}
          </span>
        )}
      </div>
    </div>
  )
}
