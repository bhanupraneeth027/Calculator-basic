
# Calculator-basic

A minimal, lightweight web-based calculator featuring basic arithmetic operations.

## Table of Contents
- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

## About  
Calculator-basic is a simple browser application built using standard web technologies. It allows users to perform basic operations like addition, subtraction, multiplication and division. The focus is on clarity, usability and easy maintainability.

## Features  
- Perform basic arithmetic operations: **+**, **−**, **×**, **÷**  
- Clear input / reset functionality  
- Responsive, mobile-friendly layout  
- No external dependencies or frameworks required — purely HTML, CSS, and JavaScript

## Tech Stack  
- **HTML5** — structure and semantic markup  
- **CSS3** — styling, layout and responsiveness  
- **JavaScript (ES6+)** — client-side logic and event handling  
- No backend/server components — runs entirely in the browser

## Getting Started  
### Prerequisites  
- A modern web browser (e.g., Chrome, Firefox, Edge, Safari)  
- (Optional) Local HTTP server for a better development experience — e.g.,  
  ```bash
  python3 -m http.server
````

or

```bash
npx http-server
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bhanupraneeth027/Calculator-basic.git
   cd Calculator-basic
   ```
2. Open the `index.html` file in your browser, or serve the directory and browse to `http://localhost:<port>`.

## Usage

Once opened in the browser:

* Click or tap on the numeric and operator buttons to construct your calculation.
* Press `=` / “equals” to get your result.
* Use `C` or a clear button to reset the calculation.
* Feel free to inspect `script.js` and `style.css` if you wish to customize the UI or logic.

## Project Structure

```
Calculator-basic/
├── index.html       ← main page (UI markup)  
├── style.css        ← stylesheet for layout and design  
└── script.js        ← JavaScript logic for calculator operations  
```

## Contributing

Contributions are welcome! If you’d like to help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes (and test thoroughly)
4. Commit your changes (`git commit -m "Add <feature>"`)
5. Push to your fork (`git push origin feature/your-feature`)
6. Open a Pull Request describing your changes.

Please adhere to clean code practices, include comments for non-trivial logic, and document any new features or modifications in this README.

