const modules = [
    {
      title: "Module 4<br>Data Ingestion and Index Creation",
      label: "Data - Ingestion and Index Creation",
      questions: [
        {
          q: "What type of data structure does FAISS use to enable fast similarity search?",
          opts: ["A relational B-tree index", "A hash table of keywords", "A vector index that stores and searches dense numerical embeddings", "A full-text inverted index like Elasticsearch"],
          ans: 2,
          exp: "FAISS (Facebook AI Similarity Search) is a library specifically designed to index and search large collections of dense vectors using algorithms like flat L2, IVF, and HNSW."
        },
        {
          q: "In LangChain, which method is used to create a FAISS vector store from a list of document chunks?",
          opts: ["FAISS.load_local()", "FAISS.from_documents()", "FAISS.create_index()", "VectorStore.build()"],
          ans: 1,
          exp: "FAISS.from_documents(chunks, embedding_model) takes your text chunks, runs each through the embedding model, and builds and returns a searchable FAISS index in one step."
        },
        {
          q: "After building a FAISS index, a developer saves it to disk. What is the PRIMARY reason for persisting the index?",
          opts: ["FAISS indices must be saved before they can be searched", "Embedding 1,800 chunks takes significant time — saving the index avoids re-embedding every time the app restarts", "The index file is required by Docker Model Runner", "Saving compresses the vectors to save memory"],
          ans: 1,
          exp: "Embedding generation is computationally expensive. Saving the FAISS index (index.faiss + index.pkl) means you only embed documents once; subsequent runs load the pre-built index instantly."
        },
        {
          q: "What does allow_dangerous_deserialization=True do when loading a FAISS index in LangChain, and why is it required?",
          opts: ["It enables GPU acceleration for the index", "It bypasses a safety check on pickle-based index files — needed because LangChain uses pickle format which can execute arbitrary code", "It increases retrieval result count", "It allows the index to accept non-UTF-8 text"],
          ans: 1,
          exp: "FAISS indexes are saved using Python's pickle format. LangChain warns that pickle files can contain arbitrary code, so it requires explicit opt-in with allow_dangerous_deserialization=True when loading from trusted sources."
        },
        {
          q: "A developer rebuilds the FAISS index but forgets to use the same embedding model that was used to create it. What will happen at query time?",
          opts: ["The index will rebuild automatically using the correct model", "Queries will return random results because query vectors and index vectors occupy incompatible vector spaces", "The application will refuse to start", "Results will be slightly less accurate but still correct"],
          ans: 1,
          exp: "Embeddings are model-specific. If the index was built with model A and queries are embedded with model B, the vector dimensions or learned space won't match — results will be meaningless or cause errors."
        }
      ]
    },
  ]
export { modules }