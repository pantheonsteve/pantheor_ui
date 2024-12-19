import { useState } from 'react';
import { useRouter } from 'next/router';
import StickySidebar from '@/components/StickySidebar';


export default function GongHome() {
  const router = useRouter();
  const [opportunityIdInput, setOpportunityIdInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!opportunityIdInput.trim()) {
      // Optionally display an error message if the input is empty
      alert('Please enter an Opportunity ID.');
      return;
    }
    router.push(`/gong/${opportunityIdInput}`);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <StickySidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{ marginLeft: '280px', overflowY: 'scroll' }}
      >
        <h1>Gong Call Summaries</h1>

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
      </div>
    </div>
  );
}
