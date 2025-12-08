'use client'

import React from 'react'

const CustomLogin: React.FC = () => {
  React.useEffect(() => {
    const addPasswordToggle = () => {
      // Find the password input field
      const passwordInput = document.querySelector('input[type="password"][name="password"]') as HTMLInputElement
      
      if (!passwordInput) return
      
      // Check if we already added the toggle button
      const existingToggle = passwordInput.parentElement?.querySelector('.password-toggle-btn')
      if (existingToggle) return
      
      // Find the parent container (usually has class like 'field-type' or similar)
      const fieldContainer = passwordInput.closest('.field-type') || passwordInput.parentElement
      if (!fieldContainer) return
      
      // Create wrapper for positioning
      const inputWrapper = document.createElement('div')
      inputWrapper.style.position = 'relative'
      inputWrapper.style.display = 'flex'
      inputWrapper.style.alignItems = 'center'
      
      // Wrap the input
      passwordInput.parentNode?.insertBefore(inputWrapper, passwordInput)
      inputWrapper.appendChild(passwordInput)
      
      // Adjust input padding for the icon
      passwordInput.style.paddingRight = '45px'
      
      // Create toggle button
      const toggleBtn = document.createElement('button')
      toggleBtn.type = 'button'
      toggleBtn.className = 'password-toggle-btn'
      toggleBtn.setAttribute('aria-label', 'Show password')
      toggleBtn.style.cssText = `
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6c757d;
        transition: color 0.2s ease;
        z-index: 10;
      `
      
      // Eye icon (show password)
      const eyeIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      `
      
      // Eye slash icon (hide password)
      const eyeSlashIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>
      `
      
      toggleBtn.innerHTML = eyeIcon
      
      // Add hover effect
      toggleBtn.addEventListener('mouseenter', () => {
        toggleBtn.style.color = '#184504'
      })
      
      toggleBtn.addEventListener('mouseleave', () => {
        toggleBtn.style.color = '#6c757d'
      })
      
      // Toggle password visibility
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text'
          toggleBtn.innerHTML = eyeSlashIcon
          toggleBtn.setAttribute('aria-label', 'Hide password')
        } else {
          passwordInput.type = 'password'
          toggleBtn.innerHTML = eyeIcon
          toggleBtn.setAttribute('aria-label', 'Show password')
        }
      })
      
      inputWrapper.appendChild(toggleBtn)
    }
    
    // Try multiple times with delays to catch the password field
    const timers: NodeJS.Timeout[] = []
    timers.push(setTimeout(addPasswordToggle, 100))
    timers.push(setTimeout(addPasswordToggle, 300))
    timers.push(setTimeout(addPasswordToggle, 500))
    timers.push(setTimeout(addPasswordToggle, 1000))
    
    // Watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          addPasswordToggle()
          break
        }
      }
    })
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    })
    
    return () => {
      timers.forEach(timer => clearTimeout(timer))
      observer.disconnect()
    }
  }, [])
  
  return null
}

export default CustomLogin
