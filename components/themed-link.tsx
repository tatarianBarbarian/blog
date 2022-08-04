import { forwardRef } from 'react'
import { useThemeUI } from 'theme-ui'

const ThemedLinkImpl = ({ className, ...props }, ref) => {
  const { theme } = useThemeUI()

  return (
    <span
      className={className}
      ref={ref}
    >
      <a
        sx={theme.styles.a}
        {...props}
      />
    </span>
  )
}

export const ThemedLink = forwardRef(ThemedLinkImpl)
