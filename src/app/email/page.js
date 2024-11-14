// components/EmailTemplate.js
'use client'
import React, { useState } from 'react';

export default function EmailTemplate() {
    const [crNumber, setCrNumber] = useState('');
    const [title, setTitle] = useState('');
    const [recipientName, setRecipientName] = useState('');

    const handleCrNumberChange = (e) => setCrNumber(e.target.value);
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleRecipientNameChange = (e) => setRecipientName(e.target.value);

    const subject = `CR #${crNumber} (${title}) - Request for Requirements Documentation`;
    const emailBody = `
    Dear ${recipientName || '[Recipient\'s Name]'},

    I hope this message finds you well.

    We are reaching out to express our interest in bidding for CR #${crNumber}, titled "${title}". 
    To ensure that we respond accurately and effectively, could you kindly provide the relevant 
    requirements documentation for this project? This will allow us to prepare a detailed proposal 
    that aligns with your expectations.

    Thank you for your consideration. We look forward to the opportunity to work together.

    With regards,
    Azizur Rahman
    Next Generation Innovation L.L.C
    https://www.nexgeninnovation.com/
    Brooklyn, New York, NY 11208
    Phone: 347-669-6071
    `;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    return (
        <div className="container mx-auto max-w-screen-lg p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Email Template Generator</h2>
            <div className="my-4">
                <label className="block text-sm font-bold mb-2">CR Number:</label>
                <input
                    type="text"
                    value={crNumber}
                    onChange={handleCrNumberChange}
                    placeholder="Enter CR Number"
                    className="border p-2 w-full"
                />
            </div>
            <div className="my-4">
                <label className="block text-sm font-bold mb-2">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter Title"
                    className="border p-2 w-full"
                />
            </div>
            <div className="my-4">
                <label className="block text-sm font-bold mb-2">Recipient's Name:</label>
                <input
                    type="text"
                    value={recipientName}
                    onChange={handleRecipientNameChange}
                    placeholder="Enter Recipient's Name"
                    className="border p-2 w-full"
                />
            </div>
            <div className="my-4">
                <h3 className="font-bold mb-2">Subject:</h3>
                <p className="border p-2 bg-gray-100">{subject}</p>
                <button
                    onClick={() => copyToClipboard(subject)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Copy Subject
                </button>
            </div>
            <div className="my-4">
                <h3 className="font-bold mb-2">Email Body:</h3>
                <pre className="border p-4 bg-gray-100 whitespace-pre-wrap break-words m-0">{emailBody}</pre>
                <button
                    onClick={() => copyToClipboard(emailBody)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Copy Email Body
                </button>
            </div>
        </div>
    );
}
