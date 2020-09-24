import React from "react"
import { Link } from "gatsby"

export const Navigation = ({ next, prev }) => {
  return (
    <div className="navigation slide-in animate-second d-flex">
      <span className="mr-auto">
        {prev &&
          <Link to={`/${prev.slug}/`}>
            Prev
          </Link>
        }
      </span>
      <span className="text-right">
        {next &&
          <Link to={`/${next.slug}/`}>
            Next
          </Link>
        }
      </span>
    </div>
  )
}

export default Navigation