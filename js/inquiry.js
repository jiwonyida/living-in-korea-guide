// Living in Korea Guide - Consultation & Lead Generation Management

const STORAGE_KEY = "living_korea_housing_leads";

function getStoredLeads() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to load leads from localStorage", e);
    return [];
  }
}

function saveLead(leadData) {
  const existing = getStoredLeads();
  const refCode = "LKG-2026-" + Math.floor(1000 + Math.random() * 9000);
  const newLead = {
    refCode,
    submittedAt: new Date().toISOString(),
    ...leadData
  };
  existing.unshift(newLead);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error("Failed to save lead", e);
  }
  return newLead;
}

window.inquiryService = {
  getStoredLeads,
  saveLead
};
