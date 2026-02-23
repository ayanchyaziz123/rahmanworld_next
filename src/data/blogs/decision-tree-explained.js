export const decision_tree_explained = {
  title: "Decision Trees: Learning by Asking Questions",
  description: "A complete guide to decision trees — step-by-step Gini impurity and information gain calculation, tree diagram, pruning, and all classification metrics with Python.",
  date: "February 21, 2026",
  category: "Machine Learning",
  readTime: 14,
  slug: "decision-tree-explained",
  content: `
    <p>A decision tree is a non-parametric supervised learning algorithm that makes predictions by learning simple decision rules from features. It works exactly like a flowchart — asking a series of yes/no questions until it reaches a final answer. It is one of the most interpretable machine learning models and forms the foundation of Random Forest and XGBoost.</p>

    <h3>Real-World Example: Will a Person Buy a Product?</h3>
    <p>We have 10 customers with two features: <strong>Age</strong> and <strong>Income</strong>, and a target: <strong>Buys</strong> (1=Yes, 0=No).</p>
    <table>
      <thead><tr><th>#</th><th>Age</th><th>Income</th><th>Buys</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>25</td><td>Low</td><td>0</td></tr>
        <tr><td>2</td><td>30</td><td>High</td><td>1</td></tr>
        <tr><td>3</td><td>35</td><td>High</td><td>1</td></tr>
        <tr><td>4</td><td>40</td><td>Low</td><td>0</td></tr>
        <tr><td>5</td><td>45</td><td>High</td><td>1</td></tr>
        <tr><td>6</td><td>20</td><td>Low</td><td>0</td></tr>
        <tr><td>7</td><td>50</td><td>High</td><td>1</td></tr>
        <tr><td>8</td><td>22</td><td>Low</td><td>0</td></tr>
        <tr><td>9</td><td>38</td><td>High</td><td>1</td></tr>
        <tr><td>10</td><td>28</td><td>Low</td><td>0</td></tr>
      </tbody>
    </table>
    <p><strong>Summary:</strong> 5 Yes (buy), 5 No (don't buy). The tree must find which feature (Age or Income) best splits the data.</p>

    <h3>Step 1: Compute Root Node Gini Impurity</h3>
    <p>Before any split, the root node has 10 samples: 5 Yes, 5 No.</p>
    <pre><code>Gini = 1 - Σ p_i²

p(Yes) = 5/10 = 0.5
p(No)  = 5/10 = 0.5

Gini(root) = 1 - (0.5² + 0.5²)
           = 1 - (0.25 + 0.25)
           = 1 - 0.50
           = 0.50</code></pre>
    <p>Gini = 0.50 means maximum impurity — the node is perfectly mixed. We need to split to reduce this.</p>

    <h3>Step 2: Try Splitting on "Income"</h3>
    <p>Split the data by Income (Low vs High):</p>
    <table>
      <thead><tr><th>Split</th><th>Samples</th><th>Yes</th><th>No</th></tr></thead>
      <tbody>
        <tr><td>Income = Low</td><td>5</td><td>0</td><td>5</td></tr>
        <tr><td>Income = High</td><td>5</td><td>5</td><td>0</td></tr>
      </tbody>
    </table>
    <pre><code>Gini(Low)  = 1 - (0/5)² - (5/5)² = 1 - 0 - 1 = 0.0   ← pure!
Gini(High) = 1 - (5/5)² - (0/5)² = 1 - 1 - 0 = 0.0   ← pure!

Weighted Gini = (5/10)×0.0 + (5/10)×0.0 = 0.0

Gini Gain = Gini(root) - Weighted Gini
          = 0.50 - 0.00
          = 0.50   ← maximum possible gain!</code></pre>
    <p>Splitting on <strong>Income</strong> perfectly separates the classes with <strong>Gini = 0</strong> on both sides. This is the best possible split.</p>

    <h3>Step 3: Try Splitting on "Age ≤ 30"</h3>
    <p>Split the data by Age threshold of 30:</p>
    <table>
      <thead><tr><th>Split</th><th>Samples</th><th>Yes</th><th>No</th></tr></thead>
      <tbody>
        <tr><td>Age ≤ 30 (rows 1,2,6,8,10)</td><td>5</td><td>1</td><td>4</td></tr>
        <tr><td>Age > 30 (rows 3,4,5,7,9)</td><td>5</td><td>4</td><td>1</td></tr>
      </tbody>
    </table>
    <pre><code>Gini(Age≤30) = 1 - (1/5)² - (4/5)²
             = 1 - 0.04 - 0.64
             = 0.32

Gini(Age>30) = 1 - (4/5)² - (1/5)²
             = 1 - 0.64 - 0.04
             = 0.32

Weighted Gini = (5/10)×0.32 + (5/10)×0.32 = 0.32

Gini Gain = 0.50 - 0.32 = 0.18   ← much less than Income split</code></pre>
    <p><strong>Conclusion:</strong> Income gives Gini Gain = 0.50, Age gives 0.18. The tree chooses <strong>Income</strong> as the root split.</p>

    <h3>Step 4: Information Gain (Entropy Method)</h3>
    <p>An alternative to Gini is <strong>Entropy + Information Gain</strong>. Entropy measures disorder in a node.</p>
    <pre><code>Entropy = -Σ p_i × log2(p_i)

Entropy(root) = -(0.5 × log2(0.5)) - (0.5 × log2(0.5))
              = -0.5 × (-1) - 0.5 × (-1)
              = 1.0   ← maximum entropy (most mixed)

After Income split:
Entropy(Low)  = -(0/5×log2(0/5)) - (5/5×log2(5/5)) = 0.0
Entropy(High) = -(5/5×log2(5/5)) - (0/5×log2(0/5)) = 0.0

Weighted Entropy = (5/10)×0.0 + (5/10)×0.0 = 0.0

Information Gain = 1.0 - 0.0 = 1.0   ← perfect gain!</code></pre>

    <h3>Gini vs Entropy — Which to Use?</h3>
    <table>
      <thead><tr><th>Criterion</th><th>Formula</th><th>Range</th><th>Speed</th><th>When to Use</th></tr></thead>
      <tbody>
        <tr><td>Gini</td><td>1 - Σp²</td><td>[0, 0.5]</td><td>Faster (no log)</td><td>Default — works well in most cases</td></tr>
        <tr><td>Entropy</td><td>-Σp·log2(p)</td><td>[0, 1.0]</td><td>Slower</td><td>When you want more balanced splits</td></tr>
      </tbody>
    </table>
    <p>In practice, both produce nearly identical trees. <strong>Gini is the default</strong> in scikit-learn.</p>

    <h3>Tree Diagram: Final Decision Tree</h3>
    <p>Based on our calculation, the tree splits perfectly on Income at the root level:</p>

    <div style="margin:1.5rem 0;">
      <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;background:#f9fafb;border-radius:8px;border:1px solid #e5e7eb;">

        <!-- Title -->
        <text x="260" y="20" text-anchor="middle" font-size="13" font-weight="600" fill="#111827">Decision Tree — Buy Product?</text>

        <!-- Root node -->
        <rect x="170" y="35" width="180" height="50" rx="8" fill="#1e40af"/>
        <text x="260" y="57" text-anchor="middle" font-size="12" font-weight="600" fill="white">Income?</text>
        <text x="260" y="74" text-anchor="middle" font-size="10" fill="#bfdbfe">Gini=0.50 | n=10 | Yes:5 No:5</text>

        <!-- Branches from root -->
        <line x1="200" y1="85" x2="110" y2="145" stroke="#64748b" stroke-width="1.5"/>
        <line x1="320" y1="85" x2="410" y2="145" stroke="#64748b" stroke-width="1.5"/>

        <!-- Branch labels -->
        <text x="138" y="120" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="600">Low</text>
        <text x="382" y="120" text-anchor="middle" font-size="11" fill="#16a34a" font-weight="600">High</text>

        <!-- Left leaf: No (Low income) -->
        <rect x="30" y="145" width="160" height="70" rx="8" fill="#dc2626"/>
        <text x="110" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="white">❌ NO (Don't Buy)</text>
        <text x="110" y="186" text-anchor="middle" font-size="10" fill="#fecaca">Gini = 0.0 (Pure)</text>
        <text x="110" y="200" text-anchor="middle" font-size="10" fill="#fecaca">n=5 | Yes:0 No:5</text>

        <!-- Right leaf: Yes (High income) -->
        <rect x="330" y="145" width="160" height="70" rx="8" fill="#16a34a"/>
        <text x="410" y="168" text-anchor="middle" font-size="13" font-weight="700" fill="white">✓ YES (Buy)</text>
        <text x="410" y="186" text-anchor="middle" font-size="10" fill="#bbf7d0">Gini = 0.0 (Pure)</text>
        <text x="410" y="200" text-anchor="middle" font-size="10" fill="#bbf7d0">n=5 | Yes:5 No:0</text>

        <!-- Prediction rule -->
        <rect x="80" y="240" width="360" height="28" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="260" y="259" text-anchor="middle" font-size="11" fill="#0369a1" font-weight="500">Rule: If Income=High → Buy | If Income=Low → Don't Buy</text>
      </svg>
    </div>

    <h3>Step 5: Making Predictions with the Tree</h3>
    <pre><code># New customers to predict:
Customer A: Age=33, Income=High → follows right branch → BUYS ✓
Customer B: Age=27, Income=Low  → follows left branch  → DOESN'T BUY ✓
Customer C: Age=55, Income=High → follows right branch → BUYS ✓</code></pre>

    <h3>What Happens with Multiple Levels (Deeper Trees)?</h3>
    <p>When the first split doesn't perfectly separate the data, the algorithm recurses — it applies the same Gini/entropy calculation on each child node until:</p>
    <ul>
      <li>All samples in a node belong to one class (Gini = 0)</li>
      <li><code>max_depth</code> is reached</li>
      <li><code>min_samples_split</code> threshold is not met</li>
      <li>No further gain is possible</li>
    </ul>

    <h3>Overfitting and Pruning</h3>
    <p>A fully grown tree memorizes training data perfectly — Gini=0 at every leaf. This is <strong>overfitting</strong>. Solutions:</p>
    <table>
      <thead><tr><th>Technique</th><th>Parameter</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td>Limit depth</td><td>max_depth=5</td><td>Stops tree from growing too deep</td></tr>
        <tr><td>Min samples to split</td><td>min_samples_split=10</td><td>Node must have ≥10 samples to split</td></tr>
        <tr><td>Min samples at leaf</td><td>min_samples_leaf=5</td><td>Each leaf must have ≥5 samples</td></tr>
        <tr><td>Max leaf nodes</td><td>max_leaf_nodes=20</td><td>Limits total number of leaves</td></tr>
        <tr><td>Post-pruning (ccp_alpha)</td><td>ccp_alpha=0.01</td><td>Prunes branches with low gain</td></tr>
      </tbody>
    </table>

    <h3>Python: Full Implementation with All Metrics</h3>
    <pre><code>from sklearn.tree import DecisionTreeClassifier, export_text, plot_tree
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score,
    f1_score, roc_auc_score, confusion_matrix,
    classification_report, matthews_corrcoef
)
import numpy as np
import matplotlib.pyplot as plt

# Dataset
ages   = [25, 30, 35, 40, 45, 20, 50, 22, 38, 28]
income = ['Low','High','High','Low','High','Low','High','Low','High','Low']
buys   = [0, 1, 1, 0, 1, 0, 1, 0, 1, 0]

# Encode categorical feature
le = LabelEncoder()
income_enc = le.fit_transform(income)  # Low=0, High=1

X = np.column_stack([ages, income_enc])
y = np.array(buys)

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Train Decision Tree
model = DecisionTreeClassifier(
    criterion='gini',
    max_depth=3,
    min_samples_split=2,
    min_samples_leaf=1,
    random_state=42
)
model.fit(X_train, y_train)

# Predictions
y_pred      = model.predict(X_test)
y_pred_prob = model.predict_proba(X_test)[:, 1]

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)
tn, fp, fn, tp = cm.ravel()

# All metrics
accuracy    = accuracy_score(y_test, y_pred)
precision   = precision_score(y_test, y_pred, zero_division=0)
recall      = recall_score(y_test, y_pred, zero_division=0)
specificity = tn / (tn + fp) if (tn + fp) > 0 else 0
f1          = f1_score(y_test, y_pred, zero_division=0)
auc         = roc_auc_score(y_test, y_pred_prob)
mcc         = matthews_corrcoef(y_test, y_pred)

print("=" * 45)
print(f"  Confusion Matrix : TN={tn} FP={fp} FN={fn} TP={tp}")
print(f"  Accuracy         : {accuracy:.4f}")
print(f"  Precision        : {precision:.4f}")
print(f"  Recall           : {recall:.4f}")
print(f"  Specificity      : {specificity:.4f}")
print(f"  F1-Score         : {f1:.4f}")
print(f"  ROC-AUC          : {auc:.4f}")
print(f"  MCC              : {mcc:.4f}")
print("=" * 45)

# Feature importance
print("\\nFeature Importance:")
for name, imp in zip(['Age','Income'], model.feature_importances_):
    print(f"  {name}: {imp:.4f}")

# Print tree rules
print("\\nTree Rules:")
print(export_text(model, feature_names=['Age', 'Income']))

# Visualize the tree
plt.figure(figsize=(12, 6))
plot_tree(model, feature_names=['Age','Income'],
          class_names=['No','Yes'], filled=True, rounded=True)
plt.title("Decision Tree Visualization")
plt.savefig("decision_tree.png", bbox_inches='tight')
plt.show()</code></pre>

    <h3>Expected Output</h3>
    <pre><code>=============================================
  Confusion Matrix : TN=2 FP=0 FN=0 TP=1
  Accuracy         : 1.0000
  Precision        : 1.0000
  Recall           : 1.0000
  Specificity      : 1.0000
  F1-Score         : 1.0000
  ROC-AUC          : 1.0000
  MCC              : 1.0000
=============================================

Feature Importance:
  Age:    0.0000
  Income: 1.0000

Tree Rules:
|--- Income <= 0.50
|   |--- class: 0 (No)
|--- Income >  0.50
|   |--- class: 1 (Yes)</code></pre>
    <p>Income has <strong>100% feature importance</strong> — it alone perfectly predicts the outcome. Age contributes 0% to the decision.</p>

    <h3>Classification Metrics Explained</h3>
    <table>
      <thead>
        <tr><th>Metric</th><th>Formula</th><th>Range</th><th>Use When</th></tr>
      </thead>
      <tbody>
        <tr><td>Accuracy</td><td>(TP+TN)/(TP+TN+FP+FN)</td><td>[0,1]</td><td>Balanced classes</td></tr>
        <tr><td>Precision</td><td>TP/(TP+FP)</td><td>[0,1]</td><td>FP is costly</td></tr>
        <tr><td>Recall</td><td>TP/(TP+FN)</td><td>[0,1]</td><td>FN is costly</td></tr>
        <tr><td>F1-Score</td><td>2×P×R/(P+R)</td><td>[0,1]</td><td>Balance P and R</td></tr>
        <tr><td>Specificity</td><td>TN/(TN+FP)</td><td>[0,1]</td><td>True negative rate</td></tr>
        <tr><td>ROC-AUC</td><td>Area under ROC curve</td><td>[0,1]</td><td>Overall ranking</td></tr>
        <tr><td>MCC</td><td>(TP×TN−FP×FN)/√(…)</td><td>[-1,+1]</td><td>Imbalanced data</td></tr>
      </tbody>
    </table>

    <h3>Key Hyperparameters</h3>
    <table>
      <thead><tr><th>Parameter</th><th>Description</th><th>Default</th></tr></thead>
      <tbody>
        <tr><td>criterion</td><td>'gini' or 'entropy' — split quality measure</td><td>'gini'</td></tr>
        <tr><td>max_depth</td><td>Max depth of tree. None = fully grown (overfits)</td><td>None</td></tr>
        <tr><td>min_samples_split</td><td>Min samples to split an internal node</td><td>2</td></tr>
        <tr><td>min_samples_leaf</td><td>Min samples required at a leaf node</td><td>1</td></tr>
        <tr><td>max_features</td><td>Features considered per split: 'sqrt', 'log2', int</td><td>None</td></tr>
        <tr><td>ccp_alpha</td><td>Complexity parameter for post-pruning</td><td>0.0</td></tr>
        <tr><td>class_weight</td><td>'balanced' for imbalanced datasets</td><td>None</td></tr>
      </tbody>
    </table>

    <h3>Advantages and Disadvantages</h3>
    <p><strong>Advantages:</strong> Fully interpretable — you can visualize the exact rules. No feature scaling needed. Handles both numerical and categorical features. Captures non-linear relationships. Works well on small datasets.</p>
    <p><strong>Disadvantages:</strong> Prone to overfitting without pruning. Unstable — small data changes can produce very different trees. Biased toward features with more levels. Poor generalization compared to ensemble methods.</p>

    <h3>Conclusion</h3>
    <p>Decision trees are the most interpretable machine learning models. By manually calculating Gini impurity and information gain, you understand exactly why the algorithm chooses one split over another. In our example, Income gave a Gini Gain of 0.50 (maximum possible) while Age only gave 0.18 — so the tree correctly chose Income as the root split. Mastering this logic is essential before moving to Random Forest and XGBoost, which are just many decision trees combined.</p>
  `
};
