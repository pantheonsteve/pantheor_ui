import React, { useState } from 'react';
import { useRouter } from 'next/router';

const GongCallForm: React.FC = () => {
  const router = useRouter();
  const [opportunityIdInput, setOpportunityIdInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!opportunityIdInput.trim()) {
      alert('Please enter a Gong Call ID.');
      return;
    }
    router.push(`/gong/${opportunityIdInput}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="opportunityId">Enter Gong Call ID:</label>
      <input
        type="text"
        id="opportunityId"
        value={opportunityIdInput}
        onChange={(e) => setOpportunityIdInput(e.target.value)}
        className='form-control'
      />
      <button type="submit" className='btn btn-primary mt-2'>Get Summary</button>
    </form>
  );
};

export default GongCallForm;
