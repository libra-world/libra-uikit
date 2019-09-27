import React from 'react'

interface PretendContext {
  isPretend: boolean
}

export const pretendContextDefaultValue = {
  isPretend: true,
}

export default React.createContext<PretendContext>(pretendContextDefaultValue)
