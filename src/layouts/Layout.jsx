import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import Chatbot from '../components/Chatbot';

export default function Layout() {
  return (
    <div className="flex h-screen bg-dark-900 text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-6 bg-dark-900">
          <Outlet />
        </main>
      </div>
      <Chatbot />
    </div>
  );
}
