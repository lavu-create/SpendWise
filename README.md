# 👜 SpendWise – A Family & Group Shared Wallet with On‑Chain Transparency  

> ⚡️ Built for Morph's Consumer Buildathon – Empowering Families & Groups with Financial Control  
> 👩‍💻 By Team SpendWise: Lavanya · Mehul · Nitesh · Rahul 

---

## 🧠 The Problem We're Solving  

Shared money is often mismanaged because of a lack of visibility and trust. Parents can’t track pocket money usage, groups can’t see who’s overspending, and existing tools are fragmented.  

SpendWise solves this by creating a **transparent shared wallet system** that enforces spending limits and provides real‑time insights:  
- 💰 Track all group or family transactions  
- 🔒 Set per‑member and per‑category limits  
- 📊 View real‑time dashboards and alerts  
- 🛡️ Build trust with on‑chain accountability  

---

## 🌟 Key Highlights  

- 💰 **Shared Wallets** – Create pooled vaults for family or groups  
- 🔒 **Spending Limits** – Enforce per‑member & category caps  
- 📊 **Real‑Time Dashboards** – Visual reports and instant alerts  
- 🔍 **On‑Chain Transparency** – Immutable records on Morph testnet  
- 🚫 **Smart Controls** – Block overspending & freeze member accounts  

---

## 💡 Why It Matters  

SpendWise empowers families and groups to:  
- Reduce financial conflicts with transparent tracking  
- Build trust through immutable transaction records  
- Encourage responsible money management habits  
- Get real‑time alerts to prevent overspending  

---

## 🧰 Tech Stack  

| Layer       | Tech Used                 |
|-------------|---------------------------|
| Frontend    | HTML, CSS, JavaScript     |
| Blockchain  | Solidity (Morph Testnet)  |
| Wallet Auth | MetaMask (basic wallet)   |
| Backend     | Node.js (Express), JSON   |
| Database    | LocalStorage / Firebase   |
| Deployment  | GitHub Pages / Render     |

---

## 🚀 Getting Started  

### 🖥️ Frontend  

```bash
cd spendwise/app  
npm install  
npm run dev    # Runs on http://localhost:5173
```

### 🔧 Smart Contracts  

```bash
cd spendwise/contracts  
npm install  
npx hardhat compile  
node scripts/deploy.js
```

> Deployed contracts live on **Morph Testnet**. Ensure `.env` is configured with your RPC URL and private key.  

---

## 🔐 Wallet & Auth Flow  

1. Connect MetaMask or WalletConnect  
2. Members join the shared vault using their address  
3. On‑chain rules enforce spending limits  
4. All transactions are publicly viewable on the blockchain  

---

## 📊 Data Visualization  

SpendWise provides interactive dashboards for:  
- Member‑wise spending  
- Category‑wise distribution  
- Alerts when approaching caps  
- Transaction history (on‑chain & cached)  

---

## 📁 Project Structure  

```
spendwise/  
├── frontend/          → Complete UI (HTML, CSS, JS)  
│   └── assets/        → Icons, wallet logos, images (used in frontend)  
├── backend/           → APIs for caching events & managing members  
├── blockchain/        → Solidity vault contracts (Morph testnet)  
├── auth/              → Wallet authentication (MetaMask / WalletConnect)  
├── analytics/         → Spending dashboards & category visualizations  
├── docs/              → Architecture diagrams & demo script  
├── README.md          → Project overview and documentation  
├── LICENSE            → MIT License  

```

---

## 🧑‍💻 Team SpendWise  

| Name        | Role                |
|-------------|---------------------|
| Lavanya     | Frontend Lead       |
| Mehul       | Logic & Testing     |
| Nitesh      | Authentication      |
| Rahul       | Frontend developer  |

---

## 🌱 Git Workflow  

```bash
git clone https://github.com/your-username/spendwise.git  
cd spendwise  
git checkout -b feature/your-feature  
# make changes  
git add .  
git commit -m "Added new feature"  
git push origin feature/your-feature
```

---

## 🛠️ Future Enhancements  

- 💳 Add stablecoin / real fiat on‑ramp support  
- 📱 Mobile app (React Native or Flutter)  
- 🧾 Advanced analytics with AI‑powered spend insights  
- 🌍 Multi‑language support  
- 🧭 PWA with offline transaction signing  

---

## 📜 License  

MIT License – Free to use, adapt, and contribute. Please credit the creators.  

---

> SpendWise isn’t just a wallet — it’s a **trust layer** for families and groups.  
> Transparent. Accountable. Empowering. ✨  
