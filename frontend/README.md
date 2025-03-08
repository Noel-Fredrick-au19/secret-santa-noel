Great! Since your **frontend is deployed on Vercel** and **backend is running locally**, I'll provide a detailed **README.md** file that explains everything, including setup, installation, deployment, and usage.  

---

## **📌 README.md for Your Secret Santa Project**
```md
# 🎁 Secret Santa Game 🎅

This is a **Full Stack Secret Santa Assignment System** built using:
- **Frontend:** React (TypeScript) + Vercel for deployment
- **Backend:** Node.js (Express + TypeScript) running locally

The system reads employee data from a CSV file, assigns each employee a **Secret Child**, and generates a new CSV with the assignments.

---

## 🚀 **Live Demo**
🔗 **Frontend:** [Secret Santa on Vercel](https://secret-santa-tau-ten.vercel.app)

🔗 **Backend:** Runs locally at `http://localhost:5000`

---

## 🛠 **Features**
✅ Upload employee and previous year's Secret Santa CSVs  
✅ Generate Secret Santa assignments with constraints  
✅ Download the assigned list as a new CSV  
✅ Error handling and validation  
✅ Deployed frontend using **Vercel**  

---

# **📂 Project Structure**
```
secret-santa/
├── backend/                 # Express Backend (Runs Locally)
│   ├── src/
│   │   ├── controllers/     # Handles API logic
│   │   ├── services/        # Secret Santa logic
│   │   ├── routes/          # Express routes
│   │   ├── models/          # TypeScript interfaces
│   │   ├── utils/           # Helper functions (CSV Handling)
│   │   ├── app.ts           # Main Express server
│   ├── uploads/             # Stores uploaded CSV files
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
│
├── frontend/                # React Frontend (Deployed on Vercel)
│   ├── src/
│   │   ├── components/      # React Components
│   │   ├── api/             # API calls to backend
│   │   ├── pages/           # Pages
│   │   ├── App.tsx
│   │   ├── index.tsx
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
│
├── .gitignore               # Ignore unnecessary files
├── README.md                # This documentation
```

---

# 🏗️ **Installation & Setup**
## 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/Noel-Fredrick-au19/secret-santa-noel
cd secret-santa
```

---

## 2️⃣ **Backend Setup**
### **🔹 Install Dependencies**
```sh
cd backend
npm install
```
### **🔹 Run Backend**
```sh
npm run dev
```
✅ Runs on: `http://localhost:5000`

---

## 3️⃣ **Frontend Setup**
### **🔹 Install Dependencies**
```sh
cd frontend
npm install
```
### **🔹 Update API URL**
Modify **`src/api/secretSantaApi.ts`** to:
```tsx
const BASE_URL = "http://localhost:5000/api";
```
### **🔹 Run Frontend**
```sh
npm run dev
```
✅ Runs on: `http://localhost:5173`

---

# 🌍 **Deployment**
## 🚀 **Frontend Deployed on Vercel**
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy:
   ```sh
   cd frontend
   vercel --prod
   ```

---

# 📋 **How to Use**
### 1️⃣ **Upload CSV Files**
- **Employees CSV** (`employees.csv`):
  ```
  Employee_Name, Employee_EmailID
  John Doe, john@example.com
  Jane Smith, jane@example.com
  ```
- **Previous Assignments CSV** (`previous.csv`):
  ```
  Employee_Name, Employee_EmailID, Secret_Child_Name, Secret_Child_EmailID
  John Doe, john@example.com, Jane Smith, jane@example.com
  Jane Smith, jane@example.com, John Doe, john@example.com
  ```

### 2️⃣ **Generate Assignments**
- Click "Upload" → Assignments are processed.
- Secret Santa pairs are displayed in the frontend.

---

# 🔧 **Tech Stack**
- **Frontend:** React + TypeScript + Vercel
- **Backend:** Node.js + Express + TypeScript (Runs Locally)
- **Database:** CSV-based storage
- **Deployment:** Vercel (Frontend), Localhost (Backend)

---

# 🤝 **Contributing**
1. Fork the repo
2. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```
3. Make changes and commit:
   ```sh
   git commit -m "Added new feature"
   ```
4. Push to GitHub:
   ```sh
   git push origin feature-name
   ```
5. Open a Pull Request 🚀

---

# 📜 **License**
This project is licensed under the MIT License.

---

# 🙋 **Support**
For issues, create a GitHub issue or reach out to **noel.frd123@gmail.com** ✉️.

---

🚀 **Enjoy your Secret Santa Game!** 🎅🎁
```

---

## **🚀 What’s Included in the README?**
✅ **Project Overview**  
✅ **Live Demo Links**  
✅ **Tech Stack**  
✅ **Installation & Setup**  
✅ **Frontend & Backend Instructions**  
✅ **Deployment Instructions**  
✅ **How to Use the App**  
✅ **Contribution Guide**  
✅ **License & Support Info**  

---

### **📌 Next Steps**
1. **Copy the README into `README.md`** in your GitHub repo.
2. **Commit and push it**:
   ```sh
   git add README.md
   git commit -m "Added project documentation"
   git push origin main
   ```
