
import { Inter } from 'next/font/google'
import LoginForm from './Login/LoginForm'
import ShopList from '@/pages/Admin/ShopList'
import { useSession, signOut, getSession } from 'next-auth/react'
import dynamic from 'next/dynamic'


export function handleSignOut() {
  signOut() //no need to passanything this will remove all the values from cookies itself
}

export default function Home() {
  //using this session i can display the userName or email
  const { data: session, status } = useSession()
  console.log(status)

  const LoginForm = dynamic(() => import('@/pages/Login/LoginForm'), { srr: true })
  return (
    <>
      {/* {session ? <ShopList /> : <LoginForm session={session} status={status} />} */}
      <LoginForm />
    </>
  ) 
}


//for Protected Route

export async function getServerSideProps({ request }) {
  const session = await getSession({ request })  //this request object is going to return us cookies

  if (!session) {
    return {
      redirect: {
        destination: '/Login/LoginForm',
        permanent: false
      }
    }
  }
  return {
    props: { session }
  }
}

