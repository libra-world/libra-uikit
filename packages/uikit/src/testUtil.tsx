import React from 'react'
import {render} from '@testing-library/react'
import PretendContext, {pretendContextDefaultValue} from './context/pretendContext'

function renderWithProviders(ui: any, options?: any, contextValues?: Record<string, unknown>) {
  return render(
    <PretendContext.Provider value={{...pretendContextDefaultValue, ...contextValues}}>
      {ui}
    </PretendContext.Provider>,
    options,
  )
}

export * from '@testing-library/react'
export {renderWithProviders as render}
