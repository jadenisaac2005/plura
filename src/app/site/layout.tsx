import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Navigation from '@/components/site/Navigation'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            <div className='h-full'>
                <Navigation />
                {children}
            </div>
        </ClerkProvider>
    )
}

export default layout
