import React from 'react'

type Props = {
    params: { subaccountId: string }
    searchParams: {
        code: string
    }
}

const SubaccountPageId = async ({ params, searchParams }: Props) => {

    return (
        <div>SubaccountPageId</div>
    )
}

export default SubaccountPageId
