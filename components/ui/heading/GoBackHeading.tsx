import { Heading } from '@/components/ui/Heading'

import React from 'react'

interface GoBackHeadingProps
{
  title?: string
  leftChildren?: React.ReactNode
}

export const GoBackHeading: React.FC<GoBackHeadingProps> = ( {
  title, leftChildren
} ) =>
{

  return (
    <Heading title={ title } leftChildren={ leftChildren } underline/>
  )
}
