import React from 'react'
import { Priority } from '@/types/enums'
import ReusablePriorityPage from '../reusablePriorityPage'

const Low = () => {
    return (
        <ReusablePriorityPage priority={Priority.Low} />
    )
}

export default Low