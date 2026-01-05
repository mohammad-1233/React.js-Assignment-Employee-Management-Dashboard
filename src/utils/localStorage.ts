import { Employee } from '../types';
import { mockEmployees } from './mockData';

const EMPLOYEES_KEY = 'employees';
const AUTH_KEY = 'auth';

export const getEmployeesFromStorage = (): Employee[] => {
  try {
    const stored = localStorage.getItem(EMPLOYEES_KEY);
    return stored ? JSON.parse(stored) : mockEmployees;
  } catch {
    return mockEmployees;
  }
};

export const saveEmployeesToStorage = (employees: Employee[]): void => {
  try {
    localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(employees));
  } catch (error) {
    console.error('Failed to save employees to localStorage:', error);
  }
};

export const getAuthFromStorage = (): { email: string } | null => {
  try {
    const stored = localStorage.getItem(AUTH_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const saveAuthToStorage = (auth: { email: string }): void => {
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  } catch (error) {
    console.error('Failed to save auth to localStorage:', error);
  }
};

export const clearAuthFromStorage = (): void => {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch (error) {
    console.error('Failed to clear auth from localStorage:', error);
  }
};