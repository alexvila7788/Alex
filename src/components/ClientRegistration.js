import React, { useState } from 'react';

const ClientRegistration = () => {
  const [clientCode, setClientCode] = useState('');
  const [clientName, setClientName] = useState('');
  const [city, setCity] = useState('');
  const [cargoType, setCargoType] = useState('');
  const [operationType, setOperationType] = useState('');

  const cargoOptions = [
    { value: 'dry', label: 'Dry Cargo' },
    { value: 'fuel', label: 'Fuel' },
    { value: 'disposal', label: 'Disposal' },
  ];

  const operationOptions = [
    { value: 'export', label: 'Export' },
    { value: 'disposal', label: 'Disposal' },
    { value: 'fuelCollection', label: 'Fuel Collection' },
    { value: 'collection', label: 'Collection' },
    { value: 'globalizedCrossTransfer', label: 'Globalized Cross Transfer' },
    { value: 'normalCrossTransfer', label: 'Normal Cross Transfer' },
    { value: 'transfer', label: 'Transfer' },
    { value: 'globalizedDirectDelivery', label: 'Globalized Direct Delivery' },
    { value: 'normalDelivery', label: 'Normal Delivery' },
  ];

  const handleSubmit = () => {
    console.log({
      clientCode,
      clientName,
      city,
      cargoType,
      operationType,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Client Registration</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="clientCode" className="block text-gray-700 font-medium mb-2">
            Client Code
          </label>
          <input
            type="text"
            id="clientCode"
            className="border rounded-md px-3 py-2 w-full"
            value={clientCode}
            onChange={(e) => setClientCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="clientName" className="block text-gray-700 font-medium mb-2">
            Client Name
          </label>
          <input
            type="text"
            id="clientName"
            className="border rounded-md px-3 py-2 w-full"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            className="border rounded-md px-3 py-2 w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cargoType" className="block text-gray-700 font-medium mb-2">
            Cargo Type
          </label>
          <select
            id="cargoType"
            className="border rounded-md px-3 py-2 w-full"
            value={cargoType}
            onChange={(e) => setCargoType(e.target.value)}
          >
            <option value="">Select Cargo Type</option>
            {cargoOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="operationType" className="block text-gray-700 font-medium mb-2">
            Operation Type
          </label>
          <select
            id="operationType"
            className="border rounded-md px-3 py-2 w-full"
            value={operationType}
            onChange={(e) => setOperationType(e.target.value)}
          >
            <option value="">Select Operation Type</option>
            {operationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ClientRegistration;
