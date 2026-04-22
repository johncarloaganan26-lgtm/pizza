/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Story from './pages/Story';
import Ingredients from './pages/Ingredients';
import Locations from './pages/Locations';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminLayout from './pages/admin/AdminLayout';
import DashboardOverview from './pages/admin/DashboardOverview';
import MenuManager from './pages/admin/MenuManager';
import OrdersManager from './pages/admin/OrdersManager';
import SocietyManager from './pages/admin/SocietyManager';
import AdminSettings from './pages/admin/AdminSettings';
import Archive from './pages/admin/Archive';
import Reports from './pages/admin/Reports';
import AuditLogs from './pages/admin/AuditLogs';

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans">
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="menu" element={<MenuManager />} />
            <Route path="orders" element={<OrdersManager />} />
            <Route path="customers" element={<SocietyManager />} />
            <Route path="archive" element={<Archive />} />
            <Route path="reports" element={<Reports />} />
            <Route path="logs" element={<AuditLogs />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Public Routes */}
          <Route path="*" element={
            <PublicLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/story" element={<Story />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PublicLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}
