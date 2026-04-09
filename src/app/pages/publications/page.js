'use client';
import React, { useState } from 'react';
import { FileText, Globe, Download, Calendar, Users, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

const publications = [{
    title: "Enhancing Online Recruitment Fraud Detection: A Comparative Analysis of Gradient Boosting and Transformer Architectures Under Severe Class Imbalance",
    authors: ["Azizur Rahman"],
    year: 2024,
    venue: "International Journal of Computer Applications",
    venueShort: "IJCA 2024",
    category: "Machine Learning",
    abstract:
        "The rise of online recruitment has introduced a surge of fraudulent job postings that threaten job seekers' data security and finances. This study comparatively evaluates ML, Deep Learning, and Transformer-based models on 17,883 records with SMOTE to handle class imbalance. Classifiers including Random Forest, SVM, XGBoost, BERT, and RoBERTa were benchmarked. XGBoost achieved the best performance with 99.44% accuracy and 0.99 F1-score, outperforming all deep learning baselines.",
    pdfLink: null,
    status: "Published",
    pdfLink: "/papers/Enhancing Online Recruitment Fraud Detection.pdf",
    github: "https://github.com/ayanchyaziz123/Enhancing-Online-Recruitment-Fraud-Detection",
    keywords: ["Online Recruitment Fraud", "NLP", "SMOTE", "XGBoost", "BERT", "Deep Learning"],
},
{
    title: "Predicting Housing Affordability in New York City: A Neighborhood-Level Machine Learning Analysis Across 239 NTAs (2012–2022)",
    authors: ["Azizur Rahman"],
    year: 2025,
    venue: "IEEE",
    venueShort: "IEEE 2025",
    category: "Machine Learning",
    abstract:
        "Over 52% of NYC renter households are cost-burdened, highlighting an urgent need for data-driven affordability forecasting. This study builds a neighborhood-level explainable ML framework across 239 NTAs (2012–2022) using 46 features from ACS, eviction records, and ZORI. LightGBM achieves the best performance (R²=0.926, RMSE=0.035) under strict temporal cross-validation. SHAP analysis pinpoints rent burden and vacancy rate as dominant drivers, and a 14-instrument policy matrix guides borough-level interventions.",
    pdfLink: null,
    status: "Pending",
    pdfLink: "/papers/IEEE_Housing_Paper_Full.pdf",
    github: "https://github.com/ayanchyaziz123/AI-Driven-Housing-Affordability-Forecasting-in-New-York-City",
    keywords: ["Housing Affordability", "XGBoost", "SHAP", "New York City", "NTA", "ACS", "Ensemble Learning", "Spatial Autocorrelation", "Rent Burden", "Time-Series CV"],
},
{
    title: "Exoplanet Classification Using Machine Learning: A Comparative Study of Random Forest, XGBoost, and Neural Networks",
    authors: ["Azizur Rahman, Nakib Uddin"],
    year: 2025,
    venue: "NASA Exoplanet Archive Research",
    venueShort: "NASA 2025",
    category: "AI & Astronomy",
    abstract:
        "This study builds a machine learning pipeline to classify exoplanets by detection method using 38,090 records and 100 orbital and physical features from the NASA Exoplanet Archive. After KNN imputation and standardization, Random Forest, XGBoost, and a Neural Network were compared across 11 discovery categories. XGBoost achieved the highest accuracy of ~95.3%. SHAP analysis was applied to interpret key feature contributions to classification decisions.",
    pdfLink: null,
    status: "Working",
    keywords: ["Exoplanet", "NASA Exoplanet Archive", "XGBoost", "Random Forest", "Neural Networks", "SHAP", "Astronomy"],
    github: "https://github.com/ayanchyaziz123/Exoplanet_Classification",
},
    {
        title: "Comparative Analysis of Machine Learning Algorithms for Alzheimer's Disease Pre-Screening Using Clinical and Lifestyle Data",
        authors: ["Azizur Rahman"],
        year: 2025,
        venue: "Springer Conference on Intelligent Systems and Computing",
        venueShort: "Springer 2025",
        category: "Healthcare AI",
        abstract:
            "Current Alzheimer's Disease diagnostics rely on expensive neuroimaging and invasive procedures, limiting accessibility for large-scale screening. This study benchmarks 18 ML algorithms on 2,149 patients with 33 clinical and lifestyle features including MMSE scores, BMI, cholesterol, and sleep quality. The Bagging Classifier achieved the best performance with 95.81% accuracy and 96.25% ROC-AUC, outperforming Gradient Boosting (95.35%) and Logistic Regression (81.40%). Results support accessible tabular data as an effective first-line AD risk stratification tool in primary care.",
        pdfLink: null,
        status: "Pending",
        keywords: ["Alzheimer's Disease", "Machine Learning", "Ensemble Methods", "Bagging Classifier", "XGBoost", "Gradient Boosting", "Clinical Decision Support", "Comparative Study", "Binary Classification"],
        github: "https://github.com/ayanchyaziz123/A-Multi-Stage-Ensemble-Framework-for-Pre-Clinical-Alzheimer-s-Screening-paper-and-code/blob/main/paper.pdf",
    },
    {
        title: "Precision Maternal Health: Robust High Risk Pregnancy Prediction Via Ensemble Learning and Explainable AI",
        authors: ["Azizur Rahman"],
        year: 2025,
        venue: "International Journal of Computer Applications",
        venueShort: "IJCA 2025",
        category: "Healthcare AI",
        abstract:
            "This study presents a machine learning framework for identifying high-risk pregnancies using ensemble learning and Explainable AI. Clinical and demographic features from maternal health datasets are used to train and compare multiple ensemble models for adverse outcome prediction. SHAP-based explanations provide clinically interpretable outputs to support practitioner trust. The framework targets early intervention and precision care in resource-constrained maternal health settings.",
        pdfLink: null,
        status: "Pending",
        keywords: ["Maternal Health", "High-Risk Pregnancy", "Ensemble Learning", "Explainable AI", "SHAP", "Healthcare ML", "Precision Medicine"],
        pdfLink: "/papers/planet-classification-2023.pdf",
    },
];

const categories = ['All', 'Machine Learning', 'Healthcare AI', 'Computer Vision', 'AI & Astronomy'];

export default function PublicationsPage() {
    const [active, setActive] = useState('All');

    const filtered =
        active === 'All'
            ? publications
            : publications.filter((p) => p.category === active);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-5xl mx-auto px-3 sm:px-6 py-5 sm:py-10">

                {/* ── Page header ── */}
                <header className="mb-4 sm:mb-8 border-b border-gray-200 pb-3 sm:pb-5">
                    <p className="text-xs font-medium tracking-widest uppercase text-blue-600 mb-3">
                        Academic Contributions
                    </p>
                    <h1 className="text-2xl sm:text-4xl font-light text-gray-900 mb-3">
                        Publications
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-lg max-w-2xl leading-relaxed">
                        Research at the intersection of machine learning, AI systems,
                        and applied sciences — from astronomy to healthcare diagnostics.
                    </p>
                </header>

                {/* ── Category filter ── */}
                <div className="flex flex-wrap gap-2 mb-5 sm:mb-7">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-1.5 text-sm border transition-colors duration-200 ${
                                active === cat
                                    ? 'border-blue-600 bg-blue-600 text-white'
                                    : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Publications list ── */}
                <div className="space-y-4 sm:space-y-6">
                    {filtered.map((pub, i) => (
                        <article
                            key={i}
                            className="border border-gray-200 p-4 sm:p-6 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">

                                {/* Main content */}
                                <div className="flex-1">
                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100">
                                            {pub.category}
                                        </span>
                                        <span className="text-xs px-2 py-0.5 bg-green-50 text-green-700 border border-green-100">
                                            {pub.status}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-lg font-medium text-gray-900 mb-3 leading-snug">
                                        {pub.title}
                                    </h2>

                                    {/* Meta */}
                                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 shrink-0" />
                                            {pub.authors.join(', ')}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 shrink-0" />
                                            {pub.year}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Globe className="w-3.5 h-3.5 shrink-0" />
                                            {pub.venue}
                                        </span>
                                    </div>

                                    {/* Abstract */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {pub.abstract}
                                    </p>

                                    {/* Keywords */}
                                    {pub.keywords && pub.keywords.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {pub.keywords.map((kw, ki) => (
                                                <span key={ki} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded">
                                                    {kw}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex md:flex-col gap-3 shrink-0">
                                    {pub.pdfLink && (
                                        <a
                                            href={pub.pdfLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-white border border-blue-200 hover:bg-blue-600 hover:border-blue-600 px-3 py-1.5 transition-colors duration-200"
                                        >
                                            <Download className="w-3.5 h-3.5" />
                                            PDF
                                        </a>
                                    )}
                                    {pub.github && (
                                        <a
                                            href={pub.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-white border border-gray-200 hover:bg-gray-800 hover:border-gray-800 px-3 py-1.5 transition-colors duration-200"
                                        >
                                            <Github className="w-3.5 h-3.5" />
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-gray-400">
                            <FileText className="w-10 h-10 mx-auto mb-3 opacity-40" />
                            <p className="text-sm">No publications in this category yet.</p>
                        </div>
                    )}
                </div>

                {/* ── Collaborate CTA ── */}
                <div className="mt-8 sm:mt-12 bg-slate-50 border border-gray-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                            Interested in Research Collaboration?
                        </h3>
                        <p className="text-sm text-gray-600">
                            I&apos;m open to joint research, co-authorship, and academic partnerships.
                        </p>
                    </div>
                    <Link
                        href="/pages/contact"
                        className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 shrink-0"
                    >
                        Get In Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
