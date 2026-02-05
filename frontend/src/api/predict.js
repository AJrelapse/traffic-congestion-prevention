export async function uploadCsvAndPredict(file) {
  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch("http://127.0.0.1:8000/predict-csv", {
    method: "POST",
    body: formData
  })

  if (!res.ok) {
    throw new Error("Prediction service failed")
  }

  return res.json()
}
