import React from 'react';
import { Users, UserCheck, UserX } from 'lucide-react';
import { Employee } from '../types';

interface DashboardSummaryProps {
  employees: Employee[];
}

const DashboardSummary: React.FC<DashboardSummaryProps> = ({ employees }) => {
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter((emp) => emp.isActive).length;
  const inactiveEmployees = employees.filter((emp) => !emp.isActive).length;

  const stats = [
    {
      label: 'Total Employees',
      value: totalEmployees,
      icon: Users,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      iconBg: 'bg-blue-600',
    },
    {
      label: 'Active Employees',
      value: activeEmployees,
      icon: UserCheck,
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      iconBg: 'bg-green-600',
    },
    {
      label: 'Inactive Employees',
      value: inactiveEmployees,
      icon: UserX,
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      iconBg: 'bg-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className={`${stat.bgColor} rounded-lg p-6 shadow-md`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className={`${stat.textColor} text-3xl font-bold mt-2`}>{stat.value}</p>
              </div>
              <div className={`${stat.iconBg} p-3 rounded-lg`}>
                <Icon className="text-white" size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardSummary;