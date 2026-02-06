export async function uploadCsvAndPredict(file) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 60000)

  const formData = new FormData()
  formData.append("file", file)

  try {
    const res = await fetch(
      "https://traffic-congestion-prevention.onrender.com/predict-csv",
      {
        method: "POST",
        body: formData,
        signal: controller.signal
      }
    )

    if (!res.ok) {
      throw new Error("Prediction service failed")
    }

    return await res.json()
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error(
        "Prediction service is waking up (free tier). Please try again in 30 seconds."
      )
    }
    throw err
  } finally {
    clearTimeout(timeoutId)
  }
}
