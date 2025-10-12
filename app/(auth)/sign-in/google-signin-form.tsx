'use client' // the whole thing is a client component
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { SignInWithGoogle } from '@/lib/actions/user.actions'

export function GoogleSignInForm() {  // export 'GoogleSignInForm' as a react component
  const SignInButton = () => {  // define sign in button component
    const { pending } = useFormStatus() // pending from useFormStatus
    return ( // rendering a button where the caption is "Sign In with Google" ,,if pending is true its redirecting to google
      <Button disabled={pending} className='w-full' variant='outline'>
        {pending ? 'Redirecting to Google...' : 'Sign In with Google'} 
      </Button>
    )
  }
  return ( // then render a form ,, from user.action ,, and inside render "<SignInButton />" which is the above component
    <form action={SignInWithGoogle}>
      <SignInButton />
    </form>
  )
}