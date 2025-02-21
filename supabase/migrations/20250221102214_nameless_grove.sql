/*
  # Support Tickets System Setup

  1. New Tables
    - `company_domains` - Allowed company email domains
    - `support_tickets` - Ticket information and status

  2. Security
    - Enable RLS on all tables
    - Set up policies for authenticated users
*/

-- Create company domains table
CREATE TABLE company_domains (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  domain text UNIQUE NOT NULL,
  company_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create support tickets table
CREATE TABLE support_tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  priority text NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  spiceworks_ticket_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE company_domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;

-- Company Domains Policies
CREATE POLICY "Company domains are viewable by everyone"
  ON company_domains FOR SELECT
  USING (true);

-- Support Tickets Policies
CREATE POLICY "Users can view their own tickets"
  ON support_tickets FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create tickets"
  ON support_tickets FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Insert some example company domains
INSERT INTO company_domains (domain, company_name) VALUES
('worcrestsolutions.com', 'Worcrest Solutions'),
('example-client.com', 'Example Client Corp');