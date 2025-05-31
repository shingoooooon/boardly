import React from 'react'
import { Priority } from '@/types/enums'
import ReusablePriorityPage from '../reusablePriorityPage'

const Backlog = () => {
    return (
        <ReusablePriorityPage priority={Priority.Backlog} />
    )
}

export default Backlog