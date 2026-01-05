import React, { useState } from 'react';
import { useEmployee } from '../context/EmployeeContext';
import Header from '../components/Header';
import DashboardSummary from '../components/DashboardSummary';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import { Employee } from '../types';
import { Plus } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { employees, addEmployee, updateEmployee, deleteEmployee, getEmployeeById } =
    useEmployee();
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | undefined>();
  const [deleteConfirm, setDeleteConfirm] = useState<{ id: string; name: string } | null>(null);

  const handleAddEmployee = (): void => {
    setEditingEmployee(undefined);
    setShowForm(true);
  };

  const handleEditEmployee = (employee: Employee): void => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleFormSubmit = (data: Omit<Employee, 'id' | 'createdAt'>): void => {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, data);
    } else {
      addEmployee(data);
    }
    setShowForm(false);
    setEditingEmployee(undefined);
  };

  const handleDeleteClick = (id: string): void => {
    const employee = getEmployeeById(id);
    if (employee) {
      setDeleteConfirm({ id, name: employee.fullName });
    }
  };

  const handleConfirmDelete = (): void => {
    if (deleteConfirm) {
      deleteEmployee(deleteConfirm.id);
      setDeleteConfirm(null);
    }
  };

  const handlePrint = (): void => {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      const htmlContent = `
        <html>
          <head>
            <title>Employee List</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h1 { text-align: center; color: #333; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
              th { background-color: #3B82F6; color: white; }
              tr:nth-child(even) { background-color: #f9f9f9; }
              img { width: 40px; height: 40px; border-radius: 50%; }
            </style>
          </head>
          <body>
            <h1>Employee List Report</h1>
            <p>Generated on: ${new Date().toLocaleDateString()}</p>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>State</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${employees
                  .map(
                    (emp) => `
                  <tr>
                    <td>${emp.id}</td>
                    <td>${emp.fullName}</td>
                    <td>${emp.gender}</td>
                    <td>${emp.dateOfBirth}</td>
                    <td>${emp.state}</td>
                    <td>${emp.isActive ? 'Active' : 'Inactive'}</td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          </body>
        </html>
      `;
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      printWindow.location.href = url;
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Summary */}
        <DashboardSummary employees={employees} />

        {/* Add Employee Button */}
        <div className="mb-6">
          <button
            onClick={handleAddEmployee}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            <Plus size={20} />
            <span>Add New Employee</span>
          </button>
        </div>

        {/* Employee List */}
        <EmployeeList
          employees={employees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteClick}
          onPrint={handlePrint}
        />
      </main>

      {/* Employee Form Modal */}
      {showForm && (
        <EmployeeForm
          employee={editingEmployee}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingEmployee(undefined);
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <DeleteConfirmationModal
          employeeName={deleteConfirm.name}
          onConfirm={handleConfirmDelete}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}
    </div>
  );
};

export default DashboardPage;