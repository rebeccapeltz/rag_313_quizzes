const modules = [
    {
      title: "Module 5<br>RAG Chain Code Walkthrough",
      label: "Code walkthrough & demo",

      questions: [
        {
          q: "In a LangChain RAG chain, what does RunnablePassthrough accomplish?",
          opts: ["It skips the retrieval step", "It passes the original user question through the chain unchanged so it can be used alongside retrieved context", "It caches the LLM response", "It formats the final output as plain text"],
          ans: 1,
          exp: "RunnablePassthrough forwards the input (the user's question) to the next stage without modification. In a RAG chain this ensures the question reaches the prompt template alongside the retrieved docs."
        },
        {
          q: "What is a CrossEncoder reranker and why is it added after initial FAISS retrieval?",
          opts: ["It re-embeds all documents in the index for improved accuracy", "It takes the top-k retrieved chunks and the original query together and re-scores them for relevance — more accurate than vector similarity alone", "It filters out duplicate chunks from the FAISS results", "It compresses chunks before sending them to the LLM"],
          ans: 1,
          exp: "Bi-encoder (FAISS) retrieval is fast but approximate. A CrossEncoder re-scores each candidate chunk by looking at the query and chunk together, significantly improving result relevance at the cost of a bit more compute."
        },
        {
          q: "In the app.py code, what is the purpose of the score_threshold parameter when calling FAISS as a retriever?",
          opts: ["It sets the maximum number of results returned", "It filters out document chunks whose similarity score falls below the threshold — only sufficiently relevant chunks pass to the LLM", "It controls the LLM's temperature", "It limits the number of tokens per chunk"],
          ans: 1,
          exp: "score_threshold sets a minimum relevance bar. Chunks below the threshold are discarded even if they're the top results, preventing the LLM from being fed loosely-related or irrelevant context."
        },
        {
          q: "Looking at a LangChain LCEL chain like: chain = {'context': retriever, 'question': RunnablePassthrough()} | prompt | llm | StrOutputParser(). What does StrOutputParser do at the end?",
          opts: ["It splits the LLM output into structured JSON", "It converts the LLM's raw message object into a plain Python string", "It filters profanity from the answer", "It sends the response back to the vector store"],
          ans: 1,
          exp: "LangChain LLMs return message objects (AIMessage), not raw strings. StrOutputParser extracts the .content string from the message, making it easy to display or process downstream."
        },
        {
          q: "Why does the RAG app set the LLM's base_url to the Docker Model Runner endpoint rather than using the real OpenAI API URL?",
          opts: ["The OpenAI SDK only works with local URLs", "Docker Model Runner exposes an OpenAI-compatible API, so pointing base_url at it redirects calls to the local model without changing any other code", "It is required by LangChain's ChatOpenAI class", "To enable streaming responses"],
          ans: 1,
          exp: "Docker Model Runner intentionally mimics the OpenAI REST API format. By changing only base_url and api_key='ollama' (or similar placeholder), the exact same ChatOpenAI calls go to local models instead of OpenAI's servers."
        }
      ]
    },
  ]

export { modules }
