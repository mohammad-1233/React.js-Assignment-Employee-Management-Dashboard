import React, { createContext, useContext, useState, useEffect } from 'react';
import { Employee, EmployeeContextType } from '../types';
import { getEmployeesFromStorage, saveEmployeesToStorage } from '../utils/localStorage';

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const storedEmployees = getEmployeesFromStorage();
    setEmployees(storedEmployees);
  }, []);

  const addEmployee = (employee: Omit<Employee, 'id' | 'createdAt'>): void => {
    // Generate next sequential ID
    const maxId = employees.length > 0 
      ? Math.max(...employees.map(emp => parseInt(emp.id, 10)))
      : 0;
    const nextId = (maxId + 1).toString();

    const newEmployee: Employee = {
      ...employee,
      id: nextId,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveEmployeesToStorage(updatedEmployees);
  };

  const updateEmployee = (id: string, employee: Omit<Employee, 'id' | 'createdAt'>): void => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === id
        ? {
            ...emp,
            ...employee,
          }
        : emp
    );
    setEmployees(updatedEmployees);
    saveEmployeesToStorage(updatedEmployees);
  };

  const deleteEmployee = (id: string): void => {
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    saveEmployeesToStorage(updatedEmployees);
  };

  const getEmployeeById = (id: string): Employee | undefined => {
    return employees.find((emp) => emp.id === id);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        getEmployeeById,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = (): EmployeeContextType => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployee must be used within EmployeeProvider');
  }
  return context;
};