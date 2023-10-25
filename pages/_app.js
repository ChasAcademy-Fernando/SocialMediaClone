import { ClerkProvider } from '@clerk/nextjs'
import '@/styles/globals.css'

import { SignIn,SignedIn,SignedOut } from '@clerk/clerk-react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ClerkProvider>
    <SignedIn>
    <Component {...pageProps} />
    </SignedIn>
      <SignedOut>
        <SignIn/>
      </SignedOut>
      </ClerkProvider>
  )
}