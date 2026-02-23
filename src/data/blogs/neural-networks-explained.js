export const neural_networks_explained = {
  title: "Neural Networks: Forward Propagation & Backpropagation Step-by-Step",
  description: "Build a neural network from scratch — understand neurons, forward propagation, loss, backpropagation, and gradient descent with a full manual example, SVG diagram, and Python code.",
  date: "February 21, 2026",
  category: "Deep Learning",
  readTime: 16,
  slug: "neural-networks-explained",
  content: `
    <p>Neural networks are the foundation of all modern deep learning — image recognition, language models, speech synthesis, and more. But behind the impressive results is a surprisingly elegant mathematical idea: weighted sums, activation functions, and gradients flowing backward. In this post we build a 2→2→1 network manually, computing every number by hand, so you understand exactly what happens inside.</p>

    <h3>What is a Neural Network?</h3>
    <p>A neural network is a stack of layers. Each layer contains <strong>neurons</strong>. A single neuron does three things:</p>
    <ol>
      <li>Takes inputs x₁, x₂, …, xₙ with associated weights w₁, w₂, …, wₙ</li>
      <li>Computes a weighted sum and adds a bias: <code>z = w₁x₁ + w₂x₂ + … + wₙxₙ + b</code></li>
      <li>Passes z through an <strong>activation function</strong>: <code>a = f(z)</code></li>
    </ol>
    <p>String many neurons together across multiple layers and you get a network capable of learning any continuous function — this is the <em>Universal Approximation Theorem</em>.</p>

    <h3>Architecture: Layers</h3>
    <ul>
      <li><strong>Input Layer</strong> — one neuron per feature (no computation, just passes data forward)</li>
      <li><strong>Hidden Layers</strong> — learn intermediate representations; more layers = deeper network = more complex patterns</li>
      <li><strong>Output Layer</strong> — one neuron for binary classification (sigmoid), N neurons for N-class (softmax), one neuron for regression (linear)</li>
    </ul>

    <svg viewBox="0 0 660 310" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:660px;display:block;margin:24px auto;font-family:sans-serif">
      <rect width="660" height="310" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="330" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">Neural Network Architecture: 2 → 2 → 1</text>

      <!-- Connection lines: Input to Hidden -->
      <line x1="133" y1="105" x2="287" y2="105" stroke="#93c5fd" stroke-width="2"/>
      <line x1="133" y1="105" x2="287" y2="205" stroke="#93c5fd" stroke-width="2"/>
      <line x1="133" y1="205" x2="287" y2="105" stroke="#93c5fd" stroke-width="2"/>
      <line x1="133" y1="205" x2="287" y2="205" stroke="#93c5fd" stroke-width="2"/>

      <!-- Connection lines: Hidden to Output -->
      <line x1="353" y1="105" x2="497" y2="155" stroke="#6ee7b7" stroke-width="2"/>
      <line x1="353" y1="205" x2="497" y2="155" stroke="#6ee7b7" stroke-width="2"/>

      <!-- Input nodes -->
      <circle cx="103" cy="105" r="30" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <text x="103" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="white">x₁</text>
      <text x="103" y="116" text-anchor="middle" font-size="9" fill="#bfdbfe">Study Hrs</text>

      <circle cx="103" cy="205" r="30" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <text x="103" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="white">x₂</text>
      <text x="103" y="216" text-anchor="middle" font-size="9" fill="#bfdbfe">Sleep Hrs</text>

      <!-- Hidden nodes -->
      <circle cx="320" cy="105" r="33" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
      <text x="320" y="99" text-anchor="middle" font-size="13" font-weight="bold" fill="white">H₁</text>
      <text x="320" y="114" text-anchor="middle" font-size="9" fill="#fef3c7">ReLU(z₁)</text>

      <circle cx="320" cy="205" r="33" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
      <text x="320" y="199" text-anchor="middle" font-size="13" font-weight="bold" fill="white">H₂</text>
      <text x="320" y="214" text-anchor="middle" font-size="9" fill="#fef3c7">ReLU(z₂)</text>

      <!-- Output node -->
      <circle cx="527" cy="155" r="33" fill="#10b981" stroke="#059669" stroke-width="2"/>
      <text x="527" y="149" text-anchor="middle" font-size="13" font-weight="bold" fill="white">ŷ</text>
      <text x="527" y="165" text-anchor="middle" font-size="9" fill="#d1fae5">σ(z_out)</text>

      <!-- Weight labels -->
      <text x="195" y="88" text-anchor="middle" font-size="9" fill="#1d4ed8">w₁₁=0.5</text>
      <text x="185" y="172" text-anchor="middle" font-size="9" fill="#1d4ed8">w₁₂=0.3</text>
      <text x="185" y="140" text-anchor="middle" font-size="9" fill="#7c3aed">w₂₁=0.2</text>
      <text x="195" y="228" text-anchor="middle" font-size="9" fill="#7c3aed">w₂₂=-0.1</text>

      <text x="415" y="118" text-anchor="middle" font-size="9" fill="#065f46">v₁=0.7</text>
      <text x="415" y="198" text-anchor="middle" font-size="9" fill="#065f46">v₂=0.4</text>

      <!-- Bias labels -->
      <text x="320" y="62" text-anchor="middle" font-size="9" fill="#92400e">b₁=0.1</text>
      <text x="320" y="252" text-anchor="middle" font-size="9" fill="#92400e">b₂=0.0</text>
      <text x="527" y="112" text-anchor="middle" font-size="9" fill="#065f46">b_out=-0.2</text>

      <!-- Layer labels -->
      <text x="103" y="270" text-anchor="middle" font-size="11" fill="#475569" font-weight="bold">Input Layer</text>
      <text x="103" y="285" text-anchor="middle" font-size="9" fill="#94a3b8">2 features</text>
      <text x="320" y="270" text-anchor="middle" font-size="11" fill="#475569" font-weight="bold">Hidden Layer</text>
      <text x="320" y="285" text-anchor="middle" font-size="9" fill="#94a3b8">2 neurons · ReLU</text>
      <text x="527" y="270" text-anchor="middle" font-size="11" fill="#475569" font-weight="bold">Output Layer</text>
      <text x="527" y="285" text-anchor="middle" font-size="9" fill="#94a3b8">1 neuron · Sigmoid</text>
    </svg>

    <h3>Activation Functions</h3>
    <table>
      <thead><tr><th>Function</th><th>Formula</th><th>Range</th><th>Best Used For</th></tr></thead>
      <tbody>
        <tr><td><strong>ReLU</strong></td><td>max(0, x)</td><td>[0, ∞)</td><td>Default for hidden layers — fast, no vanishing gradient for positive values</td></tr>
        <tr><td><strong>Sigmoid</strong></td><td>1 / (1 + e⁻ˣ)</td><td>(0, 1)</td><td>Binary classification output layer</td></tr>
        <tr><td><strong>Softmax</strong></td><td>eˣⁱ / Σeˣʲ</td><td>(0, 1) sums to 1</td><td>Multi-class output layer</td></tr>
        <tr><td><strong>Tanh</strong></td><td>(eˣ − e⁻ˣ) / (eˣ + e⁻ˣ)</td><td>(−1, 1)</td><td>Hidden layers in RNNs — zero-centered</td></tr>
        <tr><td><strong>Leaky ReLU</strong></td><td>max(0.01x, x)</td><td>(−∞, ∞)</td><td>Avoids "dying ReLU" — neurons stuck at 0</td></tr>
        <tr><td><strong>Linear</strong></td><td>x</td><td>(−∞, ∞)</td><td>Regression output layer</td></tr>
      </tbody>
    </table>

    <h3>Dataset: Predict Student Pass/Fail</h3>
    <p>We use 4 students with 2 features: <strong>Study Hours (x₁)</strong> and <strong>Sleep Hours (x₂)</strong>. The label is <strong>Pass = 1, Fail = 0</strong>.</p>
    <table>
      <thead><tr><th>Student</th><th>Study (x₁)</th><th>Sleep (x₂)</th><th>Pass? (y)</th></tr></thead>
      <tbody>
        <tr><td>S1</td><td>5</td><td>7</td><td>1 (Pass)</td></tr>
        <tr><td>S2</td><td>2</td><td>4</td><td>0 (Fail)</td></tr>
        <tr><td>S3</td><td>8</td><td>6</td><td>1 (Pass)</td></tr>
        <tr><td>S4</td><td>1</td><td>3</td><td>0 (Fail)</td></tr>
      </tbody>
    </table>
    <p>Network: <strong>2 Input → 2 Hidden (ReLU) → 1 Output (Sigmoid)</strong>. We work through Student S1 completely by hand.</p>

    <h3>Initial Weights (Random Initialization)</h3>
    <pre><code>Hidden Layer H1:   w₁₁ = 0.5,  w₂₁ = 0.2,  b₁ = 0.1
Hidden Layer H2:   w₁₂ = 0.3,  w₂₂ = -0.1, b₂ = 0.0
Output Neuron:     v₁  = 0.7,  v₂  = 0.4,  b_out = -0.2

Learning rate:  η = 0.1</code></pre>

    <h3>Step 1 — Forward Propagation</h3>
    <p>Input: Student S1 → x₁ = 5, x₂ = 7, y = 1</p>

    <h4>Hidden Layer Pre-Activations (z)</h4>
    <pre><code>z₁ = w₁₁×x₁ + w₂₁×x₂ + b₁
   = 0.5×5  + 0.2×7  + 0.1
   = 2.5    + 1.4    + 0.1
   = 4.0

z₂ = w₁₂×x₁ + w₂₂×x₂ + b₂
   = 0.3×5  + (-0.1)×7 + 0.0
   = 1.5    - 0.7      + 0.0
   = 0.8</code></pre>

    <h4>Hidden Layer Activations — ReLU</h4>
    <pre><code>h₁ = ReLU(z₁) = max(0, 4.0) = 4.0   ✓ (positive, passes through)
h₂ = ReLU(z₂) = max(0, 0.8) = 0.8   ✓ (positive, passes through)</code></pre>

    <h4>Output Pre-Activation</h4>
    <pre><code>z_out = v₁×h₁ + v₂×h₂ + b_out
      = 0.7×4.0 + 0.4×0.8 + (-0.2)
      = 2.8     + 0.32     - 0.2
      = 2.92</code></pre>

    <h4>Output Activation — Sigmoid</h4>
    <pre><code>ŷ = σ(z_out) = 1 / (1 + e^(-2.92))
             = 1 / (1 + 0.0539)
             = 1 / 1.0539
             ≈ 0.949

Prediction: P(Pass) = 0.949  →  Classify as Pass ✓ (correct!)</code></pre>

    <h3>Step 2 — Loss Function (Binary Cross-Entropy)</h3>
    <p>For binary classification we use <strong>Binary Cross-Entropy (BCE)</strong>, also called Log Loss:</p>
    <pre><code>L = -[ y × log(ŷ) + (1 - y) × log(1 - ŷ) ]

For S1 (y = 1, ŷ = 0.949):
L = -[ 1 × log(0.949) + 0 × log(0.051) ]
  = -log(0.949)
  = -(-0.0524)
  = 0.0524

Low loss! The network is already fairly confident and correct for S1.</code></pre>

    <h3>Step 3 — Backpropagation (Chain Rule)</h3>
    <p>Backpropagation computes how much each weight contributed to the error. We apply the <strong>chain rule</strong> of calculus, propagating gradients from output → hidden → input.</p>

    <h4>Output Layer Gradient</h4>
    <pre><code>For sigmoid output with BCE loss, the derivative simplifies beautifully to:

δ_out = ŷ - y = 0.949 - 1.0 = -0.051

(Negative means the network output was too low — but it's already close to 1.0)

Output weight gradients:
  ∂L/∂v₁    = δ_out × h₁ = -0.051 × 4.0  = -0.204
  ∂L/∂v₂    = δ_out × h₂ = -0.051 × 0.8  = -0.041
  ∂L/∂b_out = δ_out       = -0.051</code></pre>

    <h4>Hidden Layer Gradients (via Chain Rule)</h4>
    <p>For ReLU: derivative is 1 if z > 0, else 0. Both z₁=4.0 and z₂=0.8 are positive, so ReLU' = 1 for both.</p>
    <pre><code>Error signal propagated back to H1:
  δ₁ = δ_out × v₁ × ReLU'(z₁) = -0.051 × 0.7 × 1 = -0.036

Error signal propagated back to H2:
  δ₂ = δ_out × v₂ × ReLU'(z₂) = -0.051 × 0.4 × 1 = -0.020

Hidden weight gradients:
  ∂L/∂w₁₁ = δ₁ × x₁ = -0.036 × 5 = -0.180
  ∂L/∂w₂₁ = δ₁ × x₂ = -0.036 × 7 = -0.252
  ∂L/∂b₁  = δ₁       = -0.036

  ∂L/∂w₁₂ = δ₂ × x₁ = -0.020 × 5 = -0.100
  ∂L/∂w₂₂ = δ₂ × x₂ = -0.020 × 7 = -0.140
  ∂L/∂b₂  = δ₂       = -0.020</code></pre>

    <h3>Step 4 — Weight Update (Gradient Descent)</h3>
    <pre><code>Weight_new = Weight_old - η × Gradient   (η = 0.1)

Output weights:
  v₁:    0.700 - 0.1 × (-0.204) = 0.700 + 0.020 = 0.720
  v₂:    0.400 - 0.1 × (-0.041) = 0.400 + 0.004 = 0.404
  b_out: -0.200 - 0.1 × (-0.051) = -0.200 + 0.005 = -0.195

Hidden H1 weights:
  w₁₁: 0.500 - 0.1 × (-0.180) = 0.500 + 0.018 = 0.518
  w₂₁: 0.200 - 0.1 × (-0.252) = 0.200 + 0.025 = 0.225
  b₁:  0.100 - 0.1 × (-0.036) = 0.100 + 0.004 = 0.104

Hidden H2 weights:
  w₁₂: 0.300 - 0.1 × (-0.100) = 0.300 + 0.010 = 0.310
  w₂₂: -0.100 - 0.1 × (-0.140) = -0.100 + 0.014 = -0.086
  b₂:  0.000 - 0.1 × (-0.020) = 0.000 + 0.002 = 0.002

All weights nudge in the direction that reduces the loss.
After this update, running S1 through again gives a slightly higher ŷ (closer to 1).</code></pre>

    <h3>Backpropagation Flow Diagram</h3>
    <svg viewBox="0 0 660 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:660px;display:block;margin:24px auto;font-family:sans-serif">
      <rect width="660" height="180" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Forward arrows (blue) -->
      <defs>
        <marker id="fwd" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/>
        </marker>
        <marker id="bwd" markerWidth="8" markerHeight="6" refX="2" refY="3" orient="auto">
          <polygon points="8 0, 0 3, 8 6" fill="#f97316"/>
        </marker>
      </defs>

      <!-- Forward pass -->
      <line x1="60" y1="65" x2="178" y2="65" stroke="#3b82f6" stroke-width="2" marker-end="url(#fwd)"/>
      <line x1="258" y1="65" x2="368" y2="65" stroke="#3b82f6" stroke-width="2" marker-end="url(#fwd)"/>
      <line x1="448" y1="65" x2="548" y2="65" stroke="#3b82f6" stroke-width="2" marker-end="url(#fwd)"/>

      <!-- Backward pass -->
      <line x1="548" y1="110" x2="448" y2="110" stroke="#f97316" stroke-width="2" marker-end="url(#bwd)"/>
      <line x1="368" y1="110" x2="258" y2="110" stroke="#f97316" stroke-width="2" marker-end="url(#bwd)"/>
      <line x1="178" y1="110" x2="78" y2="110" stroke="#f97316" stroke-width="2" marker-end="url(#bwd)"/>

      <!-- Boxes -->
      <rect x="10" y="40" width="50" height="30" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="35" y="59" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="bold">Input</text>

      <rect x="180" y="40" width="78" height="30" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="219" y="59" text-anchor="middle" font-size="10" fill="#92400e" font-weight="bold">Hidden (ReLU)</text>

      <rect x="370" y="40" width="78" height="30" rx="6" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
      <text x="409" y="59" text-anchor="middle" font-size="10" fill="#065f46" font-weight="bold">Output (σ)</text>

      <rect x="550" y="40" width="50" height="30" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="575" y="59" text-anchor="middle" font-size="10" fill="#991b1b" font-weight="bold">Loss</text>

      <!-- Labels -->
      <text x="120" y="55" text-anchor="middle" font-size="9" fill="#3b82f6">z, h (forward)</text>
      <text x="315" y="55" text-anchor="middle" font-size="9" fill="#3b82f6">z_out (forward)</text>
      <text x="500" y="55" text-anchor="middle" font-size="9" fill="#3b82f6">ŷ (forward)</text>

      <text x="120" y="125" text-anchor="middle" font-size="9" fill="#f97316">∂L/∂w (back)</text>
      <text x="315" y="125" text-anchor="middle" font-size="9" fill="#f97316">δ (back)</text>
      <text x="500" y="125" text-anchor="middle" font-size="9" fill="#f97316">δ_out (back)</text>

      <text x="330" y="160" text-anchor="middle" font-size="11" fill="#475569">Blue = Forward Pass &nbsp;&nbsp; Orange = Backward Pass (Backpropagation)</text>
    </svg>

    <h3>Mini-Batch Training: What Really Happens</h3>
    <p>In practice we don't update weights after every single sample. Instead we use <strong>mini-batches</strong>:</p>
    <ol>
      <li><strong>Epoch</strong>: One full pass through the entire training dataset</li>
      <li><strong>Mini-batch</strong>: A subset (e.g., 32 samples) — compute average gradient, update once</li>
      <li><strong>Iteration</strong>: One mini-batch forward + backward + update cycle</li>
    </ol>
    <pre><code>For 1000 samples with batch_size=32:
Iterations per epoch = ceil(1000 / 32) = 32 iterations
After 32 updates, one epoch is complete.
Repeat for 100 epochs = 3200 total weight updates.</code></pre>

    <h3>Optimization Algorithms</h3>
    <table>
      <thead><tr><th>Optimizer</th><th>Key Idea</th><th>When to Use</th></tr></thead>
      <tbody>
        <tr><td><strong>SGD</strong></td><td>Simple gradient descent, optionally with momentum</td><td>When you want full control; CNNs with careful tuning</td></tr>
        <tr><td><strong>Adam</strong></td><td>Adaptive learning rates per weight + momentum (combines RMSprop + Momentum)</td><td>Default choice — works well on most problems</td></tr>
        <tr><td><strong>RMSprop</strong></td><td>Divides learning rate by moving average of recent gradient magnitudes</td><td>RNNs and non-stationary objectives</td></tr>
        <tr><td><strong>AdaGrad</strong></td><td>Accumulates squared gradients — larger update for rare features</td><td>Sparse data, NLP</td></tr>
        <tr><td><strong>AdamW</strong></td><td>Adam + weight decay (L2 regularization) decoupled</td><td>Transformers, large language models</td></tr>
      </tbody>
    </table>

    <h3>Regularization Techniques</h3>
    <table>
      <thead><tr><th>Technique</th><th>How It Works</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td><strong>Dropout</strong></td><td>Randomly zeros out p% of neurons each forward pass during training</td><td>Prevents co-adaptation; acts like ensemble of sub-networks</td></tr>
        <tr><td><strong>Batch Normalization</strong></td><td>Normalizes each layer's output to mean≈0, std≈1 per mini-batch</td><td>Faster training, higher learning rates, less sensitive to initialization</td></tr>
        <tr><td><strong>L2 / Weight Decay</strong></td><td>Adds λ×Σw² to loss, penalizing large weights</td><td>Keeps weights small, smoother decision boundary</td></tr>
        <tr><td><strong>Early Stopping</strong></td><td>Stops training when validation loss stops improving for N epochs</td><td>Prevents overfitting; saves computation</td></tr>
        <tr><td><strong>Data Augmentation</strong></td><td>Artificially expands training data (flips, crops, noise)</td><td>Improves generalization for images and text</td></tr>
      </tbody>
    </table>

    <h3>Classification Metrics</h3>
    <p>After training, evaluate the model on the test set. Suppose on 100 test samples: TP=45, TN=48, FP=4, FN=3.</p>
    <table>
      <thead><tr><th>Metric</th><th>Formula</th><th>Value</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td><strong>Accuracy</strong></td><td>(TP+TN) / Total</td><td>(45+48)/100 = 93%</td><td>Overall correct predictions</td></tr>
        <tr><td><strong>Precision</strong></td><td>TP / (TP+FP)</td><td>45/(45+4) = 91.8%</td><td>Of predicted positives, how many are correct?</td></tr>
        <tr><td><strong>Recall (Sensitivity)</strong></td><td>TP / (TP+FN)</td><td>45/(45+3) = 93.8%</td><td>Of actual positives, how many did we catch?</td></tr>
        <tr><td><strong>F1 Score</strong></td><td>2×(P×R)/(P+R)</td><td>2×(0.918×0.938)/1.856 = 92.8%</td><td>Harmonic mean of Precision and Recall</td></tr>
        <tr><td><strong>Specificity</strong></td><td>TN / (TN+FP)</td><td>48/(48+4) = 92.3%</td><td>Of actual negatives, how many did we correctly reject?</td></tr>
        <tr><td><strong>ROC-AUC</strong></td><td>Area under ROC curve</td><td>0.93 (target: &gt;0.90)</td><td>Discrimination ability across all thresholds</td></tr>
        <tr><td><strong>Log Loss</strong></td><td>-Σ[y×log(ŷ)+(1-y)×log(1-ŷ)]/n</td><td>0.18 (lower = better)</td><td>Penalizes confident wrong predictions heavily</td></tr>
        <tr><td><strong>MCC</strong></td><td>(TP×TN−FP×FN)/√[(TP+FP)(TP+FN)(TN+FP)(TN+FN)]</td><td>≈0.86</td><td>Best single metric for imbalanced classes</td></tr>
      </tbody>
    </table>

    <blockquote>
      <strong>Which metric matters most?</strong><br/>
      • Fraud / disease detection → maximize <strong>Recall</strong> (don't miss real cases)<br/>
      • Spam filter → maximize <strong>Precision</strong> (don't flag legitimate emails)<br/>
      • Imbalanced classes → use <strong>MCC</strong> or <strong>ROC-AUC</strong><br/>
      • Probability calibration matters → use <strong>Log Loss</strong>
    </blockquote>

    <h3>Python Implementation (Keras + sklearn)</h3>
    <pre><code>import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models, callbacks
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, log_loss, matthews_corrcoef, confusion_matrix,
    classification_report
)

# ── 1. Load / prepare data ──────────────────────────────────────────
# Replace X, y with your actual dataset
# X shape: (n_samples, n_features)
# y: binary labels 0 or 1

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Scale features — critical for neural networks
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test  = scaler.transform(X_test)

# ── 2. Build model ──────────────────────────────────────────────────
def build_model(input_dim):
    model = models.Sequential([
        layers.Dense(128, activation='relu', input_shape=(input_dim,)),
        layers.BatchNormalization(),
        layers.Dropout(0.3),

        layers.Dense(64, activation='relu'),
        layers.BatchNormalization(),
        layers.Dropout(0.2),

        layers.Dense(32, activation='relu'),

        layers.Dense(1, activation='sigmoid')  # binary output
    ])
    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
        loss='binary_crossentropy',
        metrics=['accuracy']
    )
    return model

model = build_model(X_train.shape[1])
model.summary()

# ── 3. Train ────────────────────────────────────────────────────────
early_stop = callbacks.EarlyStopping(
    monitor='val_loss',
    patience=15,
    restore_best_weights=True,
    verbose=1
)

reduce_lr = callbacks.ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=7,
    min_lr=1e-6,
    verbose=1
)

history = model.fit(
    X_train, y_train,
    validation_split=0.2,
    epochs=200,
    batch_size=32,
    callbacks=[early_stop, reduce_lr],
    verbose=1
)

# ── 4. Evaluate ─────────────────────────────────────────────────────
y_prob = model.predict(X_test).ravel()   # probabilities
y_pred = (y_prob >= 0.5).astype(int)    # binary predictions

print("=" * 50)
print("NEURAL NETWORK EVALUATION METRICS")
print("=" * 50)

acc  = accuracy_score(y_test, y_pred)
prec = precision_score(y_test, y_pred)
rec  = recall_score(y_test, y_pred)
f1   = f1_score(y_test, y_pred)
auc  = roc_auc_score(y_test, y_prob)
ll   = log_loss(y_test, y_prob)
mcc  = matthews_corrcoef(y_test, y_pred)
cm   = confusion_matrix(y_test, y_pred)

tn, fp, fn, tp = cm.ravel()
specificity = tn / (tn + fp)

print(f"Accuracy:    {acc:.4f}  ({acc*100:.2f}%)")
print(f"Precision:   {prec:.4f}")
print(f"Recall:      {rec:.4f}")
print(f"F1 Score:    {f1:.4f}")
print(f"Specificity: {specificity:.4f}")
print(f"ROC-AUC:     {auc:.4f}")
print(f"Log Loss:    {ll:.4f}")
print(f"MCC:         {mcc:.4f}")
print()
print("Confusion Matrix:")
print(f"  TP={tp}  FP={fp}")
print(f"  FN={fn}  TN={tn}")
print()
print("Full Classification Report:")
print(classification_report(y_test, y_pred))

# ── 5. Plot training curves ──────────────────────────────────────────
import matplotlib.pyplot as plt

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))

ax1.plot(history.history['loss'],     label='Train Loss')
ax1.plot(history.history['val_loss'], label='Val Loss')
ax1.set_title('Loss Curve')
ax1.set_xlabel('Epoch')
ax1.legend()

ax2.plot(history.history['accuracy'],     label='Train Accuracy')
ax2.plot(history.history['val_accuracy'], label='Val Accuracy')
ax2.set_title('Accuracy Curve')
ax2.set_xlabel('Epoch')
ax2.legend()

plt.tight_layout()
plt.savefig('nn_training_curves.png', dpi=150)
plt.show()</code></pre>

    <h3>Hyperparameter Tuning Priority</h3>
    <table>
      <thead><tr><th>Priority</th><th>Hyperparameter</th><th>Typical Range</th><th>Tip</th></tr></thead>
      <tbody>
        <tr><td>1</td><td><strong>Learning Rate</strong></td><td>1e-4 to 1e-2</td><td>Most impactful — try 1e-3 first (Adam default)</td></tr>
        <tr><td>2</td><td><strong>Network Depth</strong></td><td>2–5 hidden layers</td><td>Start shallow; add layers if underfitting</td></tr>
        <tr><td>3</td><td><strong>Neurons per Layer</strong></td><td>32–512 (powers of 2)</td><td>Wider = more capacity; diminishing returns after 256</td></tr>
        <tr><td>4</td><td><strong>Dropout Rate</strong></td><td>0.2–0.5</td><td>Higher dropout for larger networks</td></tr>
        <tr><td>5</td><td><strong>Batch Size</strong></td><td>16–256</td><td>Larger batch = faster but sometimes worse generalization</td></tr>
        <tr><td>6</td><td><strong>Optimizer</strong></td><td>Adam (default)</td><td>Switch to SGD+momentum for final fine-tuning</td></tr>
        <tr><td>7</td><td><strong>Activation</strong></td><td>ReLU (default)</td><td>Try LeakyReLU if neurons are dying (outputs all zero)</td></tr>
        <tr><td>8</td><td><strong>Weight Init</strong></td><td>He (ReLU), Glorot (Tanh)</td><td>Keras uses Glorot by default; change for deep ReLU nets</td></tr>
      </tbody>
    </table>

    <h3>Neural Network vs Tree-Based Algorithms</h3>
    <table>
      <thead><tr><th>Factor</th><th>Neural Network</th><th>XGBoost / Random Forest</th></tr></thead>
      <tbody>
        <tr><td>Data type</td><td>Images, text, audio, sequences</td><td>Tabular / structured data</td></tr>
        <tr><td>Data size</td><td>Needs 10k+ samples to shine</td><td>Works well with 500+ samples</td></tr>
        <tr><td>Training time</td><td>Hours (GPU recommended)</td><td>Seconds to minutes (CPU)</td></tr>
        <tr><td>Feature engineering</td><td>Learns features automatically</td><td>Benefits from good features</td></tr>
        <tr><td>Interpretability</td><td>Black-box (use SHAP)</td><td>More interpretable (feature importance)</td></tr>
        <tr><td>Missing values</td><td>Needs imputation first</td><td>XGBoost handles natively</td></tr>
        <tr><td>Hyperparameters</td><td>Many (architecture + training)</td><td>Fewer, more forgiving</td></tr>
      </tbody>
    </table>

    <h3>When to Use Neural Networks</h3>
    <ul>
      <li><strong>Unstructured data</strong> — images (CNNs), text (Transformers), audio (RNNs/CNNs)</li>
      <li><strong>Large datasets</strong> — 10,000+ samples; they don't reach full potential on small data</li>
      <li><strong>Raw features</strong> — pixels, tokens, waveforms where features are not hand-crafted</li>
      <li><strong>Sequential patterns</strong> — time series, language, speech with temporal dependencies</li>
      <li><strong>State-of-the-art is required</strong> — NLP, computer vision benchmarks are all deep learning</li>
    </ul>
    <p>For tabular data with &lt;100k rows, <strong>XGBoost or Random Forest will usually outperform a neural network</strong> while training 100× faster. Always try tree-based models first on structured data.</p>

    <h3>Conclusion</h3>
    <p>Neural networks learn by repeating four steps: <strong>Forward Propagation</strong> (compute prediction), <strong>Loss</strong> (measure error), <strong>Backpropagation</strong> (compute gradients via chain rule), and <strong>Gradient Descent</strong> (update weights to reduce error). Everything in modern deep learning — CNNs, Transformers, LLMs — is built on this same foundation. Once you understand the math behind a 2→2→1 network, scaling to millions of parameters is just engineering.</p>
  `
};
