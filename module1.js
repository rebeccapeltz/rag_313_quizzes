// module1.js
export const  modules = [
    {
      title: "Module 1<br>Introduction to RAG",
      label: "What is RAG, how to set it up locally and why it matters",
      questions: [
        {
          q: "What core problem does Retrieval-Augmented Generation (RAG) solve that a standard LLM cannot?",
          opts: ["It makes LLMs run faster on consumer hardware", "It allows LLMs to reason about private or up-to-date data without retraining the model", "It replaces the need for a vector database entirely", "It eliminates hallucinations completely"],
          ans: 1,
          exp: "LLMs have a fixed training cutoff and no access to private data. RAG solves this by retrieving relevant context at query time and injecting it into the prompt."
        },
        {
          q: "In a RAG pipeline, what is the role of the 'retriever' component?",
          opts: ["It generates the final answer using a language model", "It finds and returns the most relevant document chunks for a given query", "It converts raw documents into plain text", "It scores and ranks the LLM's output for accuracy"],
          ans: 1,
          exp: "The retriever searches a vector index (like FAISS) for document chunks that are semantically closest to the user's query, passing them as context to the LLM."
        },
        {
          q: "Which of the following best describes why RAG is often preferred over fine-tuning for incorporating new information?",
          opts: ["Fine-tuning is always more expensive than RAG", "RAG updates are faster — you add documents to the index rather than retraining model weights", "Fine-tuned models cannot answer questions", "RAG produces longer answers than fine-tuned models"],
          ans: 1,
          exp: "Fine-tuning requires significant compute and time to update model weights. With RAG, you simply add or update documents in the vector store — no retraining needed."
        },
        {
          q: "What does 'grounding' mean in the context of RAG?",
          opts: ["Connecting the model to the internet", "Ensuring the LLM's answer is based on retrieved source documents rather than memorized training data", "Reducing the model's token usage", "Encrypting the documents in the vector store"],
          ans: 1,
          exp: "Grounding means anchoring the LLM's response to specific retrieved passages, reducing hallucination by giving the model concrete evidence to reason from."
        },
        {
          q: "A company has a large internal HR policy document updated monthly. Which approach is most practical for keeping an AI assistant current with policy changes?",
          opts: ["Retrain the LLM every month with the new document", "Fine-tune the model on each new policy version", "Update the vector index with the new document chunks — no model changes needed", "Ask employees to paste policy text into every prompt"],
          ans: 2,
          exp: "RAG shines here: re-ingest the updated document, rebuild or update the FAISS index, and the assistant immediately has access to current policy — no model retraining required."
        }
      ]
    }
  ];
