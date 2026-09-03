export type FormType = 'contact' | 'risk_assessment';

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'archived';

export interface LeadSubmission {
  id: string;
  createdAt: string;
  formType: FormType;
  name: string;
  company: string;
  email?: string | null;
  phone: string;
  employeeRange?: string | null;
  deviceRange?: string | null;
  locationCount?: string | null;
  services?: string[] | null;
  preferredContact?: 'phone' | 'email' | 'whatsapp' | null;
  message: string;
  source?: string | null;
  consentVersion: string;
  status: LeadStatus;
}

export interface LeadDbRow {
  id: string;
  created_at: string;
  form_type: string;
  name: string;
  company: string;
  email: string | null;
  phone: string;
  employee_range: string | null;
  device_range: string | null;
  location_count: string | null;
  services: string | null;
  preferred_contact: string | null;
  message: string;
  source: string | null;
  consent_version: string;
  status: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}
