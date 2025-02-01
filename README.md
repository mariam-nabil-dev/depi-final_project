## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/InnoCrew/depi-final_project.git
   cd depi-final_project
2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **start the development server**:
    ```bash
     npm run dev
     ```
     
The application will be available at http://localhost:5173 (or the port specified by your environment).

4. **Start JSON Server**:
To simulate a backend API, start the JSON server on port 8000:
    ```bash
    npx json-server --watch data/db.json --port 8000
    ```
The JSON server will serve the blog data at http://localhost:8000/blogs.

Happy Coding! 🚀
