import {renderHook} from '@testing-library/react-hooks'
import useThemeProps from '.'

test('should return empty object - no provider', () => {
  const {result} = renderHook(() => useThemeProps())
  expect(result.current).toEqual({})
})
