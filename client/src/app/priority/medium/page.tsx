import React from 'react'
import { Priority } from '@/types/enums'
import ReusablePriorityPage from '../reusablePriorityPage'

const Medium = () => {
    return (
        <ReusablePriorityPage priority={Priority.Medium} />)
}

export default Medium