import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

type CustomRenderProps = {} & Omit<RenderOptions, 'queries'>

const customRender = (ui: ReactElement, options?: CustomRenderProps) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)

export * from '@testing-library/react'
export { customRender as render }
