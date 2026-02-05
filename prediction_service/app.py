from fastapi import FastAPI
import torch
from model import TrafficGRU

app = FastAPI(title="Traffic Congestion Prediction Service")

model = TrafficGRU()
model.load_state_dict(
    torch.load("traffic_gru_final.pt", map_location="cpu")
)
model.eval()

@app.post("/predict")
def predict(payload: dict):
    """
    Expected payload:
    {
        "input": [[[...]]]  # shape: (1, window, nodes, 2)
    }
    """
    x = torch.tensor(payload["input"], dtype=torch.float32)

    with torch.no_grad():
        probs = model(x).tolist()

    return {
        "probabilities": probs[0]
    }
