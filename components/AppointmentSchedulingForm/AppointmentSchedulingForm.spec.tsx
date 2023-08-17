import { render } from '@/utils/tests/helper'
import { AppointmentSchedulingForm } from './AppointmentSchedulingForm'
import { AppointmentSchedulingFormProps } from './AppointmentSchedulingForm.types'

const defaultProps: AppointmentSchedulingFormProps = {
  availableDates: [],
  fetching: false,
  onSubmit: () => {},
  pokemons: [],
  regions: []
}

const scenario = (overrideProps?: AppointmentSchedulingFormProps) =>
  render(<AppointmentSchedulingForm {...defaultProps} {...overrideProps} />)

describe('AppointmentSchedulingForm', () => {
  it('shoould render the component', () => {
    const { container } = scenario()
    expect(container.firstChild).toBeInTheDocument()
  })
})
