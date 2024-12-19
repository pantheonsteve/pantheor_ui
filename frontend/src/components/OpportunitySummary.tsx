import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from 'remark-gfm';

interface OpportunitySummaryProps {
  id: string;
}

const OpportunitySummary: React.FC<OpportunitySummaryProps> = ({ id }) => {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // Correct placement: outside nested function

    const fetchSummary = async () => { // Single fetchSummary function
      try {
        const timestamp = Date.now();
        const response = await axios.get(`http://localhost:8000/api/opportunity/${id}?_${timestamp}`);
        if (isMounted) {
          setSummary(response.data.summary);
        }
      } catch (err) {
        if (isMounted) {
          if (axios.isAxiosError(err) && err.response) {
            if (err.response.status === 400) {
              setError(err.response.data.message || "Missing opportunity ID");
            } else if (err.response.status === 404) {  // Correct: Use a separate 404 handler
                setError("Summary not found for this ID");
            }
             else {
                setError("An error occurred while fetching the summary.");
             }
          } else {
            console.error("Error:", err);
            setError('An unexpected error occurred.');
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };  // End of fetchSummary

    fetchSummary(); // Call fetchSummary after it's defined

    return () => {  // Single cleanup function
      isMounted = false;
    };
  }, [id]);  // Correct dependency


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!summary) {
    return <p>No summary found.</p>;
  }

  return (
    <div>
      <h2>Opportunity Summary</h2>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={summary || ""}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                style={materialLight}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')} // Pass children to SyntaxHighlighter
                {...props}
              />
            ) : (
              <code className={className} {...props}>
               {String(children).replace(/\n$/, '')} {/* Also Stringify children here */}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default OpportunitySummary;