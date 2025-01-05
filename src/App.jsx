import { AdminLayout } from './layouts/AdminLayout';

function App() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Welcome to the admin dashboard!</p>
      </div>
    </AdminLayout>
  );
}

export default App;