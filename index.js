document.getElementById('uploadBtn').addEventListener('click', async () => {
  const files = document.getElementById('fileInput').files;
  if (!files.length) return alert("請選擇檔案");

  const code = Math.random().toString(36).substring(2, 8);
  const uploaded = [];

  for (const file of files) {
    const ref = storage.ref(`${code}/${file.name}`);
    await ref.put(file);
    const url = await ref.getDownloadURL();
    uploaded.push({ name: file.name, url });
  }

  await db.collection("uploads").doc(code).set({ files: uploaded });

  document.getElementById('result').style.display = 'block';
  document.getElementById('codeText').innerText = code;
  QRCode.toCanvas(document.getElementById('qrCanvas'), code);
});