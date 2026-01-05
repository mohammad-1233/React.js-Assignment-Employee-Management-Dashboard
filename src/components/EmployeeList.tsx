import React, { useState, useMemo } from 'react';
import { Employee } from '../types';
import { formatDate } from '../utils/validation';
import { Edit2, Trash2, Printer, Search } from 'lucide-react';

interface EmployeeListProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: string) => void;
  onPrint: () => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onEdit, onDelete, onPrint }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchesSearch = emp.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGender = !filterGender || emp.gender === filterGender;
      const matchesStatus =
        !filterStatus || (filterStatus === 'active' ? emp.isActive : !emp.isActive);

      return matchesSearch && matchesGender && matchesStatus;
    });
  }, [employees, searchTerm, filterGender, filterStatus]);

  if (employees.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-600 text-lg">No employees found. Add your first employee!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Search and Filter Bar */}
      <div className="p-6 border-b border-gray-200 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender Filter */}
          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          {/* Print Button */}
          <button
            onClick={onPrint}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            <Printer size={18} />
            <span>Print</span>
          </button>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-600">
          Showing {filteredEmployees.length} of {employees.length} employees
        </p>
      </div>

      {/* Table */}
      {filteredEmployees.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-gray-600">No employees match your filters.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Gender</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">DOB</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">State</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr
                  key={employee.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{employee.id}</td>
                  <td className="px-6 py-4">
                    <img
                      src={employee.profileImage}
                      alt={employee.fullName}
                      className="w-10 h-10 rounded-full object-cover border border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {employee.fullName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.gender}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDate(employee.dateOfBirth)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{employee.state}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        employee.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {employee.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onEdit(employee)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition duration-200"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => onDelete(employee.id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition duration-200"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;