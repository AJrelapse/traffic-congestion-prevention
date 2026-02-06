export async function uploadCsvAndPredict(file) {
  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch("https://traffic-congestion-prevention.onrender.com/predict-csv", {
    method: "POST",
    body: formData
  })

  if (!res.ok) {
    throw new Error("Prediction service failed")
  }

  return res.json()
}
