import classNames from "classnames"
type ButtonProps = HTMLButtonElement

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames([
        "Button px-3 py-1 rounded bg-white/20",
        "hover:shadow-lg hover:shadow-pink-500 dark:hover:shadow-pink-800",
        "transition-shadow duration-500",
        className
      ])}
    >
      {children}
    </button>
  )
}
