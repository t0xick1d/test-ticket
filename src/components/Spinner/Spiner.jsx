import React from 'react';

const Spinner = () => {
   return (
      <>
         <style>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s linear infinite;
          margin: auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
         <div className="spinner" />
      </>
   );
};

export default Spinner;
