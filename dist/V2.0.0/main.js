const AlertismCss = `${'\x0D\x0A@import url(\'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap\');\x0D\x0A\x0D\x0A.alert-backdrop *\x0D\x0A{\x0D\x0A  margin: 0;\x0D\x0A  padding: 0;\x0D\x0A  box-sizing: border-box;\x0D\x0A  user-select: none;\x0D\x0A  outline: none;\x0D\x0A  -moz-user-select: none;\x0D\x0A  -webkit-user-select: none;\x0D\x0A  -webkit-tap-highlight-color: transparent;\x0D\x0A  font-family: \'Montserrat\', sans-serif;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop *::-webkit-scrollbar\x0D\x0A{\x0D\x0A  display: none;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-hide\x0D\x0A{\x0D\x0A  display: none !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-dark\x0D\x0A{\x0D\x0A  background: #000 !important;\x0D\x0A  color: #fff !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-dark .alert-close\x0D\x0A{\x0D\x0A  color: #fff !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-dark .alert-input\x0D\x0A{\x0D\x0A  background: #000 !important;\x0D\x0A  border-color: #ccc;\x0D\x0A  color: #fff !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-glass\x0D\x0A{\x0D\x0A  background: rgba(255,255,255,0.1) !important;\x0D\x0A  color: #fff !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-glass .alert-glassmorphism\x0D\x0A{\x0D\x0A  position: absolute;\x0D\x0A  top: 0;\x0D\x0A  left: 0;\x0D\x0A  height: 100%;\x0D\x0A  width: 100%;\x0D\x0A  background-color: #000;\x0D\x0A  z-index: -1;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-glass .alert-glassmorphism::before\x0D\x0A{\x0D\x0A  content: \'\';\x0D\x0A  position: absolute;\x0D\x0A  top: 0;\x0D\x0A  left: 0;\x0D\x0A  height: 100%;\x0D\x0A  width: 100%;\x0D\x0A  background: linear-gradient(45deg, red, blue);\x0D\x0A  clip-path: circle(40% at right 80%);\x0D\x0A}\x0D\x0A\x0D\x0A.alert-glass .alert-glassmorphism::after\x0D\x0A{\x0D\x0A  content: \'\';\x0D\x0A  position: absolute;\x0D\x0A  top: 0;\x0D\x0A  left: 0;\x0D\x0A  height: 100%;\x0D\x0A  width: 100%;\x0D\x0A  background: linear-gradient(45deg, #1fe6ff, #673ab7);\x0D\x0A  clip-path: circle(40% at left 25%);\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-glass .alert-close\x0D\x0A{\x0D\x0A  color: #fff !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-glass .alert-input\x0D\x0A{\x0D\x0A  background-color: rgba(255, 255, 255, 0.2) !important;\x0D\x0A  border-color: rgba(255, 255, 255, 0.5) !important;\x0D\x0A  color: #fff !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-glass .alert-footer\x0D\x0A{\x0D\x0A  border-color: rgba(255, 255, 255, 0.2) !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-glass .alert-time-line\x0D\x0A{\x0D\x0A  background: rgba(255, 255, 255, 0.2) !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-glass .alert-buttons-container button\x0D\x0A{\x0D\x0A  background-color: rgba(255, 255, 255, 0.1) !important;\x0D\x0A  border-color: rgba(255, 255, 255, 0.2) !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-glass .alert-buttons-container button:active\x0D\x0A{\x0D\x0A  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.01),\x0D\x0A              inset  2px  2px 6px rgba(0, 0, 0, 0.8);\x0D\x0A}\x0D\x0A\x0D\x0A.alert-light-neumorphism\x0D\x0A{\x0D\x0A  background: #ebf5fc !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-light-neumorphism *\x0D\x0A{\x0D\x0A  color: #32a3b1 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-light-neumorphism .alert-input\x0D\x0A{\x0D\x0A  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 1),\x0D\x0A              inset  2px  2px 6px rgba(0, 0, 0, 0.1) !important;\x0D\x0A  background: transparent !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-light-neumorphism .alert-buttons-container button\x0D\x0A{\x0D\x0A  background: #ebf5fc !important;\x0D\x0A  box-shadow: -2px -2px 6px rgba(255, 255, 255, 1),\x0D\x0A               2px  2px 6px rgba(0, 0, 0, 0.1) !important;\x0D\x0A  border-color: #ebf5fc !important;\x0D\x0A  border-radius: 10px !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-light-neumorphism .alert-buttons-container button:active\x0D\x0A{\x0D\x0A  color: #006c9c !important;\x0D\x0A  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 1),\x0D\x0A              inset  2px  2px 6px rgba(0, 0, 0, 0.1) !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-light-neumorphism .alert-footer\x0D\x0A{\x0D\x0A  border-color: #32a3b1 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-light-neumorphism .alert-time-line\x0D\x0A{\x0D\x0A  background: #32a3b1 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-dark-neumorphism\x0D\x0A{\x0D\x0A  background: #131419 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-dark-neumorphism *\x0D\x0A{\x0D\x0A  color: #03a9f4 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-dark-neumorphism .alert-input\x0D\x0A{\x0D\x0A  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.01),\x0D\x0A              inset  2px  2px 6px rgba(0, 0, 0, 0.8) !important;\x0D\x0A  background: #131419 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-dark-neumorphism .alert-buttons-container button\x0D\x0A{\x0D\x0A  background: #131419 !important;\x0D\x0A  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.01),\x0D\x0A               2px  2px 6px rgba(0, 0, 0, 0.8) !important;\x0D\x0A  border-color: #131419 !important;\x0D\x0A  border-radius: 10px !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-dark-neumorphism .alert-buttons-container button:active\x0D\x0A{\x0D\x0A  color: #006c9c !important;\x0D\x0A  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.01),\x0D\x0A              inset  2px  2px 6px rgba(0, 0, 0, 0.8) !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container.alert-dark-neumorphism .alert-footer\x0D\x0A{\x0D\x0A  border-color: #03a9f4 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-dark-neumorphism .alert-time-line\x0D\x0A{\x0D\x0A  background: #03a9f4 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop\x0D\x0A{\x0D\x0A  position: fixed;\x0D\x0A  display: flex;\x0D\x0A  justify-content: center;\x0D\x0A  align-items: center;\x0D\x0A  min-height: 100vh;\x0D\x0A  top: 0;\x0D\x0A  left: 0;\x0D\x0A  height: 100vh;\x0D\x0A  width: 100vw;\x0D\x0A  background: rgb(0 0 0 / 50%);\x0D\x0A  backdrop-filter: blur(5px);\x0D\x0A  z-index: calc(10000000 * 1000000);\x0D\x0A  overflow: hidden;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-top-left\x0D\x0A{\x0D\x0A  justify-content: flex-start !important;\x0D\x0A  align-items: flex-start !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-top\x0D\x0A{\x0D\x0A  justify-content: center !important;\x0D\x0A  align-items: flex-start !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-top-right\x0D\x0A{\x0D\x0A  justify-content: flex-end !important;\x0D\x0A  align-items: flex-start !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-center-left\x0D\x0A{\x0D\x0A  justify-content: flex-start !important;\x0D\x0A  align-items: center !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-center\x0D\x0A{\x0D\x0A  justify-content: center !important;\x0D\x0A  align-items: center !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-center-right\x0D\x0A{\x0D\x0A  justify-content: flex-end !important;\x0D\x0A  align-items: center !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-bottom-left\x0D\x0A{\x0D\x0A  justify-content: flex-start !important;\x0D\x0A  align-items: flex-end !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-bottom\x0D\x0A{\x0D\x0A  justify-content: center !important;\x0D\x0A  align-items: flex-end !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-bottom-right\x0D\x0A{\x0D\x0A  justify-content: flex-end !important;\x0D\x0A  align-items: flex-end !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  background: #fff;\x0D\x0A  color: #000;\x0D\x0A  padding: 25px 20px;\x0D\x0A  margin: 10px;\x0D\x0A  width: 50%;\x0D\x0A  max-height: calc(100% - 5vw);\x0D\x0A  max-width: calc(100% - 5vw);\x0D\x0A  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.5),\x0D\x0A               5px  5px 6px rgba(0, 0, 0, 0.5);\x0D\x0A  overflow: visible;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-heading\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  text-align: center;\x0D\x0A  margin: 10px 0 20px 0;\x0D\x0A  font-size: 25px;\x0D\x0A  font-weight: 800;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-content\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  text-align: left;\x0D\x0A  margin: 0 5px 20px 5px;\x0D\x0A  font-size: 18px;\x0D\x0A  font-weight: 700;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-buttons-container\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  display: flex;\x0D\x0A  flex-direction: row-reverse;\x0D\x0A  justify-content: space-between;\x0D\x0A  align-items: center;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-buttons-container button\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  padding: 5px 7px;\x0D\x0A  background: #2196f3;\x0D\x0A  border: 2px solid #2196f3;\x0D\x0A  color: #fff;\x0D\x0A  border-radius: 5px;\x0D\x0A  font-size: 15px;\x0D\x0A  transition: 0.5s;\x0D\x0A  font-weight: 600;\x0D\x0A  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.01),\x0D\x0A               2px  2px 6px rgba(0, 0, 0, 0.8);\x0D\x0A  cursor: pointer;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-buttons-container button:hover\x0D\x0A{\x0D\x0A  transform: scale(0.95);\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-buttons-container button:active\x0D\x0A{\x0D\x0A  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.01),\x0D\x0A              inset  2px  2px 6px rgba(0, 0, 0, 0.8);\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-close\x0D\x0A{\x0D\x0A  position: absolute;\x0D\x0A  right: 0;\x0D\x0A  margin: 0 20px;\x0D\x0A  cursor: pointer;\x0D\x0A  font-family: Arial, Helvetica, sans-serif !important;\x0D\x0A  font-weight: 600;\x0D\x0A  background-color: transparent;\x0D\x0A  border: none;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-close:hover\x0D\x0A{\x0D\x0A  color: #f03d30 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-close:active\x0D\x0A{\x0D\x0A  transform: scale(0.95);\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container svg.icon\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  height: 70px;\x0D\x0A  width: 70px;\x0D\x0A  left: 50%;\x0D\x0A  transform: translateX(-50%);\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container input:not([type]).alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="text"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="number"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="tel"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="password"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="email"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="url"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="date"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="month"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="week"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="datetime-local"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="time"].alert-input,\x0D\x0A.alert-backdrop .alert-container input[type="search"].alert-input,\x0D\x0A.alert-backdrop .alert-container textarea.alert-input\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  width: 100%;\x0D\x0A  margin: 0 0 20px 0;\x0D\x0A  border: 2px solid #ccc;\x0D\x0A  border-radius: 5px;\x0D\x0A  padding: 5px;\x0D\x0A  backdrop-filter: blur(5px);\x0D\x0A  transition: 0.5s;\x0D\x0A  font-weight: 700;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container input:not([type]).alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="text"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="number"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="tel"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="password"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="email"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="url"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="date"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="month"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="week"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="datetime-local"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="time"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input[type="search"].alert-input:hover,\x0D\x0A.alert-backdrop .alert-container textarea.alert-input:hover,\x0D\x0A.alert-backdrop .alert-container input:not([type]).alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="text"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="number"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="tel"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="password"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="email"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="url"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="date"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="month"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="week"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="datetime-local"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="time"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container input[type="search"].alert-input:focus,\x0D\x0A.alert-backdrop .alert-container textarea.alert-input:focus\x0D\x0A{\x0D\x0A  border-color: #2196f3 !important;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container input[type="checkbox"].alert-input\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  appearance: none;\x0D\x0A  -webkit-appearance: none;\x0D\x0A  -moz-appearance: none;\x0D\x0A  border: 4px solid #ccc;\x0D\x0A  padding: 10px;\x0D\x0A  margin: 0 0 20px 0;\x0D\x0A  background: transparent !important;\x0D\x0A  cursor: pointer;\x0D\x0A  transition: 0.5s;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container input[type="checkbox"].alert-input:checked\x0D\x0A{\x0D\x0A  border-color: #2196f3 !important;\x0D\x0A  transform: rotate(45deg) translate(5px, -10px);\x0D\x0A  border-top-color: transparent !important;\x0D\x0A  border-left-color: transparent !important;\x0D\x0A  padding: 10px 4px;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-footer\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  border-top: 2px solid rgb(30, 30, 30);\x0D\x0A  margin: 25px 0 0 0;\x0D\x0A  padding: 20px 0 0 0;\x0D\x0A  text-align: center;\x0D\x0A  font-weight: 700;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-backdrop .alert-container .alert-time-line\x0D\x0A{\x0D\x0A  position: absolute;\x0D\x0A  bottom: 0;\x0D\x0A  left: 0;\x0D\x0A  width: 100%;\x0D\x0A  height: 7px;\x0D\x0A  background: rgb(30, 30, 30);\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes closeTimeLine\x0D\x0A{\x0D\x0A  from\x0D\x0A  {\x0D\x0A    width: 100%;\x0D\x0A  }\x0D\x0A  to\x0D\x0A  {\x0D\x0A    width: 0;\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes zoom-in\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: scale(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: scale(1.1);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: scale(0.9);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: scale(1);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes top\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: translateY(-200%);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: translateY(10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: translateY(-10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateY(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes bottom\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: translateY(200%);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: translateY(-10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: translateY(10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateY(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes left\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: translateX(-200%);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: translateX(10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: translateX(-10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateX(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes right\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: translateX(200%);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: translateX(-10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: translateX(10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateX(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes zoom-in-out\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: scale(1);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: scale(0.9);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: scale(1.1);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: scale(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes top-out\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: translateY(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: translateY(10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: translateY(-10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateY(200%);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes bottom-out\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: translateY(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: translateY(-10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: translateY(10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateY(-200%);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes left-out\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: translateX(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: translateX(10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: translateX(-10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateX(200%);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes right-out\x0D\x0A{\x0D\x0A  0%, 25%\x0D\x0A  {\x0D\x0A    transform: translateX(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  50%\x0D\x0A  {\x0D\x0A    transform: translateX(-10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  75%\x0D\x0A  {\x0D\x0A    transform: translateX(10%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateX(-200%);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A.alert-toast-container *\x0D\x0A{\x0D\x0A  margin: 0;\x0D\x0A  padding: 0;\x0D\x0A  box-sizing: border-box;\x0D\x0A  user-select: none;\x0D\x0A  outline: none;\x0D\x0A  -moz-user-select: none;\x0D\x0A  -webkit-user-select: none;\x0D\x0A  -webkit-tap-highlight-color: transparent;\x0D\x0A  font-family: \'Montserrat\', sans-serif;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-toast-container *::-webkit-scrollbar\x0D\x0A{\x0D\x0A  display: none;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-toast-container\x0D\x0A{\x0D\x0A  position: fixed;\x0D\x0A  display: flex;\x0D\x0A  justify-content: center;\x0D\x0A  align-items: flex-end;\x0D\x0A  top: 0;\x0D\x0A  left: 0;\x0D\x0A  height: 100vh;\x0D\x0A  width: 100vw;\x0D\x0A  z-index: calc(10000000 * 1000000);\x0D\x0A}\x0D\x0A\x0D\x0A.alert-toast-container .alert-toast\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  display: flex;\x0D\x0A  justify-content: center;\x0D\x0A  align-items: center;\x0D\x0A  padding: 15px;\x0D\x0A  margin: 20px;\x0D\x0A  min-width: 200px;\x0D\x0A  background: #333;\x0D\x0A  color: #fff;\x0D\x0A  max-width: calc(100% - 5vw);\x0D\x0A  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.5),\x0D\x0A               5px  5px 6px rgba(0, 0, 0, 0.5);\x0D\x0A  text-align: center;\x0D\x0A  overflow: hidden;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-toast-container .alert-toast svg.icon\x0D\x0A{\x0D\x0A  position: relative;\x0D\x0A  height: 50px;\x0D\x0A  width: 50px;\x0D\x0A  margin: 0 10px 0 0;\x0D\x0A}\x0D\x0A\x0D\x0A.alert-toast-container .alert-toast .alert-time-line\x0D\x0A{\x0D\x0A  position: absolute;\x0D\x0A  bottom: 0;\x0D\x0A  left: 0;\x0D\x0A  width: 100%;\x0D\x0A  height: 5px;\x0D\x0A  background: rgba(255, 255, 255, 0.8);\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Zoom-in\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: scale(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: scale(1);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Top\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: translateY(-200%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateY(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Bottom\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: translateY(200%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateY(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Left\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: translateX(-200%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateX(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Right\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: translateX(200%);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateX(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Zoom-in-out\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: scale(1);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: scale(0);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Bottom-out\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: translateY(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateY(200%);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Top-out\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: translateY(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateY(-200%);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Right-out\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: translateX(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateX(200%);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@keyframes Left-out\x0D\x0A{\x0D\x0A  0%\x0D\x0A  {\x0D\x0A    transform: translateX(0);\x0D\x0A  }\x0D\x0A\x0D\x0A  100%\x0D\x0A  {\x0D\x0A    transform: translateX(-200%);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@media(max-width:991px)\x0D\x0A{\x0D\x0A  .alert-backdrop .alert-container\x0D\x0A  {\x0D\x0A    width: 60%;\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@media(max-width:661px)\x0D\x0A{\x0D\x0A  .alert-backdrop .alert-container\x0D\x0A  {\x0D\x0A    width: calc(100% - 10vw);\x0D\x0A  }\x0D\x0A}\x0D\x0A\x0D\x0A@media(max-width:331px)\x0D\x0A{\x0D\x0A  .alert-backdrop .alert-container\x0D\x0A  {\x0D\x0A    width: calc(100% - 5vw);\x0D\x0A  }\x0D\x0A}\x0D\x0A'}`,
    headForAppendingAlertism = document['head'] || document['getElementsByTagName']('head')[0],
    styleForAppendingAertism = document['createElement']('style');
headForAppendingAlertism['appendChild'](styleForAppendingAertism);
styleForAppendingAertism['type'] = 'text/css';
if (styleForAppendingAertism['styleSheet']) {
    styleForAppendingAertism['styleSheet']['cssText'] = AlertismCss
} else {
    styleForAppendingAertism['appendChild'](document['createTextNode'](AlertismCss))
};
const AlertismBackdrop = document['createElement']('div'),
    AlertismAlertContainer = document['createElement']('div'),
    AlertismCrossBtn = document['createElement']('button'),
    AlertismIcon = document['createElement']('div'),
    AlertismHeading = document['createElement']('h2'),
    AlertismContent = document['createElement']('p'),
    AlertismInput = document['createElement']('input'),
    AlertismTextarea = document['createElement']('textarea'),
    AlertismBtnContainer = document['createElement']('div'),
    AlertismOkBtn = document['createElement']('button'),
    AlertismCloseBtn = document['createElement']('button'),
    AlertismGlassMorphism = document['createElement']('div'),
    AlertismFooter = document['createElement']('div'),
    AlertismTimerCountDown = document['createElement']('div'),
    AlertismToastContainer = document['createElement']('div'),
    AlertismToast = document['createElement']('div'), AlertismToastGlassMorphism = document['createElement']('div'),
    AlertismToastIcon = document['createElement']('div'), AlertismToastText = document['createElement']('h4'),
    AlertismToastTimerCountDown = document['createElement']('div'),
    checkIcon = {
        tickIcon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve"><path fill="#32be46" d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933    C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8    s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z"/><path fill="#32be46" d="M370.046,141.534c-6.614-6.388-17.099-6.388-23.712,0v0L187.733,300.134l-56.201-56.201    c-6.548-6.78-17.353-6.967-24.132-0.419c-6.78,6.548-6.967,17.353-0.419,24.132c0.137,0.142,0.277,0.282,0.419,0.419    l68.267,68.267c6.664,6.663,17.468,6.663,24.132,0l170.667-170.667C377.014,158.886,376.826,148.082,370.046,141.534z"/></svg>',
        crossIcon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt"><path fill="#f03d30" d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0"/><path fill="#f03d30" d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0"/><path fill="#f03d30" d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0"/></svg>',
        infoIcon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"><path fill="#ccc" d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z    M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"/><path fill="#ccc" d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991   c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"/><path fill="#ccc" d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z"/></svg>',
        warningIcon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path fill="#ffa500" d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256    C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216    c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z"/><path fill="#ffa500" d="M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877    C276,137.831,267.046,128.877,256,128.877z"/><circle fill="#ffa500" cx="256" cy="349.16" r="27"/></svg>',
        questionIcon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt"><path fill="#87adbd" d="m277.332031 384c0 11.78125-9.550781 21.332031-21.332031 21.332031s-21.332031-9.550781-21.332031-21.332031 9.550781-21.332031 21.332031-21.332031 21.332031 9.550781 21.332031 21.332031zm0 0"/><path fill="#87adbd" d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/><path fill="#87adbd" d="m256 314.667969c-8.832031 0-16-7.167969-16-16v-21.546875c0-20.308594 12.886719-38.507813 32.042969-45.269532 25.492187-8.980468 42.625-36.140624 42.625-55.851562 0-32.363281-26.304688-58.667969-58.667969-58.667969s-58.667969 26.304688-58.667969 58.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16c0-49.984375 40.664063-90.667969 90.667969-90.667969s90.667969 40.683594 90.667969 90.667969c0 35.585938-28.097657 73.367188-63.980469 86.039062-6.398438 2.238282-10.6875 8.316407-10.6875 15.101563v21.527344c0 8.832031-7.167969 16-16 16zm0 0"/></svg'
    };
AlertismCrossBtn['innerText'] = 'X', AlertismBackdrop['className'] = 'alert-backdrop', AlertismAlertContainer['classList']['add']('alert-container'), AlertismCrossBtn['className'] = 'alert-close alert-hide', AlertismIcon['classList']['add']('alert-hide');
AlertismHeading['classList']['add']('alert-heading'), AlertismContent['classList']['add']('alert-content'), AlertismInput['className'] = 'alert-input alert-hide', AlertismInput['type'] = 'text';
AlertismInput['value'] = '';
AlertismInput['placeholder'] = 'Enter Text', AlertismTextarea['className'] = 'alert-input';
AlertismTextarea['value'] = '';
AlertismTextarea['placeholder'] = 'Enter Text', AlertismIcon['innerHTML'] = checkIcon['tickIcon'];
AlertismToastIcon['innerHTML'] = checkIcon['tickIcon'];
AlertismBtnContainer['classList']['add']('alert-buttons-container'), AlertismCloseBtn['classList']['add']('alert-hide'), AlertismGlassMorphism['className'] = 'alert-glassmorphism', AlertismFooter['className'] = 'alert-footer alert-hide', AlertismTimerCountDown['className'] = 'alert-time-line alert-hide', AlertismToastContainer['className'] = 'alert-toast-container', AlertismToast['className'] = 'alert-toast', AlertismToastGlassMorphism['className'] = 'alert-glassmorphism alert-hide', AlertismToastIcon['classList']['add']('alert-hide'), AlertismToastTimerCountDown['className'] = 'alert-time-line alert-hide';
AlertismBackdrop['appendChild'](AlertismAlertContainer), AlertismAlertContainer['appendChild'](AlertismCrossBtn), AlertismAlertContainer['appendChild'](AlertismIcon), AlertismAlertContainer['appendChild'](AlertismHeading), AlertismAlertContainer['appendChild'](AlertismContent), AlertismAlertContainer['appendChild'](AlertismInput), AlertismAlertContainer['appendChild'](AlertismBtnContainer), AlertismBtnContainer['appendChild'](AlertismOkBtn), AlertismBtnContainer['appendChild'](AlertismCloseBtn), AlertismAlertContainer['appendChild'](AlertismFooter), AlertismAlertContainer['appendChild'](AlertismGlassMorphism), AlertismAlertContainer['appendChild'](AlertismTimerCountDown), AlertismToastContainer['appendChild'](AlertismToast), AlertismToast['appendChild'](AlertismToastGlassMorphism), AlertismToast['appendChild'](AlertismToastIcon), AlertismToast['appendChild'](AlertismToastText), AlertismToast['appendChild'](AlertismToastTimerCountDown);

function Alertism(_0xe270x12) {
    document['body']['appendChild'](AlertismBackdrop);
    AlertismCrossBtn['innerText'] = 'X', AlertismBackdrop['className'] = 'alert-backdrop', AlertismAlertContainer['className'] = 'alert-container', AlertismCrossBtn['className'] = 'alert-close alert-hide', AlertismIcon['classList']['add']('alert-hide');
    AlertismHeading['classList']['add']('alert-heading'), AlertismContent['classList']['add']('alert-content'), AlertismInput['className'] = 'alert-input alert-hide', AlertismInput['type'] = 'text';
    AlertismInput['value'] = '';
    AlertismInput['placeholder'] = 'Enter Text', AlertismTextarea['className'] = 'alert-input';
    AlertismTextarea['value'] = '';
    AlertismTextarea['placeholder'] = 'Enter Text', AlertismIcon['innerHTML'] = checkIcon['tickIcon'];
    AlertismBtnContainer['classList']['add']('alert-buttons-container'), AlertismCloseBtn['classList']['add']('alert-hide'), AlertismGlassMorphism['className'] = 'alert-glassmorphism alert-hide', AlertismFooter['className'] = 'alert-footer alert-hide', AlertismTimerCountDown['className'] = 'alert-time-line alert-hide', document['body']['style']['overflow'] = 'hidden';
    if (_0xe270x12['backdrop'] !== undefined) {
        AlertismBackdrop['style']['background'] = _0xe270x12['backdrop']
    } else {
        AlertismBackdrop['style']['background'] = 'rgb(0 0 0 / 50%)'
    };
    if (_0xe270x12['position'] !== undefined) {
        AlertismBackdrop['classList']['add']('alert-' + _0xe270x12['position'])
    } else {
        AlertismBackdrop['className'] = 'alert-backdrop'
    };
    AlertismAlertContainer['style']['background'] = _0xe270x12['background'] || '#fff';
    if (_0xe270x12['enableCloseBtn'] !== undefined) {
        if (_0xe270x12['enableCloseBtn'] === true) {
            AlertismCrossBtn['classList']['remove']('alert-hide')
        } else {
            AlertismCrossBtn['classList']['add']('alert-hide')
        }
    } else {
        AlertismCrossBtn['classList']['add']('alert-hide')
    };
    if (_0xe270x12['enableIcon'] !== undefined) {
        if (_0xe270x12['enableIcon'] === true) {
            AlertismIcon['classList']['remove']('alert-hide')
        } else {
            AlertismIcon['classList']['add']('alert-hide')
        }
    } else {
        AlertismIcon['classList']['add']('alert-hide')
    };
    if (_0xe270x12['icon'] !== undefined) {
        if (_0xe270x12['icon']['type'] !== undefined) {
            AlertismIcon['innerHTML'] = checkIcon[_0xe270x12['icon']['type'] + 'Icon']
        };
        if (_0xe270x12['icon']['color'] !== undefined) {
            document['querySelectorAll']('.alert-backdrop .alert-container svg path')['forEach']((_0xe270x13) => {
                _0xe270x13['style']['fill'] = _0xe270x12['icon']['color']
            });
            if (_0xe270x12['icon']['type'] === 'warning') {
                document['querySelector']('.alert-backdrop .alert-container svg circle')['style']['fill'] = _0xe270x12['icon']['color']
            }
        };
        if (_0xe270x12['icon']['position'] === 'right') {
            document['querySelector']('.alert-backdrop .alert-container svg')['style']['left'] = '100%';
            document['querySelector']('.alert-backdrop .alert-container svg')['style']['transform'] = 'translateX(-100%)'
        } else {
            if (_0xe270x12['icon']['position'] === 'left') {
                document['querySelector']('.alert-backdrop .alert-container svg')['style']['left'] = '0';
                document['querySelector']('.alert-backdrop .alert-container svg')['style']['transform'] = 'translateX(0)'
            }
        }
    };
    if (_0xe270x12['alertHeading'] !== undefined) {
        AlertismHeading['innerText'] = _0xe270x12['alertHeading']
    } else {
        AlertismHeading['innerText'] = 'Alert'
    };
    if (_0xe270x12['alertText'] !== undefined) {
        AlertismContent['innerText'] = _0xe270x12['alertText']
    } else {
        if (_0xe270x12['alertHTML'] !== undefined) {
            AlertismContent['innerHTML'] = _0xe270x12['alertHTML']
        } else {
            AlertismContent['innerText'] = 'This is an Alert Box. This is made by Alertism.js V2.0.0, The Alertism.js V2.0.0 is version 2 of a JavaScript Library by Assassin.'
        }
    };
    if (_0xe270x12['enableInput'] !== undefined) {
        if (_0xe270x12['enableInput'] === true) {
            AlertismInput['classList']['remove']('alert-hide')
        } else {
            AlertismInput['classList']['add']('alert-hide')
        }
    } else {
        AlertismInput['classList']['add']('alert-hide')
    };
    if (_0xe270x12['input'] !== undefined) {
        if (_0xe270x12['input']['type'] !== undefined) {
            AlertismInput['type'] = _0xe270x12['input']['type'];
            if (_0xe270x12['input']['type'] === 'textarea') {
                AlertismInput['parentNode']['replaceChild'](AlertismTextarea, AlertismInput)
            }
        };
        if (_0xe270x12['input']['value'] !== undefined) {
            AlertismInput['value'] = _0xe270x12['input']['value'];
            AlertismTextarea['value'] = _0xe270x12['input']['value']
        };
        if (_0xe270x12['input']['placeholder'] !== undefined) {
            AlertismInput['placeholder'] = _0xe270x12['input']['placeholder'];
            AlertismTextarea['placeholder'] = _0xe270x12['input']['placeholder']
        }
    } else {
        AlertismInput['type'] = 'text';
        AlertismInput['value'] = '';
        AlertismInput['placeholder'] = 'Enter Text'
    };
    if (_0xe270x12['btnText'] !== undefined) {
        AlertismOkBtn['innerText'] = _0xe270x12['btnText']
    } else {
        AlertismOkBtn['innerText'] = 'Ok'
    };
    if (_0xe270x12['closeBtnText'] !== undefined) {
        AlertismCloseBtn['classList']['remove']('alert-hide'), AlertismCloseBtn['innerText'] = _0xe270x12['closeBtnText']
    } else {
        AlertismCloseBtn['classList']['add']('alert-hide'), AlertismCloseBtn['innerText'] = ''
    };
    if (_0xe270x12['alertFooter'] !== undefined) {
        AlertismFooter['classList']['remove']('alert-hide'), AlertismFooter['innerHTML'] = _0xe270x12['alertFooter']
    } else {
        AlertismFooter['classList']['add']('alert-hide'), AlertismFooter['innerHTML'] = ''
    };
    if (_0xe270x12['animation'] !== undefined) {
        AlertismAlertContainer['style']['animation'] = _0xe270x12['animation'] + ' 0.5s linear 1'
    } else {
        if (_0xe270x12['animationIn'] !== undefined) {
            AlertismAlertContainer['style']['animation'] = _0xe270x12['animationIn'] + ' 0.5s linear 1'
        } else {
            AlertismAlertContainer['style']['animation'] = ''
        }
    };
    AlertismOkBtn['onclick'] = () => {
        closeAlertism(_0xe270x12['animation'], _0xe270x12['animationOut'], _0xe270x12['onConfirmed'])
    };
    AlertismCloseBtn['onclick'] = () => {
        closeAlertism(_0xe270x12['animation'], _0xe270x12['animationOut'], _0xe270x12['onDenied'])
    };
    AlertismCrossBtn['onclick'] = () => {
        closeAlertism(_0xe270x12['animation'], _0xe270x12['animationOut'], _0xe270x12['onCanceled'])
    };
    if (_0xe270x12['theme'] !== undefined) {
        if (_0xe270x12['theme'] === 'glass') {
            AlertismGlassMorphism['classList']['remove']('alert-hide')
        } else {
            AlertismGlassMorphism['classList']['add']('alert-hide')
        };
        AlertismAlertContainer['classList']['add']('alert-' + _0xe270x12['theme'])
    } else {
        AlertismAlertContainer['className'] = 'alert-container'
    };
    if (_0xe270x12['timer'] !== undefined) {
        AlertismTimerCountDown['classList']['remove']('alert-hide');
        AlertismTimerCountDown['style']['animation'] = 'closeTimeLine ' + (Number(_0xe270x12['timer']) / 1000) + 's linear';
        AlertismBtnContainer['classList']['add']('alert-hide');
        AlertismCrossBtn['classList']['add']('alert-hide');
        AlertismTimerCountDown['onanimationend'] = () => {
            AlertismTimerCountDown['classList']['add']('alert-hide')
        };
        setTimeout(() => {
            closeAlertism(_0xe270x12['animation'], _0xe270x12['animationOut'], _0xe270x12['onAutoClose'])
        }, Number(_0xe270x12['timer']))
    } else {
        AlertismTimerCountDown['classList']['add']('alert-hide');
        AlertismBtnContainer['classList']['remove']('alert-hide')
    }
}

function closeAlertism(_0xe270x15, _0xe270x16, _0xe270x17) {
    if (_0xe270x15) {
        AlertismAlertContainer['style']['animation'] = _0xe270x15 + '-out 0.5s linear 1'
    } else {
        if (_0xe270x16) {
            AlertismAlertContainer['style']['animation'] = _0xe270x16 + ' 0.5s linear 1'
        } else {
            AlertismAlertContainer['style']['animation'] = ''
        }
    };
    setTimeout(() => {
        AlertismBackdrop['remove']();
        document['body']['style']['overflow'] = 'auto';
        if (_0xe270x17) {
            _0xe270x17()
        }
    }, 500)
}

function Toast(_0xe270x12) {
    AlertismToastContainer['className'] = 'alert-toast-container', AlertismToast['className'] = 'alert-toast', AlertismToastGlassMorphism['className'] = 'alert-glassmorphism alert-hide', AlertismToastIcon['classList']['add']('alert-hide'), AlertismToastIcon['innerHTML'] = checkIcon['tickIcon'];
    AlertismToastTimerCountDown['className'] = 'alert-time-line alert-hide';
    document['body']['appendChild'](AlertismToastContainer);
    AlertismToastText['innerText'] = _0xe270x12['text'] || 'Hello, I am a toast from Alertism V2.0.0';
    AlertismToast['style']['background'] = _0xe270x12['background'] || '#333';
    AlertismToast['style']['color'] = _0xe270x12['color'] || '#fff';
    if (_0xe270x12['position'] !== undefined) {
        AlertismToastContainer['classList']['add']('alert-' + _0xe270x12['position'])
    } else {
        AlertismToastContainer['className'] = 'alert-toast-container'
    };
    if (_0xe270x12['enableIcon'] !== undefined) {
        if (_0xe270x12['enableIcon'] === true) {
            AlertismToastIcon['classList']['remove']('alert-hide')
        } else {
            AlertismToastIcon['classList']['add']('alert-hide')
        }
    } else {
        AlertismToastIcon['classList']['add']('alert-hide')
    };
    if (_0xe270x12['icon'] !== undefined) {
        if (_0xe270x12['icon']['type'] !== undefined) {
            AlertismToastIcon['innerHTML'] = checkIcon[_0xe270x12['icon']['type'] + 'Icon']
        };
        if (_0xe270x12['icon']['color'] !== undefined) {
            document['querySelectorAll']('.alert-toast-container .alert-toast svg path')['forEach']((_0xe270x13) => {
                _0xe270x13['style']['fill'] = _0xe270x12['icon']['color']
            });
            if (_0xe270x12['icon']['type'] === 'warning') {
                document['querySelector']('.alert-toast-container .alert-toast svg circle')['style']['fill'] = _0xe270x12['icon']['color']
            }
        }
    };
    if (_0xe270x12['theme'] !== undefined) {
        if (_0xe270x12['theme'] === 'glass') {
            AlertismToastGlassMorphism['classList']['remove']('alert-hide')
        } else {
            AlertismToastGlassMorphism['classList']['add']('alert-hide')
        };
        AlertismToast['classList']['add']('alert-' + _0xe270x12['theme'])
    } else {
        AlertismToast['className'] = 'alert-toast'
    };
    if (_0xe270x12['showTimeLine'] !== undefined) {
        if (_0xe270x12['showTimeLine'] === true) {
            AlertismToastTimerCountDown['classList']['remove']('alert-hide');
            AlertismToastTimerCountDown['style']['animation'] = 'closeTimeLine ' + (Number(_0xe270x12['timer'] || 1500) / 1000) + 's linear';
            AlertismToastTimerCountDown['onanimationend'] = () => {
                AlertismToastTimerCountDown['classList']['add']('alert-hide')
            }
        } else {
            AlertismToastTimerCountDown['classList']['add']('alert-hide')
        }
    } else {
        AlertismToastTimerCountDown['classList']['add']('alert-hide')
    };
    if (_0xe270x12['animation'] !== undefined) {
        AlertismToast['style']['animation'] = _0xe270x12['animation'] + ' 0.5s, ' + _0xe270x12['animation'] + '-out 0.5s ' + (Number(_0xe270x12['timer'] || 1500) / 1000) + 's'
    } else {
        AlertismToast['style']['animation'] = 'Bottom 0.5s, Bottom-out 0.5s ' + (Number(_0xe270x12['timer'] || 1500) / 1000) + 's'
    };
    setTimeout(() => {
        AlertismToastContainer['remove']();
        if (_0xe270x12['onClose']) {
            _0xe270x12['onClose']()
        }
    }, Number(_0xe270x12['timer'] || 1500) + 500)
}
