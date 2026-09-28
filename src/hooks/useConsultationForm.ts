import { useState } from 'react';

export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  timeline: string;
  message: string;
}

export function useConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: 'villa',
    timeline: 'immediate',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldMap: Record<string, keyof ConsultationFormData> = {
      name: 'name',
      phone: 'phone',
      email: 'email',
      'project-type': 'projectType',
      timeline: 'timeline',
      message: 'message',
    };

    const key = fieldMap[id] || (id as keyof ConsultationFormData);
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'villa',
      timeline: 'immediate',
      message: '',
    });
    setSubmitted(false);
  };

  return {
    formData,
    submitted,
    loading,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
