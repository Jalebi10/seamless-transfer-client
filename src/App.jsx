import { useState } from 'react'; // Import useState to manage form data

function App() {
  // Create "state" variables to hold the form data in memory.
  const [amount, setAmount] = useState('2000');
  const [recipientDetails, setRecipientDetails] = useState('');
  const [feeOption, setFeeOption] = useState('add');

  // This function will run when the form is submitted
  const handleSubmit = async (event) => {
    // Prevent the browser from refreshing the page
    event.preventDefault(); 
    
    // Package the data into a clean object
    const transferData = {
      amount: parseFloat(amount),
      recipientDetails,
      feeOption,
    };

    console.log('Sending data to server:', transferData);

    try {
      // Use the fetch API to send the data to our back-end server
      const response = await fetch('http://localhost:3001/api/create-transfer', {
        method: 'POST', // We are sending data, so we use the POST method
        headers: {
          'Content-Type': 'application/json', // Tell the server we're sending JSON
        },
        body: JSON.stringify(transferData), // Convert our data object to a JSON string
      });

      const result = await response.json();
      alert(`Server says: ${result.message}`); // Show a confirmation to the user

    } catch (error) {
      console.error('Failed to send transfer request:', error);
      alert('Error: Could not connect to the server.');
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center font-sans">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-gray-900">Send Money</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Fast, secure, and seamless international transfers.</p>
        </div>
        
        {/* We add the onSubmit event handler to the form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="amount" className="text-sm font-medium text-gray-700">You send exactly</label>
            <div className="mt-1 relative">
              <input
                id="amount" type="number" required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                value={amount} // Connect input to our state variable
                onChange={(e) => setAmount(e.target.value)} // Update state when user types
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><span className="text-gray-500 sm:text-sm">ZAR</span></div>
            </div>
          </div>

          <fieldset className="pt-4">
            <legend className="text-sm font-medium text-gray-700">Transaction Fee</legend>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input id="addFee" name="feeOption" type="radio" value="add"
                  checked={feeOption === 'add'} // Connect to state
                  onChange={(e) => setFeeOption(e.target.value)} // Update state
                />
                <label htmlFor="addFee" className="ml-3 block text-sm text-gray-800">Add fee to my total (Recipient gets full amount)</label>
              </div>
              <div className="flex items-center">
                <input id="includeFee" name="feeOption" type="radio" value="include"
                  checked={feeOption === 'include'} // Connect to state
                  onChange={(e) => setFeeOption(e.target.value)} // Update state
                />
                <label htmlFor="includeFee" className="ml-3 block text-sm text-gray-800">Include fee in the amount I'm sending</label>
              </div>
            </div>
          </fieldset>
          
           <div>
            <label htmlFor="recipient" className="text-sm font-medium text-gray-700">Recipient Bank Details</label>
            <textarea
                id="recipient" name="recipient" rows={3}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Bank Name, Account Number, Branch Code..."
                value={recipientDetails} // Connect to state
                onChange={(e) => setRecipientDetails(e.target.value)} // Update state
            />
           </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Review Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;