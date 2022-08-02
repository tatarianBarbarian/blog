import { forwardRef } from 'react'
import { useThemeUI, NavLink } from 'theme-ui'

const ThemedLinkImpl = (props, ref) => {
  const { theme } = useThemeUI()

  return (
    <span>
      <NavLink
        sx={theme.styles.a}
        ref={ref}
        {...props}
      />
    </span>
  )
}

export const ThemedLink = forwardRef(ThemedLinkImpl)
