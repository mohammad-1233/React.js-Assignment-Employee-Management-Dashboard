export interface Employee {
  id: string;
  fullName: string;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string;
  profileImage: string;
  state: string;
  isActive: boolean;
  createdAt: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface EmployeeContextType {
  employees: Employee[];
  addEmployee: (employee: Omit<Employee, 'id' | 'createdAt'>) => void;
  updateEmployee: (id: string, employee: Omit<Employee, 'id' | 'createdAt'>) => void;
  deleteEmployee: (id: string) => void;
  getEmployeeById: (id: string) => Employee | undefined;
}