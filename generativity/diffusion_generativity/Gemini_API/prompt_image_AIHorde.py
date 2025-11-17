# pip install requests

import requests
import time
import base64

API_KEY = "0000000000"    # Anonymous Horde key (low priority)
API_URL = "https://stablehorde.net/api/v2"

prompt = "a watercolor red panda wearing a tiny backpack"

# -----------------------------------------
# 1. Submit an image generation job
# -----------------------------------------
submit_payload = {
    "prompt": prompt,
    "models": ["stable_diffusion"],
    "params": {
        "sampler_name": "k_euler",
        "steps": 25,
        "width": 512,
        "height": 512,
    }
}

headers = {
    "apikey": API_KEY,
    "Client-Agent": "python-example"
}

print("Submitting job to AI Horde…")

submit_response = requests.post(
    f"{API_URL}/generate/async",
    json=submit_payload,
    headers=headers
)

job = submit_response.json()
job_id = job["id"]

print(f"Job submitted. ID: {job_id}")
print()

# -----------------------------------------
# 2. Poll queue position until job finishes
# -----------------------------------------
status_url = f"{API_URL}/generate/status/{job_id}"

while True:
    status = requests.get(status_url).json()

    state = status.get("state")
    queue_position = status.get("queue_position")
    done = status.get("done", False)

    if state == "done" or done:
        print("🟩 Generation complete!")
        break

    print(f"⏳ Waiting… Queue position: {queue_position}")
    time.sleep(2)

# -----------------------------------------
# 3. Fetch and save the generated image
# -----------------------------------------
result = requests.get(status_url).json()

img_b64 = result["generations"][0]["img"]
img_bytes = base64.b64decode(img_b64)

filename = "horde_output.png"
with open(filename, "wb") as f:
    f.write(img_bytes)

print(f"\nSaved image → {filename}")
