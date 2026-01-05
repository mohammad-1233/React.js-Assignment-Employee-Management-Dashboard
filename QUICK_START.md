# Quick Start Guide - Employee Management Dashboard

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```
The app will open at `http://localhost:3000`

### Step 3: Login
Use these demo credentials:
- **Email**: `demo@example.com`
- **Password**: `password123`

---

## 📋 What You Can Do

### 👥 Manage Employees
- **Add**: Click "Add New Employee" button
- **Edit**: Click the pencil icon in any row
- **Delete**: Click the trash icon (confirmation required)
- **View**: See all employee details in the table

### 🔍 Search & Filter
- **Search**: Type name in search box
- **Filter by Gender**: Select from dropdown
- **Filter by Status**: Select Active or Inactive
- **Combine**: Use multiple filters together

### 🖨️ Print
- Click "Print" button to generate employee report
- Use browser print (Ctrl+P) to save as PDF

### 🚪 Logout
- Click "Logout" button in top right
- You'll be redirected to login page

---

## 📝 Form Fields

When adding/editing an employee:

| Field | Requirements |
|-------|--------------|
| Full Name | 2+ characters |
| Gender | Male, Female, or Other |
| Date of Birth | Must be 18-100 years old |
| Profile Image | Upload and preview |
| State | Select from 28 Indian states |
| Active Status | Toggle checkbox |

---

## 💾 Data Storage

- All data is saved in browser's localStorage
- Data persists when you close and reopen the browser
- Clear browser data to reset (Settings → Clear browsing data)

---

## 🎨 Features at a Glance

✅ Authentication with login/logout
✅ Dashboard with employee statistics
✅ Add, edit, delete employees
✅ Search by name
✅ Filter by gender and status
✅ Print employee list
✅ Image upload with preview
✅ Form validation
✅ Responsive design
✅ Professional UI

---

## 🛠️ Build for Production

```bash
npm run build
```

Creates optimized build in `build/` folder ready for deployment.

---

## 📚 Need More Help?

- See `README.md` for detailed documentation
- Check `PROJECT_SUMMARY.md` for technical details
- Review code comments in source files

---

**Happy Managing! 🎉**