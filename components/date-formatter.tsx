import { parseISO, format as fmt } from 'date-fns'

type Props = {
  dateString: string
  format?: string
}

const DateFormatter = ({ dateString, format = 'LLLL	d, yyyy' }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{fmt(date, format)}</time>
}

export default DateFormatter
