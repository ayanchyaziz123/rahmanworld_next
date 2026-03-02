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
        "Through the exponent rise in online recruitment services, the job hunting process has been simplified to a great extent, but has also created a breed of online job ads, which are extremely dangerous to job seekers in terms of data security and finances. This research paper is a comparative and in-depth analysis of Machine Learning (ML), Deep Learning (DL), and Transformer-based architectures in detecting fraudulent job postings automatically. Using a dataset of 17,883 records with SMOTE to address class imbalance, we compared classifiers including Random Forest, SVM, XGBoost, BERT, and RoBERTa. XGBoost delivered the best results of 99.44% accuracy and 0.99 F1-score, followed by Random Forest (99.37%) and RoBERTa (99.04%).",
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
        "Over 52% of NYC renter households are cost-burdened, with ~30% severely so. This study develops a neighborhood-level explainable ML framework to forecast housing affordability across 239 NTAs using a panel of 2,512 observations (2012–2022). Integrating 46 features from ACS 5-year estimates, NYC eviction records, and ZORI, three gradient-boosted ensemble models — Random Forest, XGBoost, and LightGBM — are benchmarked under strict temporal splits with 5-fold TimeSeriesSplit cross-validation. LightGBM achieves the highest performance (Test R²=0.926, RMSE=0.035). SHAP analysis identifies rent burden, vacancy rate, and rent-to-income ratio as dominant drivers. Spatial diagnostics (Moran's I) confirm significant residual clustering. A 14-instrument policy matrix is proposed to support borough-differentiated zoning, voucher strategies, and anticipatory resource allocation.",
    pdfLink: null,
    status: "Pending",
    pdfLink: "/papers/IEEE_Housing_Paper_Full.pdf",
    github: "https://github.com/ayanchyaziz123/AI-Driven-Housing-Affordability-Forecasting-in-New-York-City",
    keywords: ["Housing Affordability", "XGBoost", "SHAP", "New York City", "NTA", "ACS", "Ensemble Learning", "Spatial Autocorrelation", "Rent Burden", "Time-Series CV"],
},
{
    title: "Exoplanet Classification Using Machine Learning: A Comparative Study of Random Forest, XGBoost, and Neural Networks",
    authors: ["Azizur Rahman"],
    year: 2025,
    venue: "NASA Exoplanet Archive Research",
    venueShort: "NASA 2025",
    category: "AI & Astronomy",
    abstract:
        "This study presents a machine learning pipeline for classifying exoplanets by their detection method using orbital and physical characteristics from the NASA Exoplanet Archive (38,090 records, 100 features). Key features include orbital period, planetary mass, equilibrium temperature, and insolation flux. After KNN imputation and feature standardization, three models were evaluated: Random Forest, XGBoost, and a Keras/TensorFlow Neural Network. XGBoost achieved the highest accuracy of ~95.3% across 11 discovery-method categories. SHAP analysis was applied for feature importance interpretation.",
    pdfLink: null,
    status: "Working",
    keywords: ["Exoplanet", "NASA Exoplanet Archive", "XGBoost", "Random Forest", "Neural Networks", "SHAP", "Astronomy"],
    github: "https://github.com/ayanchyaziz123/Exoplanet_Classification",
},
    {
        title: "Precision Maternal Health: Robust High Risk Pregnancy Prediction Via Ensemble Learning and Explainable AI",
        authors: ["Azizur Rahman"],
        year: 2025,
        venue: "International Journal of Computer Applications",
        venueShort: "IJCA 2025",
        category: "Healthcare AI",
        abstract:
            "This paper presents a robust machine learning framework for predicting high-risk pregnancies using ensemble learning and Explainable AI (XAI) techniques. By leveraging clinical and demographic features from maternal health datasets, the study compares multiple ensemble models to identify expectant mothers at elevated risk of adverse outcomes. SHAP-based explainability is applied to provide clinically interpretable predictions, bridging the gap between model performance and healthcare practitioner trust. The framework aims to support early intervention strategies and precision maternal care.",
        pdfLink: null,
        status: "Pending",
        keywords: ["Maternal Health", "High-Risk Pregnancy", "Ensemble Learning", "Explainable AI", "SHAP", "Healthcare ML", "Precision Medicine"],
        pdfLink: "/papers/planet-classification-2023.pdf",
    },
];

const categories = ['All', 'Machine Learning', 'Computer Vision', 'AI & Astronomy'];

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
