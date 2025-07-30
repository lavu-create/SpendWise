/* SpendWise – Frontend Demo (HTML/CSS/JS) without charts */

const CATEGORIES = ["Food", "Transport", "Entertainment", "Education", "Shopping", "Utilities", "Health", "Other"];
const APPROACHING_THRESHOLD = 0.8;
const KEY = "spendwise_state_v1";
let state = { vaults: {}, activeVaultId: null, wallet: { address: null, chainId: null } };

// DOM helpers
const $ = sel => document.querySelector(sel);
const dom = {
  connectBtn: $("#connectBtn"), walletInfo: $("#walletInfo"), walletAddress: $("#walletAddress"), switchNetworkBtn: $("#switchNetworkBtn"),
  createVaultOpen: $("#createVaultOpen"), importVaultOpen: $("#importVaultOpen"), importVaultInput: $("#importVaultInput"), createVaultModal: $("#createVaultModal"), vaultNameInput: $("#vaultNameInput"), createVaultBtn: $("#createVaultBtn"),
  vaultSelect: $("#vaultSelect"), exportVaultBtn: $("#exportVaultBtn"), deleteVaultBtn: $("#deleteVaultBtn"),
  vaultNameLabel: $("#vaultNameLabel"), vaultOwnerLabel: $("#vaultOwnerLabel"), vaultCreatedLabel: $("#vaultCreatedLabel"),
  globalCaps: $("#globalCaps"), saveGlobalCapsBtn: $("#saveGlobalCapsBtn"),
  memberName: $("#memberName"), memberAddress: $("#memberAddress"), memberMonthlyCap: $("#memberMonthlyCap"), addMemberBtn: $("#addMemberBtn"), membersTable: $("#membersTable tbody"),
  txnMember: $("#txnMember"), txnCategory: $("#txnCategory"), txnAmount: $("#txnAmount"), txnNote: $("#txnNote"), addTxnBtn: $("#addTxnBtn"), txnsTable: $("#txnsTable tbody"), simulateOnChain: $("#simulateOnChain"),
  alerts: $("#alerts")
};

function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  dom.alerts.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}
function shortAddr(addr) {
  return addr ? addr.slice(0, 6) + "…" + addr.slice(-4) : "—";
}
function fmt(n) {
  return "₹" + Number(n).toFixed(2);
}

// Vault helpers
function createVault({ name, owner }) {
  const id = "vault_" + crypto.randomUUID();
  state.vaults[id] = { id, name, owner, createdAt: new Date().toISOString(), members: {}, globalCategoryCaps: {}, txns: [] };
  state.activeVaultId = id;
  return id;
}
function currentVault() {
  return state.vaults[state.activeVaultId] || null;
}

function seedData() {
  const vid = createVault({ name: "Family Wallet", owner: state.wallet.address || "0x0" });
  const v = state.vaults[vid];
  v.globalCategoryCaps = Object.fromEntries(CATEGORIES.map(c => [c, 500]));
  v.members["0x1111...AAAA"] = { name: "Lavanya", cap: 1200, frozen: false, categoryCaps: {} };
  v.members["0x2222...BBBB"] = { name: "Mehul", cap: 800, frozen: false, categoryCaps: {} };
  v.members["0x3333...CCCC"] = { name: "Nitesh", cap: 1000, frozen: false, categoryCaps: {} };
  v.members["0x4444...DDDD"] = { name: "Rahul", cap: 900, frozen: false, categoryCaps: {} };
  const now = new Date().toISOString();
  v.txns.push({ id: "txn1", ts: now, memberAddr: "0x1111...AAAA", memberName: "Lavanya", category: "Food", amount: 250, note: "Groceries" });
  v.txns.push({ id: "txn2", ts: now, memberAddr: "0x2222...BBBB", memberName: "Mehul", category: "Transport", amount: 120, note: "Metro card" });
  v.txns.push({ id: "txn3", ts: now, memberAddr: "0x3333...CCCC", memberName: "Nitesh", category: "Education", amount: 300, note: "Course" });
  v.txns.push({ id: "txn4", ts: now, memberAddr: "0x4444...DDDD", memberName: "Rahul", category: "Entertainment", amount: 150, note: "Movies" });
}

function renderVaults() {
  const ids = Object.keys(state.vaults);
  dom.vaultSelect.innerHTML = "";
  ids.forEach(id => {
    const v = state.vaults[id];
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = `${v.name} (${shortAddr(v.owner)})`;
    dom.vaultSelect.appendChild(opt);
  });
  dom.vaultSelect.value = state.activeVaultId;
  renderMembers();
  renderTxns();
}

function renderMembers() {
  const v = currentVault();
  dom.membersTable.innerHTML = "";
  dom.txnMember.innerHTML = "";
  for (const [addr, m] of Object.entries(v.members)) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.name}</td>
      <td>${shortAddr(addr)}</td>
      <td>${fmt(m.cap)}</td>
      <td>${m.frozen ? "Frozen" : "Active"}</td>
      <td>—</td>`;
    dom.membersTable.appendChild(tr);
    const opt = document.createElement("option");
    opt.value = addr;
    opt.textContent = `${m.name} (${shortAddr(addr)})`;
    dom.txnMember.appendChild(opt);
  }
}

function renderTxns() {
  const v = currentVault();
  dom.txnsTable.innerHTML = "";
  v.txns.slice().reverse().forEach(t => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${new Date(t.ts).toLocaleString()}</td>
      <td>${t.memberName}</td>
      <td>${t.category}</td>
      <td>${fmt(t.amount)}</td>
      <td>${t.note}</td>
      <td>—</td><td>—</td>`;
    dom.txnsTable.appendChild(tr);
  });
}

// Init
function init() {
  seedData(); // Force seed every load (Rahul always included)
  renderVaults();
}
document.addEventListener("DOMContentLoaded", init);