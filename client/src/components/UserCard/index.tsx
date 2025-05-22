import { User } from '@/types/types'
import Image from 'next/image'
import React from 'react'

type userCardProps = {
    user: User
}

const UserCard = ({ user }: userCardProps) => {
    return (
        <div className='flex items-center rounded border p-4 shadow'>
            {user.profilePictureUrl && (
                <Image
                    src={user.profilePictureUrl}
                    alt="profile picture"
                    width={32}
                    height={32}
                    className='rounded-full'
                />
            )}
            <div>
                <h3>{user.username}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default UserCard