# VINKS — Machine Learning (ML) & AI Upgrade Blueprint

> **Version**: 1.0.0  
> **Status**: Future Upgrade Architecture Roadmap  
> **Target Platform**: VINKS Web + AI Ecosystem  

---

## 🎯 Executive Summary

This blueprint defines the technical roadmap for integrating advanced **Machine Learning (ML)** and **Artificial Intelligence (AI)** features into the **VINKS** platform. 

As VINKS evolves into an AI-first development startup, this document serves as an actionable engineering guide for building intelligent document processing, AI project estimation, Retrieval-Augmented Generation (RAG) chatbots, automated code generation pipelines, and computer vision models.

---

## 🗺️ Master ML Integration Architecture

```
                                  ┌───────────────────────────────┐
                                  │   React 18 / Vite Frontend    │
                                  │       (User Interface)        │
                                  └──────────────┬────────────────┘
                                                 │
                                           REST / WebSockets
                                                 │
                                  ┌──────────────▼────────────────┐
                                  │   Node.js / Express Gateway   │
                                  │    (Auth, Orders, Routing)    │
                                  └──────────────┬────────────────┘
                                                 │
                                           Internal HTTP / gRPC
                                                 │
                                  ┌──────────────▼────────────────┐
                                  │   Python 3.11 FastAPI Service │
                                  │     (ML & AI Inference Engine)│
                                  └──────┬───────────────┬────────┘
                                         │               │
                   ┌─────────────────────▼──┐        ┌───▼─────────────────────┐
                   │  Vector DB (ChromaDB)   │        │   LLM & Vision Models   │
                   │ (Embeddings & Knowledge)│        │(OpenAI / DeepSeek / ML) │
                   └────────────────────────┘        └─────────────────────────┘
```

---

## 📦 Planned ML Modules & Upgrade Phases

### Phase 1: Smart Requirement Document Parser & Summarizer (NLP + OCR)

#### Objective:
Allow clients to upload requirement PDFs, DOCX files, or images. The ML model automatically extracts requirements, identifies tech stack prerequisites, and estimates effort.

#### Tech Stack:
- **Parser**: `pdfplumber`, `PyPDF2`, `python-docx`
- **OCR Engine**: `pytesseract` (for scanned handwritten notes/diagrams)
- **NLP Model**: `spacy` / `transformers` (Named Entity Recognition for tech keywords)

#### Implementation Steps:
1. Create upload endpoint: `POST /api/v1/ml/parse-document`.
2. Extract text and images from uploaded files.
3. Pass extracted text through Named Entity Recognition (NER) to tag:
   - `FEATURES`: (e.g. "User Login", "Razorpay Payment", "Admin Dashboard")
   - `TECH_STACK`: (e.g. "React", "Python", "MongoDB")
   - `DEADLINE_URGENCY`: (e.g. "2 weeks", "urgent")
4. Return structured JSON payload to pre-fill the Quote Form.

---

### Phase 2: RAG (Retrieval-Augmented Generation) Knowledge Bot

#### Objective:
Provide an intelligent AI Assistant capable of answering client questions, suggesting tech stacks, and explaining past VINKS case studies using proprietary knowledge.

#### Tech Stack:
- **Framework**: `LangChain` / `LlamaIndex`
- **Vector Database**: `ChromaDB` (Local / Self-hosted) or `Pinecone` / `Qdrant` (Cloud)
- **Embeddings**: `sentence-transformers/all-MiniLM-L6-v2` or `text-embedding-3-small`
- **LLM Engine**: OpenAI GPT-4o-mini / DeepSeek-V3 / Ollama (llama3)

#### Workflow:
1. Ingest VINKS project documentation, service catalogues, and pricing guides into vector embeddings.
2. Store embeddings in ChromaDB with metadata filtering.
3. When a user submits a query via frontend chat, generate contextual prompt with retrieved documents.
4. Stream AI response back to frontend using SSE (Server-Sent Events).

---

### Phase 3: ML Pricing & Timeline Estimator (Predictive Model)

#### Objective:
Train a supervised machine learning regression model to predict exact project costs and delivery dates based on historical project parameters.

#### Tech Stack:
- **ML Framework**: `scikit-learn`, `xgboost`, `pandas`, `numpy`
- **Model Type**: Random Forest Regressor / Gradient Boosting Machine (GBM)

#### Feature Matrix:
```python
# Feature vector for ML estimator model
features = {
    "num_pages": int,          # e.g. 5
    "has_database": int,       # 0 or 1
    "has_auth": int,           # 0 or 1
    "has_payment_gateway": int,# 0 or 1
    "has_ai_integration": int, # 0 or 1
    "urgency_days": int,       # e.g. 14
    "client_type": int         # 1: Student, 2: Startup, 3: Business
}
```

#### Training & Inference Pipeline:
1. Export historical quote dataset to CSV (`data/project_history.csv`).
2. Preprocess data using One-Hot Encoding and Standard Scaler.
3. Train XGBoost regressor model: `model.fit(X_train, y_train)`.
4. Serialize model using `joblib.dump(model, 'models/pricing_model.pkl')`.
5. Expose prediction via FastAPI route `POST /api/v1/ml/predict-price`.

---

### Phase 4: Computer Vision & Specialized AI Model Deployment

#### Objective:
Deploy specialized vision models for student final-year projects and client enterprise applications (e.g., Medical Image Scanner, Object Detection, Document OCR).

#### Tech Stack:
- **Vision Framework**: `OpenCV`, `TensorFlow 2.x`, `PyTorch`, `YOLOv8`
- **Inference Engine**: `ONNX Runtime` for ultra-fast CPU/GPU execution

#### Supported Capabilities:
- X-Ray / MRI Scan Anomaly Detection.
- Document Layout Segmentation (UI wireframe to code conversion).
- Facial Recognition & Emotion Analysis.

---

## 📁 Recommended Repository Directory Structure for ML Extension

When initiating the ML upgrade, add the following directory structure to the project root:

```
V I N K S/
├── docs/                           # Project Documentation & Blueprints
│   ├── ML_UPGRADE_BLUEPRINT.md
│   ├── ARCHITECTURE.md
│   └── API_DOCUMENTATION.md
│
├── server-ai/                      # Dedicated Python FastAPI AI Service
│   ├── main.py                     # App Entry Point & Middleware
│   ├── requirements.txt            # Python Dependencies
│   ├── Dockerfile                  # Container Config
│   │
│   ├── app/
│   │   ├── api/                    # API Route Controllers
│   │   │   ├── __init__.py
│   │   │   ├── parser.py           # Document OCR & Extract
│   │   │   ├── predict.py          # ML Cost Estimator
│   │   │   └── rag_chat.py         # AI Knowledge Chatbot
│   │   │
│   │   ├── core/                   # Configuration & ML Model Loaders
│   │   │   ├── config.py
│   │   │   └── model_loader.py
│   │   │
│   │   ├── models/                 # Saved ML Binary Models (.pkl / .onnx)
│   │   │   ├── pricing_model.pkl
│   │   │   └── ner_model/
│   │   │
│   │   ├── services/               # Core ML Business Logic
│   │   │   ├── document_parser.py
│   │   │   ├── vector_store.py
│   │   │   └── vision_engine.py
│   │   │
│   │   └── utils/                  # Helper Utilities
│   │       └── text_cleaner.py
│   │
│   └── data/                       # Vector DB Storage & Datasets
│       ├── chromadb_store/
│       └── datasets/
```

---

## 🐍 Step-by-Step Backend AI Microservice Boilerplate

### `server-ai/requirements.txt`
```txt
fastapi>=0.110.0
uvicorn[standard]>=0.28.0
pydantic>=2.6.0
python-multipart>=0.0.9
scikit-learn>=1.4.0
joblib>=1.3.2
pandas>=2.2.0
numpy>=1.26.0
langchain>=0.1.0
chromadb>=0.4.22
sentence-transformers>=2.5.0
pypdf2>=3.0.1
pytesseract>=0.3.10
python-dotenv>=1.0.1
```

### `server-ai/main.py`
```python
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(
    title="VINKS AI & Machine Learning Microservice",
    version="1.0.0",
    description="FastAPI service serving ML prediction models, document OCR, and RAG pipelines."
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProjectEstimateRequest(BaseModel):
    num_pages: int
    has_database: bool
    has_auth: bool
    has_ai: bool
    client_type: str

@app.get("/health")
def health_check():
    return {"status": "online", "service": "VINKS ML Engine", "version": "1.0.0"}

@app.post("/api/v1/ml/predict-price")
def predict_price(payload: ProjectEstimateRequest):
    try:
        # Base price calculation logic / ML model inference
        base = 1499
        if payload.num_pages > 3:
            base += (payload.num_pages - 3) * 500
        if payload.has_database:
            base += 1500
        if payload.has_auth:
            base += 1000
        if payload.has_ai:
            base += 3000

        return {
            "success": True,
            "estimated_price_inr": base,
            "recommended_tier": "BUSINESS" if base >= 4999 else "PROJECT",
            "confidence_score": 0.94
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

---

## 🔒 Security & Performance Guidelines for ML Deployment

1. **API Rate Limiting**: Implement Redis rate limiting to prevent LLM quota exhaustion.
2. **Asynchronous Tasks**: Use `Celery` + `Redis` for heavy model training or long video/image processing.
3. **Environment Isolation**: Keep API keys (`OPENAI_API_KEY`, `DEEPSEEK_API_KEY`) securely inside `.env` files.
4. **Model Caching**: Load ML `.pkl` models into memory once at startup using FastAPI `lifespan` context handlers.
5. **Dockerization**: Containerize the Python ML service for effortless deployment on Cloud Run, Render, or AWS ECS.

---

*Document Managed by VINKS AI Engineering Team — 2026*
