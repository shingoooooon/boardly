import React from 'react'
import { Priority } from '@/types/enums'
import ReusablePriorityPage from '../reusablePriorityPage'

const High = () => {
    return (
        <ReusablePriorityPage priority={Priority.High} />
    )
}

export default High