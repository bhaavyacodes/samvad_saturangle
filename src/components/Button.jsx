import { Link } from 'react-router-dom'
import './Button.css'

// A single reusable button/link used across the site.
// variant "primary" is a solid blue button, "outline" is a lighter option.
function Button({ to, children, variant = 'primary' }) {
  return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children}
    </Link>
  )
}

export default Button
