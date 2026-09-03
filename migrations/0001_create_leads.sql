-- Migration: 0001_create_leads.sql
-- Description: Create initial leads table for storing inquiries and risk assessments

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  form_type TEXT NOT NULL,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  employee_range TEXT,
  device_range TEXT,
  location_count TEXT,
  services TEXT,
  preferred_contact TEXT,
  message TEXT NOT NULL,
  source TEXT,
  consent_version TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
