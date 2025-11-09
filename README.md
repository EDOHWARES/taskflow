# TaskFlow – AI-Powered Productivity Manager

## Project Overview

TaskFlow is an AI-driven productivity manager that helps users organize tasks, set priorities, and optimize their day with AI-powered suggestions. Designed for founders, remote teams, and knowledge workers, TaskFlow provides actionable guidance rather than just a basic to-do list.

## Features

### Core Features (MVP)

* Add, edit, delete tasks
* Mark tasks as complete
* Categorize tasks (work, personal, urgent, etc.)
* Set deadlines and priorities
* AI-powered task organization and focus period suggestions
* Daily summaries and priority lists
* Push notifications and reminders
* User authentication with JWT
* Stripe integration for premium features

### Optional Features (Stretch Goals)

* Team collaboration and task sharing
* Dashboard analytics
* Dark/light mode toggle
* Calendar sync
* Weekly AI-generated planning suggestions

## Tech Stack

* **Frontend:** React, TailwindCSS
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Authentication:** JWT
* **AI Integration:** OpenAI API
* **Payments:** Stripe

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/taskflow.git
cd taskflow
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

4. Create a `.env` file in backend with the following variables:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
STRIPE_SECRET_KEY=your_stripe_key
```

## Running the App

* Backend: `npm run dev` (in backend folder)
* Frontend: `npm run dev` (in frontend folder)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push branch and create a pull request

## License

This project is licensed under the MIT License.
