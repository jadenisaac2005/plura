import { db } from '@/lib/db'
import React from 'react'

type Props = {
    searchParams: {
        state: string
        code: string
    }
    params: { subaccountId: string }
}

const LaunchPad = async ({ params, searchParams }: Props) => {
    const subaccountDetails = await db.subAccount.findUnique({
        where: {
            id: params.subaccountId,
        },
    })
    if (!subaccountDetails) {
    return
    }

    return (
        <div>LaunchPad</div>
    )
}

export default LaunchPad
