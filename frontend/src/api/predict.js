export async function fetchPredictions() {
const WINDOW = 12
const NODES = 207

const dummyInput = [
  Array.from({ length: WINDOW }, () =>
    Array.from({ length: NODES }, (_, i) => {
      const baseSpeed = 30 + Math.random() * 30   // 30–60
      const neighborSpeed = baseSpeed - Math.random() * 10
      return [baseSpeed, neighborSpeed]
    })
  )
]


  const res = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: dummyInput
    })
  })

  if (!res.ok) {
    throw new Error("Prediction service failed")
  }

  const data = await res.json()
  return data.probabilities
}
