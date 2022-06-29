import { useState } from 'react';

import { User, Service } from './types';

type UseUsers = () => {
  fetchAllUsers: () => void;
  fetchUsersByServiceId: (id: number) => void;
  isLoading: boolean;
  users: User[];
  unfilteredUsers: User[];
  error?: Error;
};
export const useUsers: UseUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [unfilteredUsers, setUnfilteredUsers] = useState<User[]>([]);
  const [errors, setErrors] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/users.json', { method: 'GET' });
      const usersFromResponse = await response.json();
      setUsers(usersFromResponse);
      setUnfilteredUsers(usersFromResponse);
    } catch (error) {
      setErrors(new Error('There is an error'));
    }

    setIsLoading(false);
  };

  const fetchUsersByServiceId = async (id: number) => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:3001/users.json?service_id=${id}`, {
        method: 'GET',
      });
      const usersFromResponse = await response.json();
      setUsers(usersFromResponse);
    } catch (error) {
      setErrors(new Error('There is an error'));
    }

    setIsLoading(false);
  };

  return { fetchAllUsers, fetchUsersByServiceId, isLoading, errors, users, unfilteredUsers };
};

type UseServices = () => {
  fetchServices: () => void;
  isLoading: boolean;
  services: Service[];
  error?: Error;
};
export const useServices: UseServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [errors, setErrors] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchServices = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/services.json', { method: 'GET' });
      const servicesFromResponse = await response.json();
      setServices(servicesFromResponse);
    } catch (error) {
      setErrors(new Error('There is an error'));
    }

    setIsLoading(false);
  };

  return { fetchServices, isLoading, errors, services };
};
