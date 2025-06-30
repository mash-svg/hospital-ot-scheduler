import { saveSurgery, fetchSurgeries } from './firestore.js';
import { storage, ref, uploadBytes, getDownloadURL } from '../firebase.js';

document.getElementById('surgeryForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const reportFile = document.getElementById('report').files[0];
  let reportUrl = '';
  if (reportFile) {
    const reportRef = ref(storage, 'reports/' + reportFile.name);
    await uploadBytes(reportRef, reportFile);
    reportUrl = await getDownloadURL(reportRef);
  }

  const surgeryData = {
    time: document.getElementById('surgeryTime').value,
    otId: document.getElementById('otId').value,
    anesthesia: document.getElementById('anesthesia').value,
    anesthesiologist: document.getElementById('anesthesiologist').value,
    surgeon: document.getElementById('surgeon').value,
    assistant: document.getElementById('assistant').value,
    nurses: document.getElementById('nurses').value,
    prePostNotes: document.getElementById('prePostNotes').value,
    remarks: document.getElementById('remarks').value,
    materials: document.getElementById('materials').value,
    reportUrl: reportUrl,
    createdAt: new Date().toISOString()
  };

  await saveSurgery(surgeryData);
  logActivity("Scheduled surgery for OT " + surgeryData.otId);
  loadSurgeries();
  e.target.reset();
});

function logActivity(msg) {
  const li = document.createElement('li');
  li.textContent = msg + ' - ' + new Date().toLocaleString();
  document.getElementById('logList').appendChild(li);
}

async function loadSurgeries() {
  const container = document.getElementById('scheduleContainer');
  container.innerHTML = '';
  const surgeries = await fetchSurgeries();
  surgeries.forEach(s => {
    const div = document.createElement('div');
    div.className = 'schedule-item';
    div.innerHTML = `
      <strong>OT:</strong> ${s.otId} <br/>
      <strong>Time:</strong> ${s.time} <br/>
      <strong>Surgeon:</strong> ${s.surgeon} <br/>
      <strong>Materials:</strong> ${s.materials}
    `;
    container.appendChild(div);
  });
}

window.addEventListener('load', () => {
  if (document.getElementById('dashboard').style.display !== 'none') {
    loadSurgeries();
  }
});
