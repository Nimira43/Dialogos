import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1 className='logo'>Dialogos</h1>
      <hr />
      <Button>Login</Button>
      <Button variant='outline'>Register</Button>
    </div>
  )
}
