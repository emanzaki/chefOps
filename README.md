# Still in progress ....
# 🍽️ chefOps

**chefOps** is a full-stack restaurant web application built with modern web technologies and DevOps practices.  
From dynamic menus to automated deployment pipelines, this project blends software craftsmanship with culinary flair.

---

## 🔧 Tech Stack

### 🖥️ Backend
- **Node.js + Express** – Web server and API
- **MongoDB + Mongoose** – NoSQL database for dynamic content

### 🎨 Frontend
- **HTML, CSS, JavaScript** – Responsive and clean UI (no frontend frameworks)

### 🚀 DevOps & Infrastructure
- **Docker** – Containerized application
- **Kubernetes** – Orchestration and deployment
- **Ansible** – Infrastructure provisioning and configuration
- **Jenkins** – CI/CD pipeline automation

---

## 🌐 Features

- 📄 Fully dynamic menu rendered from MongoDB using Mongoose
- 📨 Contact form with server-side handling
- 📦 Dockerized architecture for consistent deployment
- ☸️ Kubernetes manifests for scalable production rollout
- 🤖 Jenkins pipeline with integrated CI/CD
- 🧾 Ansible playbooks to spin up infrastructure environments

---

## 📂 Project Structure

```bash
chefOps/
├── ansible/                     # Ansible provisioning
│   ├── inventory.ini
│   └── playbook.yml
│
├── k8s/                         # Kubernetes manifests
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── mongo-deployment.yaml
│   └── mongo-service.yaml
│
├── models/                      # Mongoose schemas
│   └── MenuItem.js
│
├── public/                      # Frontend static assets
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── bruschetta.jpg
│       ├── grilled-salmon.jpg
│       ├── cheesecake.jpg
│       └── ...
│
├── views/                       # HTML templates
│   ├── index.html
│   ├── menu.html
│   └── contact.html
│
├── .dockerignore
├── .gitignore
├── Dockerfile                   # Build backend container
├── docker-compose.yml           # Local dev environment
├── Jenkinsfile                  # Jenkins pipeline
├── package.json
├── package-lock.json
├── README.md
├── seed.js                      # Seed script for MongoDB
└── server.js                    # Express app entry point
```
---

## 🧪 Running Locally

### 1. Clone and install:
```bash
git clone https://github.com/your-username/chefOps.git
cd chefOps
npm install
````

### 2. Start MongoDB locally or via Docker

### 3. Run the server:

```bash
node server.js
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🐳 Run with Docker

```bash
docker build -t chefops-app .
docker-compose up
```

---

## ☸️ Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

---

## 🤖 Jenkins Pipeline

* Defined in `Jenkinsfile`
* Includes build, Docker push, and deploy to Kubernetes cluster

---


## 📜 License

MIT License © 2025 Your Name

---
