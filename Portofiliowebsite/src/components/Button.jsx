import React from 'react'
import { Link } from 'react-router-dom'

function Button({ 
  children,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  to,
  href,
  fullWidth = false,
  className = "",
  ...props
}) {
  
  // Variant styles
  const getVariantClasses = (variant) => {
    switch(variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25'
      case 'secondary':
        return 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg'
      case 'outline':
        return 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent'
      case 'ghost':
        return 'text-blue-500 hover:bg-blue-50 hover:text-blue-600 bg-transparent'
      case 'danger':
        return 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg'
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg'
      default:
        return 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg'
    }
  }

  // Size styles
  const getSizeClasses = (size) => {
    switch(size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm rounded-md'
      case 'md':
        return 'px-4 py-2 text-base rounded-lg'
      case 'lg':
        return 'px-6 py-3 text-lg rounded-xl'
      case 'xl':
        return 'px-8 py-4 text-xl rounded-2xl'
      default:
        return 'px-4 py-2 text-base rounded-lg'
    }
  }

  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null
    
    const iconClasses = `w-4 h-4 ${iconPosition === 'right' ? 'ml-2' : 'mr-2'}`
    
    if (typeof icon === 'string') {
      return <span className={iconClasses}>{icon}</span>
    }
    
    return React.cloneElement(icon, { className: iconClasses })
  }

  // Loading spinner
  const renderSpinner = () => (
    <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
    </svg>
  )

  // Combine classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
  const variantClasses = getVariantClasses(variant)
  const sizeClasses = getSizeClasses(size)
  const widthClasses = fullWidth ? 'w-full' : ''
  const finalClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${className}`

  // Button content
  const buttonContent = (
    <>
      {loading ? (
        <>
          {renderSpinner()}
          Loading...
        </>
      ) : (
        <>
          {iconPosition === 'left' && renderIcon()}
          <span>{children}</span>
          {iconPosition === 'right' && renderIcon()}
        </>
      )}
    </>
  )

  // React Router Link
  if (to && !disabled) {
    return (
      <Link to={to} className={finalClasses} {...props}>
        {buttonContent}
      </Link>
    )
  }

  // External Link
  if (href && !disabled) {
    return (
      <a href={href} className={finalClasses} {...props}>
        {buttonContent}
      </a>
    )
  }

  // Regular Button
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={finalClasses}
      {...props}
    >
      {buttonContent}
    </button>
  )
}

export default Button