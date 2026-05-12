const modules = [
    {
      title: "Module 3<br>Data Conversion and Prep for Ingestion",
      label: "Data - raw conversion and preparation for ingestion",
      questions: [
        {
          q: "What is 'chunking' in the context of preparing documents for a RAG pipeline?",
          opts: ["Compressing documents into smaller file sizes", "Splitting documents into smaller overlapping text segments for indexing", "Encrypting documents before storage", "Converting PDFs to images"],
          ans: 1,
          exp: "Chunking breaks large documents into smaller pieces (e.g. 500 tokens with 50-token overlap) so each chunk fits in the LLM's context window and represents a focused topic."
        },
        {
          q: "Why is chunk overlap important when splitting documents?",
          opts: ["It reduces the total number of vectors stored", "It ensures that information near chunk boundaries isn't lost or split across unrelated chunks", "It speeds up embedding generation", "It is required by the FAISS index format"],
          ans: 1,
          exp: "Without overlap, a sentence straddling two chunk boundaries gets split between them. Overlap (e.g. 50 tokens) ensures that boundary content appears in both chunks, improving retrieval accuracy."
        },
        {
          q: "Which LangChain class is commonly used to split plain text into chunks by character count with overlap?",
          opts: ["RecursiveCharacterTextSplitter", "DocumentLoader", "FAISSTextChunker", "ParagraphSplitter"],
          ans: 0,
          exp: "RecursiveCharacterTextSplitter splits text by trying paragraph, sentence, and character separators in order, creating chunks of a target size with configurable overlap."
        },
        {
          q: "A developer loads a 200-page PDF and creates 1,800 text chunks. Each chunk is then passed to an embedding model. What does the embedding model output for each chunk?",
          opts: ["A compressed version of the text", "A fixed-length numerical vector representing the semantic meaning of that chunk", "A keyword index of the chunk", "A summary of the chunk"],
          ans: 1,
          exp: "Embedding models transform text into dense numeric vectors (e.g. 768 or 1024 dimensions) that encode semantic meaning. Similar meanings produce vectors that are close together in vector space."
        },
        {
          q: "When converting raw source documents (PDFs, Word files, text files) for RAG ingestion, which step comes FIRST?",
          opts: ["Generate embeddings", "Create the FAISS index", "Extract plain text from the source files", "Chunk the text"],
          ans: 2,
          exp: "Before you can chunk or embed, you need clean plain text. Extraction (using libraries like pypdf, docx2txt, etc.) converts binary formats into text that the pipeline can process."
        }
      ]
    }
  ];

export { modules };