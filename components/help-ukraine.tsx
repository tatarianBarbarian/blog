import { ThemedLink } from './themed-link'

export const HelpUkraine = () => (
  <div
    sx={{
      backgroundColor: '#fff',
      textAlign: 'center',
      padding: '12px',
      marginTop: '7px',
      boxShadow: '#ffcd00 0 -4px, #005cbc 0 -8px',
    }}
  >
    <ThemedLink
      href="https://savelife.in.ua/en/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ fontSize: '16px' }}
    >
      Help Ukraine Win.
    </ThemedLink>
  </div>
)
