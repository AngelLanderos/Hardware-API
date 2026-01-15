# 📦 Project Name
Hardware POS.  
Managment system for hardware stores and similar business.
Includes sales, inventory, users, clients and purchases.
Escalable multi-business design 

---

# 🚀 Tech Stack
- **NestJs**  
- **TypeScript**  
- **Prisma / PostgreSQL**  
- **Docker & Docker Compose**  
- **Jest**

---

# 📁 Project Structure
/src
├── modules/
├── controllers/
├── services/
├── repositories/
├── config/
└── main.ts

---

# ⚙️ Installation
```
bash
```
```
git clone https://github.com/yourUser/yourProject.git
```
```
npm install
```

---

# ▶️ Running the Project
### Development
```
npm run dev
```

### Production
```
npm run build
npm run start
```

---

# 🐳 Running with Docker
```
docker-compose up --build
```
Containers included:
- API
- Database (Mongo/Postgres)
- Adminer / Mongo Express (optional)

---

# 🔐 Environment Variables
###Create a .env file based on:
- PORT=3000
- DATABASE_URL=postgresql://user:pass@localhost:5432/db
- JWT_SECRET=yourSecret
- NODE_ENV=development

---

# 🧪 Testing
Unit tests:
```
npm run test
```
Integration tests:
```
npm run test:e2e
```
Coverage:
```
npm run test: cov
```

---
# 🏗️ Architecture & Decisions
###This project follows:
- SOLID principles
- Clean Architecture
- DTO pattern
- Repository + Service layer separation
- Environment-driven configuration
- Centralized error handling
- Modular folder structure

###Reasons for the chosen architecture:
- Scalability
- Maintainability
- Testability
- Separation of concerns
---

# Diagrama simple de arquitecutra


# 📌 API Documentation
If using Swagger:
```

```
---

# 📅 Roadmap
- [x] Add CI/CD
- [ ] Complete integration tests
- [ ] Add caching layer (Redis)
- [ ] Deploy to Digital Ocean

# © License
MIT license.
