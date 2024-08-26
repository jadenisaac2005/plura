import React from 'react'

type Props = {
    notifications: NotificationWithUser | []
    role?: Role
    className?: string
    subAccountId?: string
}

const InfoBar = ({ notifications, subAccountId, className, role }: Props) => {
    return (
        <div>InfoBar</div>
    )
}

export default InfoBar
