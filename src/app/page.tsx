import React from 'react'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <>
      <div className='bg-[#111] text-[#87ceeb] p-10 border-b-8 border-[#ffa500]'>
      <h1 className='logo'>Synergasia</h1>
      <p>by NimiraTech</p>
      <h4>Technologies</h4>
      <h5>Next JS</h5>
      <h5>TypeScript</h5>
      <h5>Tailwind</h5>
      <h5>Shadcn-UI</h5>
    </div>
    <div className='bg-[#87ceed] text-[#111] p-10 border-b-8 border-[#ffa500]'>
      <Button variant='synergasia'>Button</Button>
    </div>
    </>
    
  )
}
