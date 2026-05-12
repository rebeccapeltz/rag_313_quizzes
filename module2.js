const modules = [
    {
      title: "Module 2<br>Docker Model Runner",
      label: "Docker Model Runner & demo",
      questions: [
        {
          q: "What is Docker Model Runner's primary role in a local RAG application?",
          opts: ["It manages the FAISS vector index files", "It hosts and serves AI models (embedding and chat) locally via an API endpoint — no cloud required", "It orchestrates the LangChain pipeline", "It converts documents to text chunks"],
          ans: 1,
          exp: "Docker Model Runner runs AI models in containers and exposes them on a local endpoint (e.g. localhost:12434). This lets your Python app call them using the OpenAI SDK format without any cloud API keys."
        },
        {
          q: "What is the OpenAI-compatible base URL you would configure your Python code to use when calling a model hosted in Docker Model Runner?",
          opts: ["https://api.openai.com/v1", "http://localhost:12434/engines/llama.cpp/v1", "http://127.0.0.1:8080/model", "http://docker-hub.internal/v1"],
          ans: 1,
          exp: "Docker Model Runner exposes models at http://localhost:12434/engines/llama.cpp/v1 by default. Because it's OpenAI-compatible, you just point the base_url there and your existing SDK calls work unchanged."
        },
        {
          q: "Which Docker CLI command pulls the llama3.2 model to be used with Docker Model Runner?",
          opts: ["docker pull llama3.2", "docker model pull ai/llama3.2", "docker run ai/llama3.2", "docker compose up llama3.2"],
          ans: 1,
          exp: "docker model pull ai/llama3.2 downloads the model image from Docker Hub into Model Runner's local model store, making it available to serve."
        },
        {
          q: "In the RAG app, TWO separate models are run in Docker Model Runner. What are their respective roles?",
          opts: ["One for chunking documents, one for storing the index", "One embedding model (e.g. ai/embeddinggemma) to convert text to vectors, one chat model (e.g. ai/llama3.2) to generate answers", "One for retrieval, one for reranking", "One for English, one for other languages"],
          ans: 1,
          exp: "The embedding model converts query text and document chunks into vectors for similarity search. The chat model (LLM) receives the retrieved context and the user's question and generates the final answer."
        },
        {
          q: "What key privacy advantage does running both models in Docker Model Runner provide over using cloud APIs?",
          opts: ["It makes the models faster", "Your documents and queries never leave your local machine — no data is sent to external servers", "The models are more accurate locally", "Docker Model Runner supports more model types than cloud APIs"],
          ans: 1,
          exp: "With Docker Model Runner, all inference happens on your own hardware. Sensitive documents (HR policies, patient data, proprietary IP) stay entirely within your network or machine — a critical advantage for regulated industries."
        }
      ]
    }
  ]

export { modules };