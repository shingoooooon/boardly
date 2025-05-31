import React from 'react'
import { Priority } from '@/types/enums'
import ReusablePriorityPage from '../reusablePriorityPage'

const Urgent = () => {
    return (
        <ReusablePriorityPage priority={Priority.Urgent} />
    )
}

export default Urgent