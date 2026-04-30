const Dashboard = () => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Welcome to Population Enumeration</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>This is your dashboard. You can start the enumeration process from here.</p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start New Enumeration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
