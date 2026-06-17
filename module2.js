const modules = [
    {
      title: "Module 2<br>Data Conversion and Prep for Ingestion",
      label: "Data - raw conversion and preparation for ingestion",
      questions: [
        {
          q: "Why can't a PDF file be fed directly into a FAISS vector index without any preprocessing?",
          opts: ["FAISS only accepts files smaller than 1MB", "PDFs are binary files — FAISS needs plain text or numerical vectors, not raw binary document formats", "PDFs must be converted to images before indexing", "FAISS requires JSON-formatted input"],
          ans: 1,
          exp: "FAISS indexes dense numerical vectors. A PDF is a binary format containing encoded fonts, layout, and metadata. It must first be converted to plain text before it can be chunked and embedded for the index."
        },
        {
          q: "In convert.py, the script uses docling's DocumentConverter rather than a simple text extractor. What advantage does docling provide over basic text extraction?",
          opts: ["It converts PDFs faster than any other library", "It understands document structure — preserving headings, tables, and lists — rather than dumping raw characters", "It automatically translates documents to English", "It splits documents into chunks during conversion"],
          ans: 1,
          exp: "Basic extractors pull raw characters in reading order, losing structure. docling performs layout analysis to identify headings, tables, and paragraphs, preserving that structure in the Markdown output — which helps downstream chunking produce better results."
        },
        {
          q: "The convert.py script saves output files as .md (Markdown) rather than .txt. Why is Markdown a better intermediate format for a RAG pipeline?",
          opts: ["Markdown files are smaller than plain text files", "Markdown encodes document structure (headings, lists, tables) that text splitters can use as natural split points during ingestion", "FAISS can only ingest Markdown files", "Markdown prevents special characters from causing errors"],
          ans: 1,
          exp: "Markdown preserves structural cues like ## headings and - list items. Text splitters can use these as meaningful boundaries when chunking, resulting in more coherent chunks than splitting a wall of unstructured plain text."
        },
        {
          q: "The script uses raw_dir.glob('*.pdf') to find source files. On a Linux server, a colleague uploads a file named Report.PDF (uppercase extension). What happens?",
          opts: ["glob('*.pdf') matches it automatically since PDF extensions are case-insensitive", "The file is skipped — Linux filesystems are case-sensitive and *.pdf does not match .PDF", "Python raises a FileNotFoundError for the whole directory", "docling detects and converts it anyway"],
          ans: 1,
          exp: "Linux filesystems are case-sensitive by default. glob('*.pdf') only matches lowercase .pdf extensions. Files uploaded from Windows or macOS with uppercase .PDF extensions will be silently skipped unless the glob pattern accounts for both cases."
        },
        {
          q: "The convert.py script writes output files with encoding='utf-8'. What problem does this prevent later in the RAG pipeline?",
          opts: ["It prevents the output files from being too large", "It ensures special characters — accented letters, smart quotes, symbols — are preserved correctly instead of becoming garbled text in the index", "UTF-8 encoding is required by the docling library", "It compresses the Markdown output for faster loading"],
          ans: 1,
          exp: "Source documents often contain non-ASCII characters like accented letters (é, ü), em-dashes, or smart quotes. Without explicit UTF-8 encoding, Python may use a system default that corrupts these characters, introducing noise into the vector index."
        }
      ]
    }
  ];

export { modules };