// This is the core of our "Transaction Initiator" module.
// It's designed for "Seamless Abstraction" - simple, clear, and without jargon.

function App() {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        
        {/* Header Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Send Money
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fast, secure, and seamless international transfers.
          </p>
        </div>

        {/* The Main Form */}
        <form className="mt-8 space-y-6">
          {/* Amount to Send */}
          <div>
            <label htmlFor="amount" className="text-sm font-medium text-gray-700">
              You send exactly
            </label>
            <div className="mt-1 relative">
              <input
                id="amount"
                name="amount"
                type="number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                placeholder="2000"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">ZAR</span>
              </div>
            </div>
          </div>

          {/* Fee Option (hidden logic, simple choice for user) */}
          <fieldset className="pt-4">
            <legend className="text-sm font-medium text-gray-700">Transaction Fee</legend>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input id="addFee" name="feeOption" type="radio" defaultChecked className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"/>
                <label htmlFor="addFee" className="ml-3 block text-sm text-gray-800">
                  Add fee to my total (Recipient gets full amount)
                </label>
              </div>
              <div className="flex items-center">
                <input id="includeFee" name="feeOption" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"/>
                <label htmlFor="includeFee" className="ml-3 block text-sm text-gray-800">
                  Include fee in the amount I'm sending
                </label>
              </div>
            </div>
          </fieldset>
          
          {/* Recipient Details (simplified for POC) */}
           <div>
            <label htmlFor="recipient" className="text-sm font-medium text-gray-700">
              Recipient Bank Details
            </label>
            <textarea
                id="recipient"
                name="recipient"
                rows={3}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Bank Name, Account Number, Branch Code..."
            />
           </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Review Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;