import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import './WorkshopRegistration.css'; // We'll create this css file

const WorkshopRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        mobile: '',
        email: '',
        year: '',
        department: '',
        transactionId: '',
    });
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            if (!file) {
                throw new Error('Please upload the transaction proof.');
            }

            // Upload image
            const fileExt = file.name.split('.').pop();
            const fileName = `${formData.mobile}_${Date.now()}.${fileExt}`;
            const { data: fileData, error: fileError } = await supabase.storage
                .from('payment_proofs')
                .upload(fileName, file);

            if (fileError) throw fileError;

            // Insert data
            const { data, error } = await supabase
                .from('workshop_registrations')
                .insert([
                    {
                        ...formData,
                        transaction_proof_url: fileData.path,
                    },
                ]);

            if (error) throw error;

            setMessage('Registration successful! 🎉');
            setFormData({
                name: '',
                college: '',
                mobile: '',
                email: '',
                year: '',
                department: '',
                transactionId: '',
            });
            setFile(null);
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="workshop-container">
            <div className="workshop-hero">
                <h1>INTERRUPT'26 - WORKSHOP</h1>
                <h2>🚀 Generative AI + RAG Workshop – Build Intelligent Academic Systems ⚡</h2>
                <p>
                    Step into the world of Generative AI and Retrieval-Augmented Generation (RAG) in this hands-on workshop! 🔥
                    Explore how modern AI systems can understand, retrieve, and generate accurate information using real data.
                </p>
                <p>
                    Participants will learn the fundamentals of LLMs, embeddings, and vector databases, and build a simple student
                    records & academics application that answers queries with context. From understanding core concepts to
                    integrating a basic interface, this session equips you with practical skills for real-world AI applications in
                    education and industry.
                </p>
            </div>

            <div className="workshop-form-wrapper">
                <form onSubmit={handleSubmit} className="workshop-form">
                    <div className="form-group">
                        <label>Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>College Name *</label>
                        <input type="text" name="college" value={formData.college} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Mobile Number *</label>
                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Year *</label>
                        <select name="year" value={formData.year} onChange={handleChange} required>
                            <option value="">Select Year</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Department *</label>
                        <input type="text" name="department" value={formData.department} onChange={handleChange} required />
                    </div>

                    <div className="payment-section">
                        <h3>Payment Details</h3>
                        <div className="qr-display">
                            <label>QR Code</label>
                            {/* Placeholder for QR Code */}
                            <img src="https://placehold.co/200x200?text=QR+Code" alt="Payment QR Code" className="qr-image" />
                        </div>

                        <div className="form-group">
                            <label>Transaction ID *</label>
                            <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Transaction Proof *</label>
                            <p className="file-hint">Upload 1 supported file: image. Max 10 MB.</p>
                            <input type="file" accept="image/*" onChange={handleFileChange} required />
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="submit-btn">
                        {loading ? 'Registering...' : 'Register Now'}
                    </button>

                    {message && <p className="form-message">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default WorkshopRegistration;
