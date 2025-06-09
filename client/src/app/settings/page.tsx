import Header from '@/components/Header';
import React from 'react'

const Settings = () => {
    const userSettings = {
        username: 'John Doe',
        email: 'john.doe@example.com',
        teamName: 'Development Team',
        roleName: 'Developer'
    }

    const labelStyle = "block text-sm font-medium dark:text-white";
    const textStyle = "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";

    return (
        <div className='p-8'>
            <Header name="Settings" />
            <div className="space-y-4">
                <div>
                    <label className={labelStyle}>Username</label>
                    <div className={textStyle}>{userSettings.username}</div>
                </div>
                <div>
                    <label className={labelStyle}>Email</label>
                    <div className={textStyle}>{userSettings.email}</div>
                </div>
                <div>
                    <label className={labelStyle}>Team</label>
                    <div className={textStyle}>{userSettings.teamName}</div>
                </div>
                <div>
                    <label className={labelStyle}>Role</label>
                    <div className={textStyle}>{userSettings.roleName}</div>
                </div>
            </div>
        </div>
    )
}

export default Settings