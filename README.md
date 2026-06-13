# WalkWithJesus

WalkWithJesus is a Christian AI assistant that combines Retrieval-Augmented Generation (RAG), semantic search, and Large Language Models to provide scripture-grounded guidance and encouragement.

The application retrieves relevant biblical passages using vector similarity search and uses those passages as context for generating responses. Every answer is grounded in retrieved scripture and includes source attribution to maintain transparency and reduce hallucinations.

## Features

### Implemented

* Semantic scripture retrieval using vector embeddings
* Retrieval-Augmented Generation (RAG)
* OpenAI embeddings integration
* Local vector search with FAISS
* Metadata filtering
* Similarity score retrieval
* Context-aware prompt construction
* Streaming AI responses
* Conversation memory
* Source attribution and scripture references
* FastAPI backend
* Next.js frontend
* Responsive chat interface
* Real-time conversational experience

## Architecture

```text
User
  ↓
Next.js Frontend
  ↓
FastAPI Backend
  ↓
Conversation Memory
  ↓
Retriever
  ↓
FAISS Vector Store
  ↓
Relevant Scriptures
  ↓
Prompt Construction
  ↓
OpenAI LLM
  ↓
Grounded Response
```

## Retrieval Pipeline

1. User submits a question.
2. Query is converted into an embedding.
3. FAISS performs similarity search.
4. Relevant scripture passages are retrieved.
5. Retrieved context is injected into the prompt.
6. The LLM generates a grounded response.
7. Sources are returned to the frontend.

## Example Query

**User**

> I feel anxious about my future.

**Retrieved Context**

* Philippians 4:6–7
* Isaiah 41:10

**Response**

The assistant provides scripture-based encouragement while citing the passages used to generate the answer.

## Key Engineering Concepts

This project demonstrates:

* Retrieval-Augmented Generation (RAG)
* Semantic search
* Embeddings
* Vector databases
* Prompt engineering
* Context engineering
* Conversational AI
* AI application architecture
* Full-stack AI development

## Lessons Learned

During development, the project explored:

* Retrieval quality optimization
* Semantic representation design
* Metadata filtering strategies
* Vector search systems
* OpenAI embedding workflows
* Prompt construction techniques
* AI system orchestration
* Infrastructure troubleshooting and debugging

```
```
