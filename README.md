# Employee Management Dashboard

A modern, full-featured Employee Management Dashboard built with React, TypeScript, and Tailwind CSS. This application provides comprehensive employee management capabilities with authentication, CRUD operations, search, filtering, and printing functionality.

## 🎯 Features

### Authentication
- **Login Page**: Secure login with email and password validation
- **Protected Routes**: Dashboard access restricted to authenticated users
- **Session Persistence**: User session persists across page refreshes using localStorage
- **Logout Functionality**: Secure logout with session clearing

### Employee Management
- **Dashboard Summary**: Display total employees, active count, and inactive count
- **Employee List**: Comprehensive table view with all employee details
- **Add Employee**: Create new employees with form validation
- **Edit Employee**: Update existing employee information
- **Delete Employee**: Remove employees with confirmation dialog
- **Print Employees**: Generate and print employee list report

### Search & Filter
- **Name Search**: Real-time search by employee name
- **Gender Filter**: Filter employees by gender (Male, Female, Other)
- **Status Filter**: Filter by active/inactive status
- **Combined Filtering**: All filters work together seamlessly

### Employee Form
- **Full Name**: Text input with validation (minimum 2 characters)
- **Gender**: Dropdown selection (Male, Female, Other)
- **Date of Birth**: Date picker with age validation (18-100 years)
- **Profile Image**: Image upload with preview functionality
- **State Selection**: Dropdown with Indian states
- **Active Status**: Toggle for employee status
- **Form Validation**: Comprehensive validation with error messages

### UI/UX
- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Loading States**: Visual feedback during operations
- **Empty States**: Graceful handling of empty data
- **Modal Dialogs**: Smooth modal interactions for forms and confirmations
- **Color Palette**: Professional blue, green, and red color scheme

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Data Persistence**: localStorage
- **Build Tool**: Create React App

## 📋 Project Structure

```
src/
├── components/
│   ├── Header.tsx                 # Navigation header with logout
│   ├── ProtectedRoute.tsx         # Route protection wrapper
│   ├── DashboardSummary.tsx       # Summary statistics cards
│   ├── EmployeeList.tsx           # Employee table with search/filter
│   ├── EmployeeForm.tsx           # Add/Edit employee form
│   └── DeleteConfirmationModal.tsx # Delete confirmation dialog
├── context/
│   ├── AuthContext.tsx            # Authentication state management
│   └── EmployeeContext.tsx        # Employee data management
├── pages/
│   ├── LoginPage.tsx              # Login page
│   └── DashboardPage.tsx          # Main dashboard page
├── types/
│   └── index.ts                   # TypeScript type definitions
├── utils/
│   ├── mockData.ts                # Mock employee data
│   ├── localStorage.ts            # localStorage utilities
│   └── validation.ts              # Form validation functions
├── App.tsx                        # Main app component with routing
├── index.tsx                      # React entry point
└── index.css                      # Global styles

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - You'll be redirected to the login page

### Demo Credentials
- **Email**: `demo@example.com`
- **Password**: `password123`

## 📖 Usage Guide

### Login
1. Enter your email and password
2. Click "Sign In" button
3. You'll be redirected to the dashboard

### Add Employee
1. Click "Add New Employee" button
2. Fill in all required fields:
   - Full Name (minimum 2 characters)
   - Gender (Male, Female, or Other)
   - Date of Birth (must be 18-100 years old)
   - Profile Image (upload and preview)
   - State (select from dropdown)
   - Active Status (toggle checkbox)
3. Click "Add Employee" to save

### Edit Employee
1. Click the edit icon (pencil) in the employee row
2. Modify the desired fields
3. Click "Update Employee" to save changes

### Delete Employee
1. Click the delete icon (trash) in the employee row
2. Confirm deletion in the modal dialog
3. Employee will be removed from the list

### Search & Filter
1. **Search**: Type employee name in the search box
2. **Filter by Gender**: Select gender from dropdown
3. **Filter by Status**: Select Active or Inactive
4. Filters work together - combine multiple filters for precise results

### Print Employee List
1. Click the "Print" button
2. A new window will open with the formatted employee list
3. Use browser print function (Ctrl+P or Cmd+P) to print or save as PDF

## 🔐 Authentication Details

### Mock Authentication
- The application uses mock authentication for demo purposes
- Any valid email format and password (6+ characters) will work
- Authentication state is persisted in localStorage
- Session persists across page refreshes

### Protected Routes
- Dashboard is protected and requires authentication
- Unauthenticated users are redirected to login page
- Logout clears the session and redirects to login

## 💾 Data Persistence

### localStorage
- Employee data is stored in browser's localStorage
- Authentication state is persisted
- Data persists across browser sessions
- Initial data includes 5 sample employees

### Mock Data
- Application comes with 5 pre-loaded employees
- Data is loaded from localStorage if available
- Falls back to mock data if localStorage is empty

## 🎨 Styling

### Tailwind CSS
- Utility-first CSS framework
- Custom color palette configured
- Responsive design with mobile-first approach
- Smooth transitions and hover effects

### Color Scheme
- **Primary**: Blue (#3B82F6)
- **Secondary**: Green (#10B981)
- **Danger**: Red (#EF4444)
- **Warning**: Amber (#F59E0B)

## ✅ Form Validation

### Full Name
- Minimum 2 characters required
- Alphanumeric and special characters allowed

### Date of Birth
- Must be a valid date
- Employee must be between 18 and 100 years old
- Age is calculated from current date

### Profile Image
- Required field
- Supports common image formats (JPG, PNG, GIF, etc.)
- Image preview shown before saving
- Stored as base64 in localStorage

### State
- Must select from predefined list of Indian states
- 28 states available in dropdown

## 🔄 State Management

### AuthContext
- Manages user authentication state
- Provides login and logout functions
- Persists auth state to localStorage

### EmployeeContext
- Manages employee data
- Provides CRUD operations
- Persists employee data to localStorage
- Generates unique IDs for new employees

## 📱 Responsive Design

- **Desktop**: Full-width layout with optimized spacing
- **Tablet**: Adjusted grid layout and font sizes
- **Mobile**: Single column layout with touch-friendly buttons
- **Breakpoints**: Tailwind's default breakpoints (sm, md, lg, xl)

## 🐛 Known Limitations

1. **Mock Authentication**: Uses mock login (no real backend)
2. **localStorage Limit**: Limited by browser storage (typically 5-10MB)
3. **Image Storage**: Large images may impact performance
4. **No Real-time Sync**: Data not synced across browser tabs

## 🚀 Future Enhancements

- Backend API integration
- Real authentication with JWT
- Database persistence
- Advanced reporting and analytics
- Employee performance tracking
- Salary management
- Leave management
- Email notifications
- Role-based access control
- Dark mode theme

## 📝 Design Decisions

### Context API over Redux
- Simpler setup for this application size
- Sufficient for current state management needs
- Easier to understand and maintain

### localStorage for Persistence
- No backend required for demo
- Instant data persistence
- Good for prototype/demo purposes

### Tailwind CSS
- Rapid UI development
- Consistent design system
- Responsive design out of the box
- Smaller bundle size with PurgeCSS

### TypeScript
- Type safety and better IDE support
- Catches errors at compile time
- Improved code documentation
- Better developer experience

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a comprehensive Employee Management Dashboard demonstration.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Happy Managing! 🎉**