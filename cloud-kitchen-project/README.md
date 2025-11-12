# Cloud Kitchen Data Scraper

## Project Overview

The Cloud Kitchen Data Scraper is a full-stack application that scrapes data from food delivery platforms like Swiggy and Zomato. It provides a REST API for accessing kitchen data and features a React-based frontend for users to search and view kitchen information.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [API Endpoints](#api-endpoints)
5. [Frontend Usage](#frontend-usage)
6. [Contributing](#contributing)
7. [License](#license)

## Technologies Used

- **Backend**: Python, Flask, SQLite
- **Frontend**: React, Tailwind CSS
- **Libraries**: BeautifulSoup4, Geopy, Flask-CORS

## Project Structure

```
cloud-kitchen-project
├── backend
│   ├── app.py
│   ├── requirements.txt
│   ├── .env
│   ├── .gitignore
│   └── venv/
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env
│   └── .gitignore
├── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites

- Python 3.8+
- Node.js 16+
- VS Code or any code editor

### Backend Setup

1. Navigate to the `backend` directory.
2. Create a virtual environment:
   - Windows: `python -m venv venv`
   - Mac/Linux: `python3 -m venv venv`
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Create a `.env` file in the `backend` directory and add your environment variables.
6. Run the backend server: `python app.py`

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file in the `frontend` directory and add your environment variables.
4. Start the frontend application: `npm start`

## API Endpoints

- **POST** `/api/scrape`: Trigger data scraping for a specific location.
- **GET** `/api/kitchens/search`: Search kitchens by location and food items.
- **GET** `/api/kitchens/<id>`: Get detailed information about a specific kitchen.
- **GET** `/api/kitchens/nearby`: Get nearby kitchens based on coordinates.
- **GET** `/api/menu/search`: Search for menu items.
- **GET** `/api/promotions/active`: Get all active promotions.
- **GET** `/api/health`: Health check endpoint.

## Frontend Usage

- Use the search bar to find kitchens based on location or food items.
- Click on kitchen cards to view detailed information.
- Explore tabs for nearby kitchens and active promotions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is for educational purposes. Ensure compliance with Swiggy and Zomato's Terms of Service when scraping data.