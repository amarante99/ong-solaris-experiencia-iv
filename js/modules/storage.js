const DIAGNOSIS_KEY = 'solaris_diagnosticos';
const VOLUNTEER_KEY = 'solaris_voluntario';

export function getDiagnoses() {
  const raw = localStorage.getItem(DIAGNOSIS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(DIAGNOSIS_KEY);
    return [];
  }
}

export function saveDiagnosis(diagnosis) {
  const diagnoses = getDiagnoses();
  diagnoses.unshift(diagnosis);
  localStorage.setItem(DIAGNOSIS_KEY, JSON.stringify(diagnoses));
  return diagnoses;
}

export function removeDiagnosis(id) {
  const diagnoses = getDiagnoses().filter(item => item.id !== id);
  localStorage.setItem(DIAGNOSIS_KEY, JSON.stringify(diagnoses));
  return diagnoses;
}

export function saveVolunteer(data) {
  localStorage.setItem(VOLUNTEER_KEY, JSON.stringify(data));
}

export function getVolunteer() {
  const raw = localStorage.getItem(VOLUNTEER_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function savePreference(key, value) {
  try {
    localStorage.setItem(`solaris_preferencia_${key}`, JSON.stringify(value));
  } catch {
    // Preferência visual permanece apenas na sessão quando o armazenamento não está disponível.
  }
}

export function getPreference(key) {
  try {
    const raw = localStorage.getItem(`solaris_preferencia_${key}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
