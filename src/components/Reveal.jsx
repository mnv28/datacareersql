import React from 'react'

function Reveal({ children, variant = 'fade-up', delay = 0, className = '' }) {
  const baseClasses = 'transition-all duration-700 ease-out'
  
  const variantClasses = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-left': 'opacity-0 -translate-x-8',
    'fade-right': 'opacity-0 translate-x-8',
    'blur-up': 'opacity-0 blur-sm translate-y-4'
  }
  
  const finalClasses = `${baseClasses} ${variantClasses[variant] || variantClasses['fade-up']} ${className}`
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8', 'blur-sm')
              entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0')
            }, delay)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    const element = document.querySelector(`[data-reveal="${variant}-${delay}"]`)
    if (element) {
      observer.observe(element)
    }
    
    return () => observer.disconnect()
  }, [variant, delay])
  
  return (
    <div 
      className={finalClasses}
      data-reveal={`${variant}-${delay}`}
    >
      {children}
    </div>
  )
}

export default Reveal
