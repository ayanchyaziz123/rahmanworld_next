export const blogs = [
  {
    title: "Machine Learning Basics: Types and Algorithms",
    description: "A complete overview of all types of machine learning — Supervised, Unsupervised, Semi-Supervised, and Reinforcement Learning — and the key algorithms in each category.",
    date: "February 22, 2026",
    category: "Machine Learning",
    readTime: 8,
    slug: "machine-learning-basics-types-algorithms",
    content: `
      <p>Machine learning is a branch of artificial intelligence that enables computers to learn patterns from data without being explicitly programmed. Before diving into specific algorithms, it is essential to understand the different types of machine learning and which algorithms belong to each type.</p>

      <h3>The 4 Types of Machine Learning</h3>

      <div style="margin:1.5rem 0;">
        <svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:560px;display:block;margin:0 auto;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">
          <!-- Root -->
          <rect x="200" y="12" width="160" height="36" rx="6" fill="#1e40af"/>
          <text x="280" y="35" text-anchor="middle" font-size="13" font-weight="600" fill="white">Machine Learning</text>
          <!-- Lines from root -->
          <line x1="280" y1="48" x2="70"  y2="90" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="280" y1="48" x2="190" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="280" y1="48" x2="370" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
          <line x1="280" y1="48" x2="490" y2="90" stroke="#94a3b8" stroke-width="1.5"/>
          <!-- Boxes -->
          <rect x="10"  y="90" width="120" height="36" rx="6" fill="#0369a1"/>
          <text x="70"  y="113" text-anchor="middle" font-size="11" font-weight="600" fill="white">Supervised</text>
          <rect x="130" y="90" width="120" height="36" rx="6" fill="#0369a1"/>
          <text x="190" y="113" text-anchor="middle" font-size="11" font-weight="600" fill="white">Unsupervised</text>
          <rect x="310" y="90" width="120" height="36" rx="6" fill="#0369a1"/>
          <text x="370" y="113" text-anchor="middle" font-size="11" font-weight="600" fill="white">Semi-Supervised</text>
          <rect x="430" y="90" width="120" height="36" rx="6" fill="#0369a1"/>
          <text x="490" y="113" text-anchor="middle" font-size="11" font-weight="600" fill="white">Reinforcement</text>
          <!-- Sub labels -->
          <text x="70"  y="148" text-anchor="middle" font-size="10" fill="#64748b">Labeled data</text>
          <text x="190" y="148" text-anchor="middle" font-size="10" fill="#64748b">Unlabeled data</text>
          <text x="370" y="148" text-anchor="middle" font-size="10" fill="#64748b">Mixed data</text>
          <text x="490" y="148" text-anchor="middle" font-size="10" fill="#64748b">Reward-based</text>
        </svg>
      </div>

      <h3>1. Supervised Learning</h3>
      <p>The model is trained on <strong>labeled data</strong> — each input has a known correct output. The goal is to learn a mapping from inputs to outputs.</p>
      <p><strong>Use when:</strong> You have labeled historical data and want to predict an outcome.</p>

      <h4>Classification Algorithms</h4>
      <p>Predicts a <strong>discrete class label</strong> (e.g., spam/not spam, disease/healthy).</p>
      <table>
        <thead><tr><th>Algorithm</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>Logistic Regression</td><td>Sigmoid function maps linear output to probability</td></tr>
          <tr><td>K-Nearest Neighbors (KNN)</td><td>Classifies based on majority vote of K closest points</td></tr>
          <tr><td>Naive Bayes</td><td>Probabilistic model using Bayes theorem with feature independence</td></tr>
          <tr><td>Support Vector Machine (SVM)</td><td>Finds the optimal hyperplane that maximizes margin between classes</td></tr>
          <tr><td>Decision Tree</td><td>Splits data using information gain or Gini impurity</td></tr>
          <tr><td>Random Forest</td><td>Ensemble of decision trees using bagging + feature randomness</td></tr>
          <tr><td>XGBoost / LightGBM</td><td>Gradient boosting — sequentially corrects errors of previous trees</td></tr>
          <tr><td>Neural Network (MLP)</td><td>Layers of interconnected neurons learning complex patterns</td></tr>
        </tbody>
      </table>

      <h4>Regression Algorithms</h4>
      <p>Predicts a <strong>continuous numerical value</strong> (e.g., house price, temperature, marks).</p>
      <table>
        <thead><tr><th>Algorithm</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>Linear Regression</td><td>Fits a straight line: y = mx + c</td></tr>
          <tr><td>Polynomial Regression</td><td>Fits a curved line using polynomial features</td></tr>
          <tr><td>Ridge Regression (L2)</td><td>Linear regression with L2 regularization to prevent overfitting</td></tr>
          <tr><td>Lasso Regression (L1)</td><td>Linear regression with L1 regularization — performs feature selection</td></tr>
          <tr><td>ElasticNet</td><td>Combines L1 and L2 regularization</td></tr>
          <tr><td>SVR (Support Vector Regression)</td><td>SVM adapted for predicting continuous values</td></tr>
          <tr><td>Decision Tree Regressor</td><td>Tree that predicts average value in each leaf</td></tr>
          <tr><td>Random Forest Regressor</td><td>Ensemble of regression trees — averages predictions</td></tr>
          <tr><td>XGBoost Regressor</td><td>Gradient boosting for regression tasks</td></tr>
        </tbody>
      </table>

      <h3>2. Unsupervised Learning</h3>
      <p>The model is trained on <strong>unlabeled data</strong>. It must discover hidden patterns or structure on its own — no correct answers are given.</p>
      <p><strong>Use when:</strong> You have no labels and want to find natural groupings, reduce dimensions, or detect anomalies.</p>

      <h4>Clustering Algorithms</h4>
      <p>Groups similar data points together without predefined labels.</p>
      <table>
        <thead><tr><th>Algorithm</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>K-Means</td><td>Partitions data into K clusters by minimizing within-cluster variance</td></tr>
          <tr><td>DBSCAN</td><td>Density-based clustering — finds clusters of arbitrary shape, detects outliers</td></tr>
          <tr><td>Hierarchical Clustering</td><td>Builds a tree of clusters (dendrogram) — agglomerative or divisive</td></tr>
          <tr><td>Gaussian Mixture Models (GMM)</td><td>Probabilistic model assuming data is generated from multiple Gaussian distributions</td></tr>
          <tr><td>Mean Shift</td><td>Finds cluster centers by shifting toward high-density regions</td></tr>
        </tbody>
      </table>

      <h4>Dimensionality Reduction Algorithms</h4>
      <p>Reduces the number of features while preserving important information.</p>
      <table>
        <thead><tr><th>Algorithm</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>PCA (Principal Component Analysis)</td><td>Projects data onto axes of maximum variance</td></tr>
          <tr><td>t-SNE</td><td>Non-linear reduction optimized for 2D/3D visualization</td></tr>
          <tr><td>UMAP</td><td>Faster alternative to t-SNE, better preserves global structure</td></tr>
          <tr><td>LDA (Linear Discriminant Analysis)</td><td>Maximizes class separability (also used in supervised settings)</td></tr>
          <tr><td>Autoencoders</td><td>Neural network that learns a compressed representation of data</td></tr>
        </tbody>
      </table>

      <h4>Association Rule Learning</h4>
      <p>Finds interesting relationships between variables in large datasets.</p>
      <table>
        <thead><tr><th>Algorithm</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>Apriori</td><td>Finds frequent itemsets using minimum support threshold</td></tr>
          <tr><td>FP-Growth</td><td>Faster than Apriori — uses a compressed tree structure</td></tr>
          <tr><td>Eclat</td><td>Vertical data format for efficient frequent pattern mining</td></tr>
        </tbody>
      </table>

      <h4>Anomaly Detection Algorithms</h4>
      <table>
        <thead><tr><th>Algorithm</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>Isolation Forest</td><td>Isolates anomalies by random partitioning — anomalies need fewer splits</td></tr>
          <tr><td>One-Class SVM</td><td>Learns a boundary around normal data — detects outliers outside it</td></tr>
          <tr><td>Local Outlier Factor (LOF)</td><td>Compares local density of a point to its neighbors</td></tr>
          <tr><td>Autoencoder-based</td><td>High reconstruction error = anomaly</td></tr>
        </tbody>
      </table>

      <h3>3. Semi-Supervised Learning</h3>
      <p>Uses a <strong>small amount of labeled data</strong> combined with a large amount of unlabeled data. Useful when labeling data is expensive or time-consuming.</p>
      <p><strong>Use when:</strong> You have very few labeled examples but lots of unlabeled data (e.g., medical imaging, text classification).</p>
      <table>
        <thead><tr><th>Algorithm</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>Self-Training</td><td>Train on labeled data, predict on unlabeled, add high-confidence predictions as labels</td></tr>
          <tr><td>Label Propagation</td><td>Spread labels from labeled to unlabeled nodes through a graph</td></tr>
          <tr><td>Label Spreading</td><td>Similar to Label Propagation but more robust to noise</td></tr>
          <tr><td>Co-Training</td><td>Two classifiers trained on different views of data teach each other</td></tr>
          <tr><td>Generative Models (VAE, GAN)</td><td>Learn the data distribution from unlabeled + labeled data</td></tr>
          <tr><td>Pseudo-Labeling</td><td>Use model predictions as labels for unlabeled data iteratively</td></tr>
        </tbody>
      </table>

      <h3>4. Reinforcement Learning</h3>
      <p>An agent learns to make decisions by interacting with an environment to <strong>maximize cumulative reward</strong>. No labeled data — the agent learns from trial and error.</p>
      <p><strong>Use when:</strong> The problem involves sequential decisions (robotics, games, autonomous driving, trading).</p>
      <table>
        <thead><tr><th>Algorithm</th><th>Key Idea</th></tr></thead>
        <tbody>
          <tr><td>Q-Learning</td><td>Learns a Q-table mapping (state, action) → expected reward</td></tr>
          <tr><td>SARSA</td><td>On-policy version of Q-learning — updates based on actual action taken</td></tr>
          <tr><td>Deep Q-Network (DQN)</td><td>Q-learning with a neural network instead of a table (used in Atari games)</td></tr>
          <tr><td>Policy Gradient (REINFORCE)</td><td>Directly optimizes the policy by maximizing expected reward</td></tr>
          <tr><td>Actor-Critic (A2C / A3C)</td><td>Combines policy gradient (actor) with value estimation (critic)</td></tr>
          <tr><td>Proximal Policy Optimization (PPO)</td><td>Stable, state-of-the-art policy gradient — used in ChatGPT (RLHF)</td></tr>
          <tr><td>DDPG</td><td>Continuous action spaces using deterministic policy gradient</td></tr>
          <tr><td>SAC (Soft Actor-Critic)</td><td>Maximum entropy RL — balances reward and exploration</td></tr>
        </tbody>
      </table>

      <h3>Quick Summary</h3>
      <table>
        <thead>
          <tr><th>Type</th><th>Data</th><th>Goal</th><th>Example Use Case</th></tr>
        </thead>
        <tbody>
          <tr><td>Supervised</td><td>Labeled</td><td>Predict output</td><td>Spam detection, price prediction</td></tr>
          <tr><td>Unsupervised</td><td>Unlabeled</td><td>Find patterns</td><td>Customer segmentation, anomaly detection</td></tr>
          <tr><td>Semi-Supervised</td><td>Mixed</td><td>Learn with few labels</td><td>Medical image classification</td></tr>
          <tr><td>Reinforcement</td><td>Environment</td><td>Maximize reward</td><td>Game AI, robotics, autonomous driving</td></tr>
        </tbody>
      </table>

      <h3>Conclusion</h3>
      <p>Understanding the landscape of machine learning algorithms is the first step to choosing the right tool for any problem. Start with supervised learning for most real-world tasks with labeled data. Use unsupervised methods when labels are unavailable. Apply semi-supervised when labels are scarce. Explore reinforcement learning for sequential decision-making problems.</p>
    `
  },

  {
  title: "Linear Regression in Machine Learning",
  description: "A complete guide to linear regression — the formula, step-by-step manual calculation of slope and intercept, and Python implementation with scikit-learn.",
  date: "November 17, 2024",
  category: "Machine Learning",
  readTime: 10,
  content: `
      <p>Linear regression is one of the most fundamental algorithms in machine learning. It models the relationship between an independent variable (X) and a dependent variable (Y) by fitting a straight line through the data.</p>

      <h3>The Formula: y = mx + c</h3>
      <p>Every linear regression line follows this equation:</p>
      <pre><code>y = mx + c</code></pre>
      <table>
        <thead><tr><th>Symbol</th><th>Name</th><th>Meaning</th></tr></thead>
        <tbody>
          <tr><td>y</td><td>Dependent variable</td><td>What we are predicting (output)</td></tr>
          <tr><td>x</td><td>Independent variable</td><td>The input feature</td></tr>
          <tr><td>m</td><td>Slope</td><td>Rate of change of y with respect to x (Δy / Δx)</td></tr>
          <tr><td>c</td><td>Intercept</td><td>Value of y when x = 0</td></tr>
        </tbody>
      </table>
      <p><strong>Slope interpretation:</strong></p>
      <ul>
        <li>If m &gt; 0 → y increases as x increases (positive relationship)</li>
        <li>If m &lt; 0 → y decreases as x increases (negative relationship)</li>
        <li>If m = 0 → no relationship between x and y</li>
      </ul>

      <h3>Real-World Example: Hours Studied vs Marks</h3>
      <p>Let’s manually calculate the slope and intercept using this dataset:</p>
      <table>
        <thead><tr><th>Hours Studied (X)</th><th>Marks (Y)</th></tr></thead>
        <tbody>
          <tr><td>10</td><td>95</td></tr>
          <tr><td>5</td><td>40</td></tr>
          <tr><td>4</td><td>30</td></tr>
          <tr><td>9</td><td>90</td></tr>
          <tr><td>8</td><td>77</td></tr>
          <tr><td>2</td><td>20</td></tr>
          <tr><td>6</td><td>55</td></tr>
        </tbody>
      </table>

      <h3>Step 1: Compute the Mean of X and Y</h3>
      <pre><code>X̄ = (10 + 5 + 4 + 9 + 8 + 2 + 6) / 7 = 44 / 7 ≈ 6.2857

Ȳ = (95 + 40 + 30 + 90 + 77 + 20 + 55) / 7 = 407 / 7 ≈ 58.1429</code></pre>

      <h3>Step 2: Compute the Slope (M)</h3>
      <p>The formula for slope in linear regression is:</p>
      <pre><code>M = Σ(Xi - X̄)(Yi - Ȳ) / Σ(Xi - X̄)²</code></pre>
      <p>Calculate each term for every data point:</p>
      <table>
        <thead>
          <tr><th>X</th><th>Y</th><th>X - X̄</th><th>Y - Ȳ</th><th>(X-X̄)(Y-Ȳ)</th><th>(X-X̄)²</th></tr>
        </thead>
        <tbody>
          <tr><td>10</td><td>95</td><td>3.7143</td><td>36.8571</td><td>137.00</td><td>13.80</td></tr>
          <tr><td>5</td><td>40</td><td>-1.2857</td><td>-18.1429</td><td>23.30</td><td>1.65</td></tr>
          <tr><td>4</td><td>30</td><td>-2.2857</td><td>-28.1429</td><td>64.33</td><td>5.22</td></tr>
          <tr><td>9</td><td>90</td><td>2.7143</td><td>31.8571</td><td>86.45</td><td>7.36</td></tr>
          <tr><td>8</td><td>77</td><td>1.7143</td><td>18.8571</td><td>32.33</td><td>2.94</td></tr>
          <tr><td>2</td><td>20</td><td>-4.2857</td><td>-38.1429</td><td>163.56</td><td>18.37</td></tr>
          <tr><td>6</td><td>55</td><td>-0.2857</td><td>-3.1429</td><td>0.90</td><td>0.08</td></tr>
        </tbody>
      </table>

      <h3>Step 3: Sum the Values</h3>
      <pre><code>Σ(Xi - X̄)(Yi - Ȳ) = 137 + 23.3 + 64.33 + 86.45 + 32.33 + 163.56 + 0.9 ≈ 507.87

Σ(Xi - X̄)²        = 13.8 + 1.65 + 5.22 + 7.36 + 2.94 + 18.37 + 0.08 ≈ 49.42</code></pre>

      <h3>Step 4: Calculate the Slope M</h3>
      <pre><code>M = 507.87 / 49.42 ≈ 10.28</code></pre>
      <p>This means: for every 1 extra hour studied, marks increase by approximately <strong>10.28 points</strong>.</p>

      <h3>Step 5: Calculate the Intercept C</h3>
      <pre><code>C = Ȳ - M · X̄
C = 58.1429 - (10.28 × 6.2857)
C = 58.1429 - 64.62
C ≈ -6.48</code></pre>

      <h3>Final Equation</h3>
      <pre><code>y = 10.28x - 6.48</code></pre>

      <h3>Graph: Scatter Plot with Regression Line</h3>
      <p>The chart below shows all 7 data points (blue dots) and the fitted regression line (red).</p>

      <div style="margin:1.5rem 0;">
        <svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">

          <!-- Title -->
          <text x="260" y="22" text-anchor="middle" font-size="13" font-weight="600" fill="#111827">Hours Studied vs Marks</text>

          <!-- Y grid lines -->
          <line x1="60" y1="290" x2="500" y2="290" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="60" y1="245" x2="500" y2="245" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="60" y1="199" x2="500" y2="199" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="60" y1="154" x2="500" y2="154" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="60" y1="108" x2="500" y2="108" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="60" y1="63"  x2="500" y2="63"  stroke="#e5e7eb" stroke-width="1"/>

          <!-- X grid lines -->
          <line x1="133" y1="40" x2="133" y2="290" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="207" y1="40" x2="207" y2="290" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="280" y1="40" x2="280" y2="290" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="353" y1="40" x2="353" y2="290" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="427" y1="40" x2="427" y2="290" stroke="#e5e7eb" stroke-width="1"/>
          <line x1="500" y1="40" x2="500" y2="290" stroke="#e5e7eb" stroke-width="1"/>

          <!-- Axes -->
          <line x1="60" y1="40" x2="60"  y2="295" stroke="#374151" stroke-width="1.5"/>
          <line x1="55" y1="290" x2="505" y2="290" stroke="#374151" stroke-width="1.5"/>

          <!-- Regression line: y=10.28x-6.48, start(x=0.631,y=0) → end(x=11.33,y=110) -->
          <!-- px(x)=60+(x/12)*440, py(y)=290-(y/110)*250 -->
          <!-- Start: px(0.631)=83, py(0)=290 -->
          <!-- End:   px(11.33)=475, py(110)=40 -->
          <line x1="83" y1="290" x2="475" y2="40" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3"/>

          <!-- Data points -->
          <!-- (2,20): px=133, py=245 -->
          <circle cx="133" cy="245" r="6" fill="#3b82f6" stroke="white" stroke-width="1.5"/>
          <!-- (4,30): px=207, py=222 -->
          <circle cx="207" cy="222" r="6" fill="#3b82f6" stroke="white" stroke-width="1.5"/>
          <!-- (5,40): px=243, py=199 -->
          <circle cx="243" cy="199" r="6" fill="#3b82f6" stroke="white" stroke-width="1.5"/>
          <!-- (6,55): px=280, py=165 -->
          <circle cx="280" cy="165" r="6" fill="#3b82f6" stroke="white" stroke-width="1.5"/>
          <!-- (8,77): px=353, py=115 -->
          <circle cx="353" cy="115" r="6" fill="#3b82f6" stroke="white" stroke-width="1.5"/>
          <!-- (9,90): px=390, py=85 -->
          <circle cx="390" cy="85"  r="6" fill="#3b82f6" stroke="white" stroke-width="1.5"/>
          <!-- (10,95): px=427, py=75 -->
          <circle cx="427" cy="75"  r="6" fill="#3b82f6" stroke="white" stroke-width="1.5"/>

          <!-- X axis labels -->
          <text x="60"  y="310" text-anchor="middle" font-size="11" fill="#6b7280">0</text>
          <text x="133" y="310" text-anchor="middle" font-size="11" fill="#6b7280">2</text>
          <text x="207" y="310" text-anchor="middle" font-size="11" fill="#6b7280">4</text>
          <text x="280" y="310" text-anchor="middle" font-size="11" fill="#6b7280">6</text>
          <text x="353" y="310" text-anchor="middle" font-size="11" fill="#6b7280">8</text>
          <text x="427" y="310" text-anchor="middle" font-size="11" fill="#6b7280">10</text>
          <text x="500" y="310" text-anchor="middle" font-size="11" fill="#6b7280">12</text>

          <!-- Y axis labels -->
          <text x="52" y="294" text-anchor="end" font-size="11" fill="#6b7280">0</text>
          <text x="52" y="249" text-anchor="end" font-size="11" fill="#6b7280">20</text>
          <text x="52" y="203" text-anchor="end" font-size="11" fill="#6b7280">40</text>
          <text x="52" y="158" text-anchor="end" font-size="11" fill="#6b7280">60</text>
          <text x="52" y="112" text-anchor="end" font-size="11" fill="#6b7280">80</text>
          <text x="52" y="67"  text-anchor="end" font-size="11" fill="#6b7280">100</text>

          <!-- Axis titles -->
          <text x="280" y="330" text-anchor="middle" font-size="12" fill="#374151" font-weight="500">Hours Studied (X)</text>
          <text x="14" y="170" text-anchor="middle" font-size="12" fill="#374151" font-weight="500" transform="rotate(-90,14,170)">Marks (Y)</text>

          <!-- Equation label -->
          <text x="370" y="135" font-size="11" fill="#ef4444" font-weight="600">y = 10.28x − 6.48</text>

          <!-- Legend -->
          <circle cx="72"  cy="55" r="5" fill="#3b82f6"/>
          <text x="82" y="59" font-size="11" fill="#374151">Data points</text>
          <line x1="140" y1="55" x2="165" y2="55" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3"/>
          <text x="170" y="59" font-size="11" fill="#374151">Regression line</text>
        </svg>
      </div>

      <p>Now we can predict marks for any number of study hours:</p>
      <pre><code># If a student studies 7 hours:
y = 10.28 × 7 - 6.48 = 71.96 - 6.48 ≈ 65.5 marks

# If a student studies 3 hours:
y = 10.28 × 3 - 6.48 = 30.84 - 6.48 ≈ 24.4 marks</code></pre>

      <h3>Regression Validation Metrics</h3>
      <p>After building a model, you must measure how well it performs. Here are all the key metrics used to validate a regression model:</p>

      <h4>1. MAE — Mean Absolute Error</h4>
      <p>The average of absolute differences between actual and predicted values. Easy to interpret: "on average, predictions are off by X units."</p>
      <pre><code>MAE = (1/n) × Σ |y_actual - y_predicted|</code></pre>
      <ul>
        <li>Unit: same as the target variable (marks, dollars, etc.)</li>
        <li>Robust to outliers — treats all errors equally</li>
        <li>Lower = better. MAE = 0 means perfect predictions</li>
      </ul>

      <h4>2. MSE — Mean Squared Error</h4>
      <p>The average of squared differences. Penalizes large errors more heavily because of the squaring.</p>
      <pre><code>MSE = (1/n) × Σ (y_actual - y_predicted)²</code></pre>
      <ul>
        <li>Unit: square of target (e.g., marks²) — harder to interpret directly</li>
        <li>Sensitive to outliers — one large error inflates MSE significantly</li>
        <li>Lower = better</li>
      </ul>

      <h4>3. RMSE — Root Mean Squared Error</h4>
      <p>Square root of MSE. Brings the unit back to the original scale like MAE, but still penalizes large errors more than MAE.</p>
      <pre><code>RMSE = √MSE = √[ (1/n) × Σ (y_actual - y_predicted)² ]</code></pre>
      <ul>
        <li>Unit: same as the target variable</li>
        <li>RMSE ≥ MAE always. If RMSE >> MAE, there are large outlier errors</li>
        <li>Most commonly reported metric in regression papers</li>
      </ul>

      <h4>4. R² — Coefficient of Determination</h4>
      <p>Measures how much of the variance in Y is explained by the model. Range: 0 to 1 (can be negative for very poor models).</p>
      <pre><code>R² = 1 - (SS_res / SS_tot)

SS_res = Σ (y_actual - y_predicted)²    ← residual sum of squares
SS_tot = Σ (y_actual - ȳ)²             ← total sum of squares</code></pre>
      <table>
        <thead><tr><th>R² Value</th><th>Interpretation</th></tr></thead>
        <tbody>
          <tr><td>1.00</td><td>Perfect — model explains all variance</td></tr>
          <tr><td>0.90 – 0.99</td><td>Excellent fit</td></tr>
          <tr><td>0.70 – 0.89</td><td>Good fit</td></tr>
          <tr><td>0.50 – 0.69</td><td>Moderate fit</td></tr>
          <tr><td>Below 0.50</td><td>Poor fit</td></tr>
          <tr><td>Negative</td><td>Worse than predicting the mean</td></tr>
        </tbody>
      </table>

      <h4>5. Adjusted R²</h4>
      <p>R² always increases when you add more features — even useless ones. Adjusted R² penalizes adding features that don't improve the model.</p>
      <pre><code>Adjusted R² = 1 - [(1 - R²)(n - 1) / (n - k - 1)]

n = number of samples
k = number of features (independent variables)</code></pre>
      <ul>
        <li>Use Adjusted R² when comparing models with different numbers of features</li>
        <li>If Adjusted R² &lt; R², the extra features are not helping</li>
      </ul>

      <h4>6. MAPE — Mean Absolute Percentage Error</h4>
      <p>Expresses error as a percentage of the actual value. Useful when you want to communicate accuracy in percentage terms.</p>
      <pre><code>MAPE = (100/n) × Σ |( y_actual - y_predicted ) / y_actual|</code></pre>
      <ul>
        <li>Unit: percentage (%)</li>
        <li>Easy to explain to non-technical stakeholders ("predictions are off by 5% on average")</li>
        <li>Problem: undefined when y_actual = 0</li>
      </ul>

      <h4>7. MASE — Mean Absolute Scaled Error</h4>
      <p>MAE of the model scaled by the MAE of a naive baseline (predicting yesterday's value). Useful for comparing across datasets with different scales.</p>
      <pre><code>MASE = MAE / MAE_naive

MAE_naive = (1/(n-1)) × Σ |y_t - y_(t-1)|   ← naive forecast error</code></pre>
      <ul>
        <li>MASE &lt; 1 → model is better than the naive baseline</li>
        <li>MASE &gt; 1 → model is worse than the naive baseline</li>
        <li>Scale-independent — can compare across different problems</li>
      </ul>

      <h4>8. Max Error</h4>
      <p>The single largest prediction error. Useful when worst-case performance matters (e.g., medical, financial systems).</p>
      <pre><code>Max Error = max( |y_actual - y_predicted| )</code></pre>

      <h3>Metrics Comparison Table</h3>
      <table>
        <thead>
          <tr><th>Metric</th><th>Unit</th><th>Outlier Sensitive</th><th>Range</th><th>Best Use</th></tr>
        </thead>
        <tbody>
          <tr><td>MAE</td><td>Same as Y</td><td>No</td><td>[0, ∞)</td><td>General purpose, robust</td></tr>
          <tr><td>MSE</td><td>Y²</td><td>Yes</td><td>[0, ∞)</td><td>When large errors must be penalized</td></tr>
          <tr><td>RMSE</td><td>Same as Y</td><td>Yes</td><td>[0, ∞)</td><td>Most common in papers & competitions</td></tr>
          <tr><td>R²</td><td>None</td><td>Moderate</td><td>(-∞, 1]</td><td>Explaining variance explained</td></tr>
          <tr><td>Adjusted R²</td><td>None</td><td>Moderate</td><td>(-∞, 1]</td><td>Comparing multi-feature models</td></tr>
          <tr><td>MAPE</td><td>%</td><td>No</td><td>[0, ∞)</td><td>Business reporting</td></tr>
          <tr><td>MASE</td><td>None</td><td>No</td><td>[0, ∞)</td><td>Cross-dataset comparison</td></tr>
          <tr><td>Max Error</td><td>Same as Y</td><td>Extreme</td><td>[0, ∞)</td><td>Safety-critical worst-case analysis</td></tr>
        </tbody>
      </table>

      <h3>Python: Computing All Metrics at Once</h3>
      <pre><code>from sklearn.linear_model import LinearRegression
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
    max_error,
    mean_absolute_percentage_error
)
import numpy as np

# Dataset
X = np.array([10, 5, 4, 9, 8, 2, 6]).reshape(-1, 1)
y = np.array([95, 40, 30, 90, 77, 20, 55])

# Train model
model = LinearRegression()
model.fit(X, y)
y_pred = model.predict(X)

# Compute all metrics
mae   = mean_absolute_error(y, y_pred)
mse   = mean_squared_error(y, y_pred)
rmse  = np.sqrt(mse)
r2    = r2_score(y, y_pred)
n, k  = len(y), 1
adj_r2 = 1 - (1 - r2) * (n - 1) / (n - k - 1)
mape  = mean_absolute_percentage_error(y, y_pred) * 100
max_e = max_error(y, y_pred)

# MASE (naive = lag-1 baseline)
naive_mae = np.mean(np.abs(np.diff(y)))
mase = mae / naive_mae

print("=" * 40)
print(f"  MAE         : {mae:.4f}")
print(f"  MSE         : {mse:.4f}")
print(f"  RMSE        : {rmse:.4f}")
print(f"  R²          : {r2:.4f}")
print(f"  Adjusted R² : {adj_r2:.4f}")
print(f"  MAPE        : {mape:.2f}%")
print(f"  MASE        : {mase:.4f}")
print(f"  Max Error   : {max_e:.4f}")
print("=" * 40)</code></pre>
      <p>Expected output for our hours-vs-marks model:</p>
      <pre><code>========================================
  MAE         : 4.3265
  MSE         : 23.6802
  RMSE        : 4.8663
  R²          : 0.9801
  Adjusted R² : 0.9761
  MAPE        : 8.47%
  MASE        : 0.1421
  Max Error   : 7.8400
========================================</code></pre>
      <p><strong>Reading the results:</strong> R² = 0.98 means the model explains <strong>98% of the variance</strong> in marks. RMSE of 4.87 means predictions are off by about 5 marks on average. MASE = 0.14 means the model is 7× better than a naive baseline. Excellent fit!</p>

      <h3>When to Use Each Metric</h3>
      <ul>
        <li><strong>Always report R²</strong> — universal standard for regression quality</li>
        <li><strong>Use RMSE</strong> when large errors are unacceptable (finance, engineering)</li>
        <li><strong>Use MAE</strong> when the dataset has outliers and you want fair average error</li>
        <li><strong>Use MAPE</strong> when presenting results to business stakeholders</li>
        <li><strong>Use Adjusted R²</strong> when comparing models with different numbers of features</li>
        <li><strong>Use MASE</strong> for time-series or cross-dataset comparisons</li>
        <li><strong>Use Max Error</strong> in safety-critical systems where worst case matters</li>
      </ul>

      <h3>When to Use Linear Regression</h3>
      <ul>
        <li>When there is a linear relationship between input and output</li>
        <li>Predicting house prices, student scores, sales revenue</li>
        <li>When interpretability matters — slope tells you the exact impact of each feature</li>
        <li>As a baseline before trying complex models</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Linear regression is the foundation of all machine learning. By manually working through the slope and intercept calculations, you build a deep intuition for how models learn from data. The slope tells you how much y changes per unit of x, and the intercept anchors the line. Master this before moving to more complex algorithms.</p>
    `,
  slug: "linear-regression",
}
,
    {
      title: "Understanding Tries Data Structure",
      description: "A guide to implementing and using tries for efficient string storage and search.",
      date: "August 20, 2024",
      category: "Data Structures",
      content: `
        <p>Tries, or prefix trees, are specialized tree-based data structures that are used to store associative data structures, often strings.</p>
        <p>Here's a simple Trie implementation in Python:</p>
        <pre><code>
          class TrieNode:
            def __init__(self):
                self.children = {}
                self.is_end_of_word = False
  
          class Trie:
            def __init__(self):
                self.root = TrieNode()
            
            def insert(self, word):
                node = self.root
                for char in word:
                    if char not in node.children:
                        node.children[char] = TrieNode()
                    node = node.children[char]
                node.is_end_of_word = True
        </code></pre>
      `,
      slug: "understanding-tries-data-structure",
    },
    {
      title: "Binary Tree Basics",
      description: "Learn the fundamentals of binary trees and common operations.",
      date: "July 5, 2024",
      category: "Data Structures",
      content: `
        <p>A binary tree is a data structure where each node has at most two children. This is useful in scenarios where data needs to be stored in a hierarchical manner.</p>
        <p>Here’s a basic implementation of a binary tree node in Python:</p>
        <pre><code>
          class TreeNode:
            def __init__(self, value=0, left=None, right=None):
                self.value = value
                self.left = left
                self.right = right
  
          # Example of creating nodes
          root = TreeNode(1)
          root.left = TreeNode(2)
          root.right = TreeNode(3)
        </code></pre>
      `,
      slug: "binary-tree-basics",
    },
    {
      title: "Breadth-First Search (BFS) in Graphs",
      description: "Learn how BFS works and when to use it in graph traversal.",
      date: "June 10, 2024",
      category: "Algorithms",
      content: `
        <p>BFS is an algorithm for traversing or searching tree or graph data structures. It explores nodes layer by layer.</p>
        <p>Here's an example of BFS using a queue in Python:</p>
        <pre><code>
          from collections import deque
  
          def bfs(graph, start):
            visited = set()
            queue = deque([start])
  
            while queue:
                vertex = queue.popleft()
                if vertex not in visited:
                    print(vertex, end=' ')
                    visited.add(vertex)
                    queue.extend([neighbor for neighbor in graph[vertex] if neighbor not in visited])
  
          graph = {
            'A': ['B', 'C'],
            'B': ['A', 'D', 'E'],
            'C': ['A', 'F'],
            'D': ['B'],
            'E': ['B', 'F'],
            'F': ['C', 'E']
          }
          bfs(graph, 'A')
        </code></pre>
      `,
      slug: "breadth-first-search-bfs",
    },
    {
      title: "Binary Search Tree Operations",
      description: "Understanding binary search trees (BST) and common operations like insertion, deletion, and search.",
      date: "May 15, 2024",
      category: "Data Structures",
      content: `
        <p>A binary search tree is a node-based binary tree structure where each node follows the BST property: left children are less than the parent node, and right children are greater.</p>
        <p>Here's an example of inserting a node in a BST:</p>
        <pre><code>
          class TreeNode:
            def __init__(self, key):
                self.left = None
                self.right = None
                self.value = key
  
          def insert(root, key):
            if root is None:
                return TreeNode(key)
            if key < root.value:
                root.left = insert(root.left, key)
            else:
                root.right = insert(root.right, key)
            return root
  
          # Usage
          root = TreeNode(50)
          insert(root, 30)
          insert(root, 70)
        </code></pre>
      `,
      slug: "binary-search-tree-operations",
    },
    {
      title: "Understanding Logistic Regression in Machine Learning",
      description: "A complete guide to understanding and implementing logistic regression with Python examples.",
      date: "November 17, 2024",
      category: "Machine Learning",
      content: `
          <p>Logistic regression is a supervised learning algorithm used for classification tasks. Unlike linear regression, which predicts continuous values, logistic regression predicts probabilities that are mapped to discrete classes.</p>
  
          <h3>What is Logistic Regression?</h3>
          <p>Logistic regression uses the <strong>sigmoid function</strong> to map predicted values to probabilities:</p>
          <pre><code>
            σ(z) = 1 / (1 + e^(-z))
          </code></pre>
          <p>Here, <code>z = wx + b</code> represents the linear combination of inputs and weights, and the sigmoid function ensures the output is between 0 and 1.</p>
          
          <h3>Python Implementation</h3>
          <p>Here’s an example of how logistic regression can be implemented using <code>scikit-learn</code>:</p>
          <pre><code>
            from sklearn.linear_model import LogisticRegression
            from sklearn.datasets import make_classification
            from sklearn.model_selection import train_test_split
            from sklearn.metrics import accuracy_score
    
            # Generate a synthetic dataset
            X, y = make_classification(n_samples=100, n_features=2, n_classes=2, random_state=42)
    
            # Split into training and testing sets
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
            # Create and train the logistic regression model
            model = LogisticRegression()
            model.fit(X_train, y_train)
    
            # Make predictions
            y_pred = model.predict(X_test)
            accuracy = accuracy_score(y_test, y_pred)
            print("Accuracy:", accuracy)
          </code></pre>
  
          <h3>Explanation</h3>
          <ul>
            <li><code>make_classification()</code>: Generates synthetic classification data.</li>
            <li><code>LogisticRegression()</code>: Initializes the logistic regression model.</li>
            <li><code>fit(X_train, y_train)</code>: Trains the model on the training data.</li>
            <li><code>predict(X_test)</code>: Predicts the class labels for the test data.</li>
            <li><code>accuracy_score()</code>: Evaluates the performance of the model.</li>
          </ul>
  
          <h3>Applications of Logistic Regression</h3>
          <ul>
            <li>Spam email detection.</li>
            <li>Medical diagnosis (e.g., predicting the presence of a disease).</li>
            <li>Credit risk analysis (e.g., predicting loan defaults).</li>
          </ul>
  
          <h3>Advantages and Limitations</h3>
          <ul>
            <li><strong>Advantages:</strong> Simple to implement, interpretable, and efficient for binary classification tasks.</li>
            <li><strong>Limitations:</strong> Assumes a linear relationship between input features and the log-odds of the target class.</li>
          </ul>
  
          <h3>Conclusion</h3>
          <p>Logistic regression is a powerful yet simple algorithm for binary classification. Its probabilistic framework and ease of implementation make it a popular choice for many real-world applications.</p>
      `,
      slug: "logistic-regression",
  },
  {
    "title": "Top 10 AI Tools for Software Engineers",
    "description": "A guide to the best AI tools for software engineers to enhance productivity and simplify coding tasks.",
    "date": "November 17, 2024",
    "category": "Artificial Intelligence",
    "content": `
        <p>Artificial Intelligence (AI) has revolutionized software development, providing engineers with tools that automate tasks, improve efficiency, and boost productivity. In this guide, we will explore the top 10 AI tools that every software engineer should know about.</p>

        <h3>1. GitHub Copilot</h3>
        <p>GitHub Copilot, powered by OpenAI's Codex model, is an AI-driven code completion tool that suggests entire lines of code as you type. It helps software engineers write code faster by understanding the context of what you're trying to build. [Learn more here](https://copilot.github.com/).</p>
        
        <h3>2. Kite</h3>
        <p>Kite is another AI-powered code completion tool that supports multiple programming languages like Python and JavaScript. It provides real-time code suggestions and integrates with IDEs like VS Code, Sublime Text, and Atom to speed up development. [Learn more here](https://kite.com/).</p>

        <h3>3. Tabnine</h3>
        <p>Tabnine is a powerful AI tool for code completion. It works across a variety of programming languages and IDEs, learning from your codebase to provide personalized and context-aware code suggestions. [Learn more here](https://www.tabnine.com/).</p>

        <h3>4. DeepCode</h3>
        <p>DeepCode uses AI to analyze your code and suggest improvements. It can detect potential bugs, security vulnerabilities, and performance issues, ensuring your code is efficient and secure. [Learn more here](https://www.deepcode.ai/).</p>

        <h3>5. Codex by OpenAI</h3>
        <p>Codex is an advanced AI language model from OpenAI that powers GitHub Copilot. It can generate code, automate documentation, and even translate between programming languages, helping developers with various tasks. [Learn more here](https://openai.com/research/codex).</p>

        <h3>6. TensorFlow</h3>
        <p>TensorFlow is an open-source machine learning framework developed by Google. It allows software engineers to build AI models for tasks such as speech recognition, image classification, and natural language processing (NLP). [Learn more here](https://www.tensorflow.org/).</p>

        <h3>7. Hugging Face</h3>
        <p>Hugging Face is a leading platform for NLP tools and models. It provides a large repository of pre-trained models that engineers can use to build sophisticated NLP applications like chatbots, sentiment analysis, and text generation. [Learn more here](https://huggingface.co/).</p>

        <h3>8. MLflow</h3>
        <p>MLflow is an open-source platform for managing the lifecycle of machine learning models. It helps software engineers track experiments, manage models, and deploy solutions in production. [Learn more here](https://mlflow.org/).</p>

        <h3>9. DataRobot</h3>
        <p>DataRobot is an automated machine learning platform that accelerates model creation and deployment. It allows software engineers to quickly build, test, and deploy machine learning models, even without in-depth expertise in AI. [Learn more here](https://www.datarobot.com/).</p>

        <h3>10. PyTorch</h3>
        <p>PyTorch is an open-source machine learning framework used for deep learning and neural network development. It's widely popular for research and production-level applications, supporting dynamic computation graphs and GPU acceleration. [Learn more here](https://pytorch.org/).</p>

        <h3>11. Clue AI</h3>
        <p>Clue AI is an AI-powered tool designed to automate and streamline problem-solving processes in software engineering. It helps developers with debugging, code completion, and optimization by leveraging advanced machine learning models. [Learn more here](https://www.clue.ai/).</p>

        <h3>Conclusion</h3>
        <p>AI tools are transforming the way software engineers approach coding, debugging, and building applications. By leveraging these AI tools, engineers can automate routine tasks, improve code quality, and work more efficiently. Whether you're a beginner or an expert, these tools can enhance your workflow and help you stay ahead in the fast-evolving tech landscape.</p>
    `,
    "slug": "top-ai-tools-software-engineers"
},

{
  title: "Logistic Regression: The Foundation of Classification",
  description: "A complete guide to logistic regression — the sigmoid formula, step-by-step manual calculation, sigmoid graph, and all classification validation metrics with Python.",
  date: "February 21, 2026",
  category: "Machine Learning",
  readTime: 12,
  slug: "logistic-regression-explained",
  content: `
    <p>Logistic regression is one of the most widely used classification algorithms in machine learning. Despite having "regression" in its name, it is used for <strong>classification</strong> — predicting whether something belongs to one class or another. It is the go-to baseline for any binary classification problem.</p>

    <h3>The Problem: Why Not Linear Regression for Classification?</h3>
    <p>Linear regression predicts continuous values (e.g., 0.3, 1.7, -0.5). For classification we need probabilities between 0 and 1. If we used linear regression directly, predictions could fall outside [0, 1]. That is why we use the <strong>sigmoid function</strong>.</p>

    <h3>The Sigmoid Function</h3>
    <p>The sigmoid squashes any real number into the range (0, 1), making it a perfect probability output.</p>
    <pre><code>σ(z) = 1 / (1 + e^(-z))

z = b0 + b1·x1 + b2·x2 + ... + bn·xn   ← linear combination of inputs

P(y=1 | X) = σ(z)    → probability of class 1
P(y=0 | X) = 1 - σ(z) → probability of class 0

Decision rule:
  If P(y=1) ≥ 0.5  → predict class 1
  If P(y=1) < 0.5  → predict class 0</code></pre>

    <table>
      <thead><tr><th>z value</th><th>σ(z) = P(y=1)</th><th>Interpretation</th></tr></thead>
      <tbody>
        <tr><td>-6</td><td>0.0025</td><td>Almost certainly class 0</td></tr>
        <tr><td>-2</td><td>0.119</td><td>Likely class 0</td></tr>
        <tr><td>0</td><td>0.500</td><td>Decision boundary — 50/50</td></tr>
        <tr><td>+2</td><td>0.881</td><td>Likely class 1</td></tr>
        <tr><td>+6</td><td>0.998</td><td>Almost certainly class 1</td></tr>
      </tbody>
    </table>

    <h3>Real-World Example: Will a Student Pass the Exam?</h3>
    <p>Using hours studied (X) to predict pass (1) or fail (0):</p>
    <table>
      <thead><tr><th>Hours Studied (X)</th><th>Result (Y)</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>0 (Fail)</td></tr>
        <tr><td>2</td><td>0 (Fail)</td></tr>
        <tr><td>3</td><td>0 (Fail)</td></tr>
        <tr><td>4</td><td>0 (Fail)</td></tr>
        <tr><td>5</td><td>1 (Pass)</td></tr>
        <tr><td>6</td><td>1 (Pass)</td></tr>
        <tr><td>7</td><td>1 (Pass)</td></tr>
        <tr><td>8</td><td>1 (Pass)</td></tr>
        <tr><td>9</td><td>1 (Pass)</td></tr>
        <tr><td>10</td><td>1 (Pass)</td></tr>
      </tbody>
    </table>

    <h3>Step 1: The Model Equation</h3>
    <p>After training (via gradient descent / maximum likelihood), suppose the model learns:</p>
    <pre><code>b0 = -4.5   (intercept)
b1 =  0.9   (coefficient for hours studied)

z = b0 + b1 · x = -4.5 + 0.9 · x</code></pre>

    <h3>Step 2: Compute z and Probability for Each Student</h3>
    <table>
      <thead><tr><th>X (Hours)</th><th>z = -4.5 + 0.9x</th><th>P = σ(z)</th><th>Prediction</th><th>Actual</th><th>Correct?</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>-3.60</td><td>0.027</td><td>0 (Fail)</td><td>0</td><td>✓</td></tr>
        <tr><td>2</td><td>-2.70</td><td>0.063</td><td>0 (Fail)</td><td>0</td><td>✓</td></tr>
        <tr><td>3</td><td>-1.80</td><td>0.142</td><td>0 (Fail)</td><td>0</td><td>✓</td></tr>
        <tr><td>4</td><td>-0.90</td><td>0.289</td><td>0 (Fail)</td><td>0</td><td>✓</td></tr>
        <tr><td>5</td><td> 0.00</td><td>0.500</td><td>1 (Pass)</td><td>1</td><td>✓</td></tr>
        <tr><td>6</td><td> 0.90</td><td>0.711</td><td>1 (Pass)</td><td>1</td><td>✓</td></tr>
        <tr><td>7</td><td> 1.80</td><td>0.858</td><td>1 (Pass)</td><td>1</td><td>✓</td></tr>
        <tr><td>8</td><td> 2.70</td><td>0.937</td><td>1 (Pass)</td><td>1</td><td>✓</td></tr>
        <tr><td>9</td><td> 3.60</td><td>0.973</td><td>1 (Pass)</td><td>1</td><td>✓</td></tr>
        <tr><td>10</td><td>4.50</td><td>0.989</td><td>1 (Pass)</td><td>1</td><td>✓</td></tr>
      </tbody>
    </table>
    <p>All 10 predictions are correct → <strong>Accuracy = 100%</strong> on training data.</p>

    <h3>Step 3: Decision Boundary</h3>
    <pre><code>Decision boundary is where P = 0.5, i.e., z = 0

0 = -4.5 + 0.9 · x
x = 4.5 / 0.9 = 5.0

→ If hours studied ≥ 5  → Predict PASS
→ If hours studied < 5  → Predict FAIL</code></pre>

    <h3>Graph: Sigmoid Curve with Data Points</h3>
    <p>The S-shaped sigmoid curve maps hours studied to probability of passing. The vertical dashed line at x=5 is the decision boundary.</p>

    <div style="margin:1.5rem 0;">
      <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">

        <!-- Title -->
        <text x="260" y="20" text-anchor="middle" font-size="13" font-weight="600" fill="#111827">Logistic Regression — Hours Studied vs P(Pass)</text>

        <!-- Grid lines Y -->
        <line x1="60" y1="258" x2="500" y2="258" stroke="#e5e7eb" stroke-width="1"/>
        <line x1="60" y1="201" x2="500" y2="201" stroke="#e5e7eb" stroke-width="1"/>
        <line x1="60" y1="144" x2="500" y2="144" stroke="#e5e7eb" stroke-width="1"/>
        <line x1="60" y1="87"  x2="500" y2="87"  stroke="#e5e7eb" stroke-width="1"/>
        <line x1="60" y1="30"  x2="500" y2="30"  stroke="#e5e7eb" stroke-width="1"/>

        <!-- Axes -->
        <line x1="60" y1="28"  x2="60"  y2="263" stroke="#374151" stroke-width="1.5"/>
        <line x1="55" y1="258" x2="505" y2="258" stroke="#374151" stroke-width="1.5"/>

        <!-- Decision boundary at x=5 → px=256 -->
        <line x1="256" y1="30" x2="256" y2="258" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,3"/>
        <text x="258" y="45" font-size="10" fill="#d97706">Decision boundary</text>
        <text x="258" y="57" font-size="10" fill="#d97706">x = 5 (P = 0.5)</text>

        <!-- Sigmoid curve polyline -->
        <!-- px(x)=60+((x-1)/9)*440, py(p)=258-p*228 -->
        <!-- Points: x=1(60,253) 1.5(84,249) 2(109,244) 2.5(133,236) 3(158,226) 3.5(182,210) 4(207,192) 4.5(231,165) 5(256,144) 5.5(280,119) 6(305,96) 6.5(329,76) 7(354,58) 7.5(378,46) 8(403,38) 8.5(427,33) 9(452,32) 9.5(476,30) 10(500,30) -->
        <polyline
          points="60,253 84,249 109,244 133,236 158,226 182,210 207,192 231,165 256,144 280,119 305,96 329,76 354,58 378,46 403,38 427,33 452,32 476,30 500,30"
          fill="none" stroke="#3b82f6" stroke-width="2.5"/>

        <!-- Fail data points (y=0) at py=258 -->
        <circle cx="60"  cy="258" r="6" fill="#ef4444" stroke="white" stroke-width="1.5"/>
        <circle cx="109" cy="258" r="6" fill="#ef4444" stroke="white" stroke-width="1.5"/>
        <circle cx="158" cy="258" r="6" fill="#ef4444" stroke="white" stroke-width="1.5"/>
        <circle cx="207" cy="258" r="6" fill="#ef4444" stroke="white" stroke-width="1.5"/>

        <!-- Pass data points (y=1) at py=30 -->
        <circle cx="256" cy="30" r="6" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <circle cx="305" cy="30" r="6" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <circle cx="354" cy="30" r="6" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <circle cx="403" cy="30" r="6" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <circle cx="452" cy="30" r="6" fill="#22c55e" stroke="white" stroke-width="1.5"/>
        <circle cx="500" cy="30" r="6" fill="#22c55e" stroke="white" stroke-width="1.5"/>

        <!-- X axis labels -->
        <text x="60"  y="278" text-anchor="middle" font-size="11" fill="#6b7280">1</text>
        <text x="109" y="278" text-anchor="middle" font-size="11" fill="#6b7280">2</text>
        <text x="158" y="278" text-anchor="middle" font-size="11" fill="#6b7280">3</text>
        <text x="207" y="278" text-anchor="middle" font-size="11" fill="#6b7280">4</text>
        <text x="256" y="278" text-anchor="middle" font-size="11" fill="#6b7280">5</text>
        <text x="305" y="278" text-anchor="middle" font-size="11" fill="#6b7280">6</text>
        <text x="354" y="278" text-anchor="middle" font-size="11" fill="#6b7280">7</text>
        <text x="403" y="278" text-anchor="middle" font-size="11" fill="#6b7280">8</text>
        <text x="452" y="278" text-anchor="middle" font-size="11" fill="#6b7280">9</text>
        <text x="500" y="278" text-anchor="middle" font-size="11" fill="#6b7280">10</text>

        <!-- Y axis labels -->
        <text x="52" y="262" text-anchor="end" font-size="11" fill="#6b7280">0.00</text>
        <text x="52" y="205" text-anchor="end" font-size="11" fill="#6b7280">0.25</text>
        <text x="52" y="148" text-anchor="end" font-size="11" fill="#6b7280">0.50</text>
        <text x="52" y="91"  text-anchor="end" font-size="11" fill="#6b7280">0.75</text>
        <text x="52" y="34"  text-anchor="end" font-size="11" fill="#6b7280">1.00</text>

        <!-- Axis titles -->
        <text x="280" y="295" text-anchor="middle" font-size="12" fill="#374151" font-weight="500">Hours Studied (X)</text>
        <text x="13" y="144" text-anchor="middle" font-size="12" fill="#374151" font-weight="500" transform="rotate(-90,13,144)">P(Pass)</text>

        <!-- Legend -->
        <circle cx="72"  cy="20" r="5" fill="#ef4444"/>
        <text x="82" y="24" font-size="10" fill="#374151">Fail (0)</text>
        <circle cx="120" cy="20" r="5" fill="#22c55e"/>
        <text x="130" y="24" font-size="10" fill="#374151">Pass (1)</text>
        <line x1="168" y1="20" x2="193" y2="20" stroke="#3b82f6" stroke-width="2"/>
        <text x="198" y="24" font-size="10" fill="#374151">Sigmoid curve</text>
      </svg>
    </div>

    <h3>How the Model Learns: Log Loss (Cost Function)</h3>
    <p>Unlike linear regression (which uses MSE), logistic regression minimizes <strong>Log Loss</strong> (Binary Cross-Entropy):</p>
    <pre><code>Log Loss = -(1/n) × Σ [ y·log(P) + (1-y)·log(1-P) ]

For one sample:
  If actual y=1: Loss = -log(P)      → penalizes low confidence in correct class
  If actual y=0: Loss = -log(1-P)    → penalizes high confidence in wrong class</code></pre>
    <p>Gradient descent minimizes this loss by updating b0 and b1 iteratively until convergence.</p>

    <h3>Classification Validation Metrics</h3>
    <p>Classification uses completely different metrics than regression. The foundation is the <strong>Confusion Matrix</strong>.</p>

    <h4>Confusion Matrix</h4>
    <pre><code>                  Predicted 0      Predicted 1
Actual 0      True Negative (TN)   False Positive (FP)
Actual 1      False Negative (FN)  True Positive (TP)</code></pre>
    <table>
      <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>TP (True Positive)</td><td>Predicted Pass, Actually Pass ✓</td></tr>
        <tr><td>TN (True Negative)</td><td>Predicted Fail, Actually Fail ✓</td></tr>
        <tr><td>FP (False Positive)</td><td>Predicted Pass, Actually Fail ✗ (Type I Error)</td></tr>
        <tr><td>FN (False Negative)</td><td>Predicted Fail, Actually Pass ✗ (Type II Error)</td></tr>
      </tbody>
    </table>

    <h4>1. Accuracy</h4>
    <pre><code>Accuracy = (TP + TN) / (TP + TN + FP + FN)</code></pre>
    <p>Percentage of total correct predictions. <strong>Misleading when classes are imbalanced</strong> (e.g., 95% negative → 95% accuracy by always predicting negative).</p>

    <h4>2. Precision</h4>
    <pre><code>Precision = TP / (TP + FP)</code></pre>
    <p>Of all predicted positives, how many were actually positive? Use when <strong>false positives are costly</strong> (e.g., spam filter — don't mark real emails as spam).</p>

    <h4>3. Recall (Sensitivity / True Positive Rate)</h4>
    <pre><code>Recall = TP / (TP + FN)</code></pre>
    <p>Of all actual positives, how many did we catch? Use when <strong>false negatives are costly</strong> (e.g., cancer detection — don't miss sick patients).</p>

    <h4>4. F1-Score</h4>
    <pre><code>F1 = 2 × (Precision × Recall) / (Precision + Recall)</code></pre>
    <p>Harmonic mean of Precision and Recall. Best single metric when you need to <strong>balance both</strong>. Range: [0, 1]. Higher = better.</p>

    <h4>5. Specificity (True Negative Rate)</h4>
    <pre><code>Specificity = TN / (TN + FP)</code></pre>
    <p>Of all actual negatives, how many did we correctly identify? Important in medical tests.</p>

    <h4>6. ROC-AUC (Area Under the ROC Curve)</h4>
    <p>The ROC curve plots <strong>True Positive Rate (Recall)</strong> vs <strong>False Positive Rate</strong> at different thresholds. AUC measures the area under this curve.</p>
    <pre><code>False Positive Rate (FPR) = FP / (FP + TN)
True  Positive Rate (TPR) = TP / (TP + FN)  ← same as Recall

AUC = 1.0  → Perfect classifier
AUC = 0.5  → Random classifier (no better than a coin flip)
AUC = 0.0  → Perfectly wrong classifier</code></pre>
    <table>
      <thead><tr><th>AUC Value</th><th>Model Quality</th></tr></thead>
      <tbody>
        <tr><td>0.90 – 1.00</td><td>Excellent</td></tr>
        <tr><td>0.80 – 0.89</td><td>Good</td></tr>
        <tr><td>0.70 – 0.79</td><td>Fair</td></tr>
        <tr><td>0.60 – 0.69</td><td>Poor</td></tr>
        <tr><td>Below 0.60</td><td>Failing</td></tr>
      </tbody>
    </table>

    <h4>7. Log Loss (Binary Cross-Entropy)</h4>
    <pre><code>Log Loss = -(1/n) × Σ [ y·log(P) + (1-y)·log(1-P) ]</code></pre>
    <p>Measures how confident and correct the model is. <strong>Lower = better.</strong> Penalizes confident wrong predictions heavily. Log Loss = 0 is perfect.</p>

    <h4>8. Matthews Correlation Coefficient (MCC)</h4>
    <pre><code>MCC = (TP×TN - FP×FN) / √[(TP+FP)(TP+FN)(TN+FP)(TN+FN)]</code></pre>
    <p>Best metric for <strong>imbalanced datasets</strong>. Range: [-1, +1]. MCC=+1 perfect, MCC=0 random, MCC=-1 completely wrong. More reliable than accuracy and F1 when classes are skewed.</p>

    <h3>All Metrics at Once — Python Code</h3>
    <pre><code>from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score,
    f1_score, roc_auc_score, log_loss,
    confusion_matrix, classification_report,
    matthews_corrcoef
)
import numpy as np

# Dataset: hours studied → pass/fail
X = np.array([1,2,3,4,5,6,7,8,9,10]).reshape(-1,1)
y = np.array([0,0,0,0,1,1,1,1,1,1])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Scale features
scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)
X_test_s  = scaler.transform(X_test)

# Train model
model = LogisticRegression()
model.fit(X_train_s, y_train)

# Predictions
y_pred      = model.predict(X_test_s)
y_pred_prob = model.predict_proba(X_test_s)[:, 1]

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)
tn, fp, fn, tp = cm.ravel()

# Metrics
accuracy    = accuracy_score(y_test, y_pred)
precision   = precision_score(y_test, y_pred, zero_division=0)
recall      = recall_score(y_test, y_pred, zero_division=0)
f1          = f1_score(y_test, y_pred, zero_division=0)
specificity = tn / (tn + fp) if (tn + fp) > 0 else 0
auc         = roc_auc_score(y_test, y_pred_prob)
logloss     = log_loss(y_test, y_pred_prob)
mcc         = matthews_corrcoef(y_test, y_pred)

print("=" * 42)
print(f"  Confusion Matrix    : TN={tn} FP={fp} FN={fn} TP={tp}")
print(f"  Accuracy            : {accuracy:.4f}")
print(f"  Precision           : {precision:.4f}")
print(f"  Recall (Sensitivity): {recall:.4f}")
print(f"  Specificity         : {specificity:.4f}")
print(f"  F1-Score            : {f1:.4f}")
print(f"  ROC-AUC             : {auc:.4f}")
print(f"  Log Loss            : {logloss:.4f}")
print(f"  MCC                 : {mcc:.4f}")
print("=" * 42)
print()
print(classification_report(y_test, y_pred, target_names=["Fail","Pass"]))</code></pre>

    <h3>Metrics Comparison Table</h3>
    <table>
      <thead>
        <tr><th>Metric</th><th>Range</th><th>Best Value</th><th>Use When</th></tr>
      </thead>
      <tbody>
        <tr><td>Accuracy</td><td>[0, 1]</td><td>1.0</td><td>Balanced classes</td></tr>
        <tr><td>Precision</td><td>[0, 1]</td><td>1.0</td><td>FP is costly (spam filter)</td></tr>
        <tr><td>Recall</td><td>[0, 1]</td><td>1.0</td><td>FN is costly (cancer detection)</td></tr>
        <tr><td>F1-Score</td><td>[0, 1]</td><td>1.0</td><td>Balance precision and recall</td></tr>
        <tr><td>Specificity</td><td>[0, 1]</td><td>1.0</td><td>Medical tests — true negatives matter</td></tr>
        <tr><td>ROC-AUC</td><td>[0, 1]</td><td>1.0</td><td>Overall ranking ability of model</td></tr>
        <tr><td>Log Loss</td><td>[0, ∞)</td><td>0.0</td><td>Probability calibration quality</td></tr>
        <tr><td>MCC</td><td>[-1, +1]</td><td>+1.0</td><td>Imbalanced datasets</td></tr>
      </tbody>
    </table>

    <h3>Key Hyperparameters</h3>
    <table>
      <thead><tr><th>Parameter</th><th>Description</th><th>Default</th></tr></thead>
      <tbody>
        <tr><td>C</td><td>Inverse regularization strength. Smaller C = stronger regularization.</td><td>1.0</td></tr>
        <tr><td>penalty</td><td>Type of regularization: 'l1', 'l2', 'elasticnet', 'none'</td><td>'l2'</td></tr>
        <tr><td>solver</td><td>Optimization algorithm: 'lbfgs', 'saga', 'liblinear'</td><td>'lbfgs'</td></tr>
        <tr><td>max_iter</td><td>Maximum iterations for convergence</td><td>100</td></tr>
        <tr><td>class_weight</td><td>Set to 'balanced' for imbalanced datasets</td><td>None</td></tr>
      </tbody>
    </table>

    <h3>Advantages and Disadvantages</h3>
    <p><strong>Advantages:</strong> Fast to train, outputs calibrated probabilities, highly interpretable (coefficients show feature direction), works well as a baseline, no hyperparameter tuning needed to get decent results.</p>
    <p><strong>Disadvantages:</strong> Assumes a linear decision boundary, cannot capture non-linear relationships without feature engineering, sensitive to outliers and highly correlated features.</p>

    <h3>Conclusion</h3>
    <p>Logistic regression is the first model you should try for any binary classification problem. The step-by-step process is: compute z = b0 + b1·x, apply sigmoid to get probability, apply threshold (0.5) to get class. Always evaluate using the full set of classification metrics — not just accuracy — especially on imbalanced datasets where MCC and F1 are more reliable indicators of true model performance.</p>
  `
},

{
  title: "Decision Trees: Learning by Asking Questions",
  description: "Understand how decision trees split data using information gain and Gini impurity, with a hands-on Python example.",
  date: "February 21, 2026",
  category: "Machine Learning",
  readTime: 8,
  slug: "decision-tree-explained",
  content: `
    <p>A decision tree is a non-parametric supervised learning algorithm that makes predictions by learning simple decision rules inferred from features. It mimics human decision-making by asking a series of yes/no questions.</p>

    <h3>How Does a Decision Tree Work?</h3>
    <p>The algorithm recursively splits the dataset into subsets based on the feature that best separates the classes. The "best" split is determined by impurity measures:</p>
    <ul>
      <li><strong>Gini Impurity:</strong> Measures how often a randomly chosen element would be incorrectly classified. Range: [0, 0.5]</li>
      <li><strong>Information Gain (Entropy):</strong> Measures the reduction in entropy after a split. Higher gain = better split.</li>
    </ul>

    <pre><code>Gini = 1 - sum(p_i^2)
Entropy = -sum(p_i * log2(p_i))
Information Gain = Entropy(parent) - weighted_avg(Entropy(children))</code></pre>

    <h3>Python Implementation</h3>
    <pre><code>from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train decision tree
model = DecisionTreeClassifier(
    criterion='gini',      # or 'entropy'
    max_depth=5,           # prevent overfitting
    min_samples_split=10,
    min_samples_leaf=5,
    random_state=42
)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")

# Visualize the tree rules
tree_rules = export_text(model, feature_names=feature_names)
print(tree_rules)</code></pre>

    <h3>Key Hyperparameters</h3>
    <table>
      <thead>
        <tr><th>Parameter</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>max_depth</td><td>Maximum depth of the tree. Controls overfitting.</td></tr>
        <tr><td>min_samples_split</td><td>Minimum samples required to split a node.</td></tr>
        <tr><td>min_samples_leaf</td><td>Minimum samples required at a leaf node.</td></tr>
        <tr><td>criterion</td><td>'gini' or 'entropy' for split quality.</td></tr>
      </tbody>
    </table>

    <h3>Overfitting Problem</h3>
    <p>Decision trees are prone to overfitting — they can memorize the training data perfectly by growing very deep. Solutions include limiting <code>max_depth</code>, using <code>min_samples_leaf</code>, or using ensemble methods like Random Forest.</p>

    <h3>Advantages and Disadvantages</h3>
    <p><strong>Advantages:</strong> Highly interpretable (can visualize the tree), handles both numerical and categorical data, no feature scaling needed, captures non-linear relationships.</p>
    <p><strong>Disadvantages:</strong> Prone to overfitting, unstable (small data changes can drastically change the tree), biased toward features with more levels.</p>

    <h3>Conclusion</h3>
    <p>Decision trees are excellent for understanding how a model makes decisions. They form the building block of powerful ensemble methods like Random Forest and XGBoost. Mastering decision trees is essential before moving to these advanced algorithms.</p>
  `
},

{
  title: "Random Forest: The Power of Ensemble Learning",
  description: "How Random Forest combines hundreds of decision trees to build a robust, high-accuracy model with reduced overfitting.",
  date: "February 21, 2026",
  category: "Machine Learning",
  readTime: 9,
  slug: "random-forest-explained",
  content: `
    <p>Random Forest is one of the most powerful and versatile machine learning algorithms. It is an ensemble method that builds multiple decision trees and combines their predictions to produce a more accurate and stable result. It is the go-to algorithm for tabular data in many Kaggle competitions.</p>

    <h3>How Does Random Forest Work?</h3>
    <p>Random Forest uses two key concepts: <strong>Bagging</strong> and <strong>Feature Randomness</strong>.</p>
    <ul>
      <li><strong>Bagging (Bootstrap Aggregating):</strong> Each tree is trained on a random bootstrap sample (sampling with replacement) of the training data.</li>
      <li><strong>Feature Randomness:</strong> At each split, only a random subset of features is considered. This decorrelates the trees and reduces variance.</li>
      <li><strong>Aggregation:</strong> For classification, the final prediction is the majority vote across all trees. For regression, it is the average.</li>
    </ul>

    <pre><code>Final Prediction (Classification) = mode(tree_1_pred, tree_2_pred, ..., tree_n_pred)
Final Prediction (Regression)     = mean(tree_1_pred, tree_2_pred, ..., tree_n_pred)</code></pre>

    <h3>Python Implementation</h3>
    <pre><code>from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, classification_report
import pandas as pd

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Random Forest
model = RandomForestClassifier(
    n_estimators=200,       # number of trees
    max_depth=10,
    max_features='sqrt',    # features per split
    min_samples_leaf=4,
    n_jobs=-1,              # use all CPU cores
    random_state=42
)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")

# Feature importance
importance_df = pd.DataFrame({
    'Feature': feature_names,
    'Importance': model.feature_importances_
}).sort_values('Importance', ascending=False)
print(importance_df.head(10))</code></pre>

    <h3>Feature Importance</h3>
    <p>Random Forest provides built-in feature importance scores — the average decrease in impurity across all trees for each feature. This makes it a great tool for feature selection.</p>

    <h3>Key Hyperparameters</h3>
    <table>
      <thead>
        <tr><th>Parameter</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>n_estimators</td><td>Number of trees. More trees = lower variance but slower training.</td></tr>
        <tr><td>max_features</td><td>Features considered per split: 'sqrt' (classification), 'log2', or int.</td></tr>
        <tr><td>max_depth</td><td>Max depth of each tree. None = fully grown trees.</td></tr>
        <tr><td>min_samples_leaf</td><td>Controls minimum samples at leaf — prevents overfitting.</td></tr>
      </tbody>
    </table>

    <h3>Advantages and Disadvantages</h3>
    <p><strong>Advantages:</strong> High accuracy, robust to outliers and noise, handles missing values well, no feature scaling needed, built-in feature importance.</p>
    <p><strong>Disadvantages:</strong> Slower to predict than a single tree, harder to interpret than a single decision tree, requires more memory.</p>

    <h3>Conclusion</h3>
    <p>Random Forest is one of the best off-the-shelf algorithms available. It rarely overfits, requires minimal tuning, and delivers strong performance across a wide range of problems. If you are unsure which algorithm to use, start with Random Forest.</p>
  `
},

{
  title: "XGBoost: The Algorithm That Wins Kaggle Competitions",
  description: "A comprehensive guide to XGBoost — gradient boosting, regularization, and how to tune it for maximum performance.",
  date: "February 21, 2026",
  category: "Machine Learning",
  readTime: 10,
  slug: "xgboost-explained",
  content: `
    <p>XGBoost (Extreme Gradient Boosting) is the most dominant algorithm in structured/tabular data competitions. It has been used in more winning Kaggle solutions than any other algorithm. It extends gradient boosting with regularization, parallel processing, and handling of missing values.</p>

    <h3>How XGBoost Works</h3>
    <p>XGBoost is a <strong>gradient boosting</strong> algorithm. Unlike Random Forest (which trains trees in parallel independently), boosting trains trees <em>sequentially</em>, where each new tree corrects the errors of the previous ones.</p>

    <pre><code>Step 1: Start with an initial prediction (e.g., mean of target)
Step 2: Compute residuals (errors) from current predictions
Step 3: Fit a new tree to predict the residuals
Step 4: Update predictions: F_new = F_old + learning_rate * tree_prediction
Step 5: Repeat until n_estimators trees are built</code></pre>

    <h3>XGBoost vs Regular Gradient Boosting</h3>
    <p>XGBoost adds several improvements over vanilla gradient boosting:</p>
    <ul>
      <li><strong>L1 and L2 regularization</strong> on leaf weights to prevent overfitting</li>
      <li><strong>Column subsampling</strong> (like Random Forest) for better generalization</li>
      <li><strong>Parallel tree construction</strong> for speed</li>
      <li><strong>Built-in missing value handling</strong></li>
      <li><strong>Pruning</strong> using max_delta_step and gamma</li>
    </ul>

    <h3>Python Implementation</h3>
    <pre><code>import xgboost as xgb
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import accuracy_score, classification_report

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train XGBoost
model = xgb.XGBClassifier(
    n_estimators=500,
    learning_rate=0.05,
    max_depth=6,
    subsample=0.8,
    colsample_bytree=0.8,
    reg_alpha=0.1,      # L1 regularization
    reg_lambda=1.0,     # L2 regularization
    use_label_encoder=False,
    eval_metric='logloss',
    random_state=42,
    n_jobs=-1
)

# Train with early stopping
model.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
    early_stopping_rounds=50,
    verbose=100
)

y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(classification_report(y_test, y_pred))</code></pre>

    <h3>Key Hyperparameters</h3>
    <table>
      <thead>
        <tr><th>Parameter</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>n_estimators</td><td>Number of boosting rounds (trees).</td></tr>
        <tr><td>learning_rate</td><td>Step size shrinkage (0.01–0.3). Lower = more trees needed but better generalization.</td></tr>
        <tr><td>max_depth</td><td>Max tree depth (3–10). Controls complexity.</td></tr>
        <tr><td>subsample</td><td>Fraction of training data per tree (0.5–1.0).</td></tr>
        <tr><td>colsample_bytree</td><td>Fraction of features per tree.</td></tr>
        <tr><td>reg_alpha / reg_lambda</td><td>L1 / L2 regularization coefficients.</td></tr>
        <tr><td>gamma</td><td>Minimum loss reduction to make a split. Higher = more conservative.</td></tr>
      </tbody>
    </table>

    <h3>Early Stopping</h3>
    <p>Use <code>early_stopping_rounds</code> to stop training when validation performance doesn't improve for N consecutive rounds. This prevents overfitting and saves training time.</p>

    <h3>Advantages and Disadvantages</h3>
    <p><strong>Advantages:</strong> State-of-the-art performance on tabular data, handles missing values natively, built-in regularization, fast with parallel processing, flexible objective functions.</p>
    <p><strong>Disadvantages:</strong> Many hyperparameters to tune, slower to train than Random Forest, can overfit on small datasets without careful tuning.</p>

    <h3>Conclusion</h3>
    <p>XGBoost is the most powerful algorithm for structured data. When combined with proper feature engineering and hyperparameter tuning, it consistently delivers top performance. I personally used XGBoost in my recruitment fraud detection research, achieving 99.44% accuracy.</p>
  `
},

{
  title: "Neural Networks: How Deep Learning Actually Works",
  description: "From perceptrons to deep neural networks — understand forward propagation, backpropagation, activation functions, and build one in Python.",
  date: "February 21, 2026",
  category: "Deep Learning",
  readTime: 12,
  slug: "neural-networks-explained",
  content: `
    <p>Neural networks are the backbone of modern AI — from image recognition and natural language processing to autonomous driving and game playing. Understanding how they work is essential for any AI/ML practitioner.</p>

    <h3>What is a Neural Network?</h3>
    <p>A neural network is a computational model inspired by the human brain. It consists of layers of interconnected nodes (neurons). Each neuron takes inputs, applies a weighted sum, adds a bias, passes through an activation function, and outputs a value.</p>

    <pre><code>output = activation(w1*x1 + w2*x2 + ... + wn*xn + bias)</code></pre>

    <h3>Architecture</h3>
    <ul>
      <li><strong>Input Layer:</strong> Receives raw features (one neuron per feature)</li>
      <li><strong>Hidden Layers:</strong> Learn intermediate representations. More layers = deeper network = more complex patterns</li>
      <li><strong>Output Layer:</strong> Produces final prediction (sigmoid for binary, softmax for multiclass, linear for regression)</li>
    </ul>

    <h3>Activation Functions</h3>
    <table>
      <thead>
        <tr><th>Function</th><th>Formula</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>ReLU</td><td>max(0, x)</td><td>Default for hidden layers</td></tr>
        <tr><td>Sigmoid</td><td>1/(1+e^-x)</td><td>Binary output layer</td></tr>
        <tr><td>Softmax</td><td>e^x / sum(e^x)</td><td>Multiclass output layer</td></tr>
        <tr><td>Tanh</td><td>(e^x - e^-x)/(e^x + e^-x)</td><td>Hidden layers, RNNs</td></tr>
        <tr><td>Leaky ReLU</td><td>max(0.01x, x)</td><td>Avoid dying ReLU problem</td></tr>
      </tbody>
    </table>

    <h3>Forward and Backward Propagation</h3>
    <p><strong>Forward Propagation:</strong> Input flows through the network layer by layer to produce a prediction.</p>
    <p><strong>Backpropagation:</strong> The prediction error is computed (using a loss function), then gradients are calculated and propagated backwards through the network using the chain rule. Weights are updated using gradient descent.</p>

    <pre><code>Loss = -sum(y * log(y_pred))   # Cross-entropy for classification
Gradient = dLoss/dWeight        # Via chain rule
Weight_new = Weight_old - learning_rate * Gradient</code></pre>

    <h3>Building a Neural Network in Python (TensorFlow/Keras)</h3>
    <pre><code>import tensorflow as tf
from tensorflow.keras import layers, models
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Build model
model = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(X.shape[1],)),
    layers.BatchNormalization(),
    layers.Dropout(0.3),
    layers.Dense(64, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.2),
    layers.Dense(32, activation='relu'),
    layers.Dense(1, activation='sigmoid')  # binary classification
])

# Compile
model.compile(
    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
    loss='binary_crossentropy',
    metrics=['accuracy']
)

model.summary()

# Train
history = model.fit(
    X_train, y_train,
    validation_split=0.2,
    epochs=100,
    batch_size=32,
    callbacks=[
        tf.keras.callbacks.EarlyStopping(patience=10, restore_best_weights=True)
    ]
)

# Evaluate
loss, accuracy = model.evaluate(X_test, y_test)
print(f"Test Accuracy: {accuracy:.4f}")</code></pre>

    <h3>Regularization Techniques</h3>
    <ul>
      <li><strong>Dropout:</strong> Randomly disables neurons during training to prevent co-adaptation</li>
      <li><strong>Batch Normalization:</strong> Normalizes layer inputs to stabilize and speed up training</li>
      <li><strong>L2 Regularization (Weight Decay):</strong> Penalizes large weights to keep the model simple</li>
      <li><strong>Early Stopping:</strong> Stops training when validation loss stops improving</li>
    </ul>

    <h3>When to Use Neural Networks</h3>
    <ul>
      <li>Image classification and object detection (CNNs)</li>
      <li>Natural language processing (Transformers, RNNs)</li>
      <li>Speech recognition and generation</li>
      <li>When you have very large datasets (10k+ samples)</li>
      <li>When features are raw (pixels, text, audio) rather than tabular</li>
    </ul>

    <h3>Advantages and Disadvantages</h3>
    <p><strong>Advantages:</strong> Can learn extremely complex patterns, universal function approximator, state-of-the-art on image/text/audio data, automatic feature learning.</p>
    <p><strong>Disadvantages:</strong> Requires large amounts of data, computationally expensive, black-box (low interpretability), many hyperparameters to tune, prone to overfitting on small datasets.</p>

    <h3>Conclusion</h3>
    <p>Neural networks are the foundation of modern deep learning and AI. While they require more data and computation than traditional ML algorithms, they are unmatched for unstructured data like images and text. Understanding their internals — forward pass, backpropagation, activation functions — is essential for building and debugging real AI systems.</p>
  `
}


,

{
  title: "Understanding R², RMSE, and MAE: Evaluating Regression Models",
  description: "Learn how to interpret Train R², Test R², Train RMSE, and Test MAE to diagnose overfitting, underfitting, and model quality in regression tasks.",
  date: "February 21, 2026",
  category: "Machine Learning",
  readTime: 10,
  slug: "regression-metrics-r2-rmse-mae",
  content: `
    <p>When building a regression model, accuracy alone is not enough. You need to understand <em>how well</em> your model fits the data, whether it is overfitting or underfitting, and how large its prediction errors are. Four metrics are essential: <strong>Train R²</strong>, <strong>Test R²</strong>, <strong>Train RMSE</strong>, and <strong>Test MAE</strong>.</p>

    <h3>1. R² — Coefficient of Determination</h3>
    <p>R² measures how much of the variance in the target variable is explained by the model. It ranges from 0 to 1 (can be negative for very bad models).</p>

    <pre><code>R² = 1 - (SS_res / SS_tot)

SS_res = sum((y_actual - y_predicted)²)   # residual sum of squares
SS_tot = sum((y_actual - y_mean)²)        # total sum of squares</code></pre>

    <table>
      <thead>
        <tr><th>R² Value</th><th>Interpretation</th></tr>
      </thead>
      <tbody>
        <tr><td>1.00</td><td>Perfect fit — model explains all variance</td></tr>
        <tr><td>0.90 – 0.99</td><td>Excellent fit</td></tr>
        <tr><td>0.70 – 0.89</td><td>Good fit</td></tr>
        <tr><td>0.50 – 0.69</td><td>Moderate fit</td></tr>
        <tr><td>Below 0.50</td><td>Poor fit — model misses important patterns</td></tr>
        <tr><td>Negative</td><td>Model is worse than predicting the mean</td></tr>
      </tbody>
    </table>

    <h3>Train R² vs Test R²</h3>
    <p>You always compute R² on both the training and test sets. The gap between them reveals overfitting or underfitting:</p>

    <table>
      <thead>
        <tr><th>Train R²</th><th>Test R²</th><th>Diagnosis</th></tr>
      </thead>
      <tbody>
        <tr><td>High (0.95+)</td><td>High (0.90+)</td><td>Great — model generalizes well</td></tr>
        <tr><td>High (0.95+)</td><td>Low (&lt;0.70)</td><td>Overfitting — model memorized training data</td></tr>
        <tr><td>Low (&lt;0.70)</td><td>Low (&lt;0.70)</td><td>Underfitting — model too simple</td></tr>
        <tr><td>Low</td><td>Slightly lower</td><td>Underfitting — need more complexity</td></tr>
      </tbody>
    </table>

    <h3>2. RMSE — Root Mean Squared Error</h3>
    <p>RMSE measures the average magnitude of prediction errors in the same units as the target variable. It penalizes large errors more heavily because of the squaring.</p>

    <pre><code>MSE  = (1/n) * sum((y_actual - y_predicted)²)
RMSE = sqrt(MSE)</code></pre>

    <p><strong>Key properties:</strong></p>
    <ul>
      <li>Same unit as the target (e.g., dollars, meters, degrees)</li>
      <li>Sensitive to outliers — one large error can inflate RMSE significantly</li>
      <li>Lower RMSE = better model</li>
      <li>RMSE = 0 means perfect predictions</li>
    </ul>

    <p><strong>Train RMSE vs Test RMSE:</strong> If Train RMSE is very low but Test RMSE is high, the model is overfitting. You want both to be low and close to each other.</p>

    <h3>3. MAE — Mean Absolute Error</h3>
    <p>MAE measures the average absolute difference between actual and predicted values. It is more robust to outliers than RMSE because it does not square the errors.</p>

    <pre><code>MAE = (1/n) * sum(|y_actual - y_predicted|)</code></pre>

    <p><strong>Key properties:</strong></p>
    <ul>
      <li>Same unit as the target variable</li>
      <li>Robust to outliers — treats all errors equally</li>
      <li>Easier to interpret: "on average, predictions are off by X units"</li>
      <li>Lower MAE = better model</li>
    </ul>

    <h3>RMSE vs MAE — Which to Use?</h3>
    <table>
      <thead>
        <tr><th>Metric</th><th>Sensitive to Outliers</th><th>Use When</th></tr>
      </thead>
      <tbody>
        <tr><td>RMSE</td><td>Yes (high penalty)</td><td>Large errors are unacceptable (e.g., medical dosage, finance)</td></tr>
        <tr><td>MAE</td><td>No (equal penalty)</td><td>Outliers exist and you want a fair average error</td></tr>
      </tbody>
    </table>

    <p>Note: RMSE is always &gt;= MAE. If they are very close, your errors are consistent. If RMSE is much larger than MAE, you likely have some very large outlier errors.</p>

    <h3>Python: Computing All Four Metrics</h3>
    <pre><code>from sklearn.metrics import r2_score, mean_squared_error, mean_absolute_error
import numpy as np

# Train predictions
y_train_pred = model.predict(X_train)
y_test_pred  = model.predict(X_test)

# R²
train_r2 = r2_score(y_train, y_train_pred)
test_r2  = r2_score(y_test,  y_test_pred)

# RMSE
train_rmse = np.sqrt(mean_squared_error(y_train, y_train_pred))
test_rmse  = np.sqrt(mean_squared_error(y_test,  y_test_pred))

# MAE
train_mae = mean_absolute_error(y_train, y_train_pred)
test_mae  = mean_absolute_error(y_test,  y_test_pred)

print("=" * 40)
print(f"  Train R²   : {train_r2:.4f}")
print(f"  Test  R²   : {test_r2:.4f}")
print(f"  Train RMSE : {train_rmse:.4f}")
print(f"  Test  RMSE : {test_rmse:.4f}")
print(f"  Train MAE  : {train_mae:.4f}")
print(f"  Test  MAE  : {test_mae:.4f}")
print("=" * 40)</code></pre>

    <h3>Reading the Results — Practical Examples</h3>

    <p><strong>Example 1 — Healthy model:</strong></p>
    <pre><code>Train R²   : 0.9210
Test  R²   : 0.8975
Train RMSE : 4.2100
Test  RMSE : 4.6300
Train MAE  : 3.1200
Test  MAE  : 3.4100</code></pre>
    <p>Both Train and Test R² are high and close. RMSE and MAE are low and close. This model generalizes well — no overfitting.</p>

    <p><strong>Example 2 — Overfitting:</strong></p>
    <pre><code>Train R²   : 0.9950
Test  R²   : 0.6120
Train RMSE : 1.0200
Test  RMSE : 18.450
Train MAE  : 0.8900
Test  MAE  : 14.200</code></pre>
    <p>Train R² is near perfect but Test R² drops dramatically. RMSE and MAE explode on test data. The model memorized training data. Fix: reduce model complexity, add regularization, get more data.</p>

    <p><strong>Example 3 — Underfitting:</strong></p>
    <pre><code>Train R²   : 0.5200
Test  R²   : 0.4900
Train RMSE : 22.100
Test  RMSE : 23.400
Train MAE  : 17.600
Test  MAE  : 18.200</code></pre>
    <p>Both Train and Test R² are low. The model fails on both sets. Fix: use a more complex model, add more features, or do more feature engineering.</p>

    <h3>Quick Reference Checklist</h3>
    <ul>
      <li>Is <strong>Test R²</strong> close to Train R²? — If not, overfitting</li>
      <li>Is <strong>Test R²</strong> above 0.80? — Good generalization</li>
      <li>Is <strong>Test RMSE</strong> acceptable for your domain? — Compare to the scale of your target</li>
      <li>Is <strong>Test MAE</strong> much smaller than RMSE? — Indicates presence of large outlier errors</li>
      <li>Do Train and Test errors both look high? — Underfitting, need more model capacity</li>
    </ul>

    <h3>Conclusion</h3>
    <p>Always evaluate your regression model with both Train and Test metrics. R² tells you how much variance is explained. RMSE and MAE tell you the actual magnitude of your errors in real units. Together, these four numbers give you a complete picture of your model's performance, generalization ability, and where it is failing.</p>
  `
}

  ];
  