/* Shared project storage for BuildingEnvelopeChecklist.html and EquipmentAudit.html */
const SHARED_PROJECT_KEY = 'ebako_audit_project_v1';
function defaultSharedProject() {
  return {
    version: 1,
    project: { client: '', address: '', auditDate: '', auditor: '' },
    buildingEnvelope: {},
    equipmentAudit: { equipment: [], measurements: [], recommendations: [] },
    baseline: { electricityBills: [], gasBills: [], weather: [], occupancy: [], operatingSchedules: [] },
    measures: [],
    mv: { baselinePeriod: '', reportingPeriod: '', adjustments: [], verifiedSavings: [] }
  };
}
function loadSharedProject() {
  try { return { ...defaultSharedProject(), ...JSON.parse(localStorage.getItem(SHARED_PROJECT_KEY) || '{}') }; }
  catch { return defaultSharedProject(); }
}
function saveSharedProject(project) {
  localStorage.setItem(SHARED_PROJECT_KEY, JSON.stringify(project));
}
function downloadSharedProject(project, filename='audit-project.json') {
  const blob = new Blob([JSON.stringify(project, null, 2)], {type:'application/json'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = filename; a.click(); URL.revokeObjectURL(a.href);
}
