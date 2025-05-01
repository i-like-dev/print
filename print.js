document.getElementById('codeInput').addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const code = e.target.value.trim();
    const doc = await db.collection("uploads").doc(code).get();
    if (!doc.exists) return alert("查無資料");

    const files = doc.data().files;
    const list = document.getElementById('fileList');
    list.innerHTML = '';
    files.forEach(file => {
      const div = document.createElement('div');
      div.innerHTML = `
        <p>${file.name}
          <button onclick="openAndPrint('${file.url}')">列印</button>
        </p>
      `;
      list.appendChild(div);
    });
  }
});

function openAndPrint(url) {
  const win = window.open(url, '_blank');
  win.onload = () => win.print();
}