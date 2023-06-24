
import { Inter } from 'next/font/google'
import LoginForm from './Login/LoginForm'
import Signup from './Signup/Signup'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LoginForm/>
    // <Signup/>
  )
}
