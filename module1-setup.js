const modules = [
    {
      title: "Module 1<br>Code Setup",
      label: "Setup — Python 3.13 constraints",
      questions: [
        {
          q: "Why is creating a Python virtual environment strongly recommended before installing RAG dependencies?",
          opts: ["It makes Python run faster", "It isolates project packages from system Python, preventing version conflicts", "It is required by Docker Model Runner", "It automatically installs FAISS"],
          ans: 1,
          exp: "Virtual environments keep your project's packages self-contained. Without one, installing conflicting versions of libraries across projects can break your system Python installation."
        },
        {
          q: "Which command creates and activates a virtual environment named .venv on macOS/Linux?",
          opts: ["pip install venv && venv activate", "python -m venv .venv  then  source .venv/bin/activate", "virtualenv create .venv  then  .venv start", "conda create --name .venv"],
          ans: 1,
          exp: "python -m venv .venv creates the environment; source .venv/bin/activate switches your shell into it. On Windows the activate path is .venv\\Scripts\\activate."
        },
        {
          q: "On an Apple Silicon Mac (M1/M2/M3), the environment variable KMP_DUPLICATE_LIB_OK=TRUE is sometimes needed. What issue does this address?",
          opts: ["It enables GPU acceleration for FAISS", "It suppresses a duplicate OpenMP library conflict that can crash certain numpy/FAISS operations on ARM", "It increases the Python stack size", "It tells Docker to use the ARM image layer"],
          ans: 1,
          exp: "Apple Silicon Macs can load multiple copies of the OpenMP runtime, causing a fatal error. Setting KMP_DUPLICATE_LIB_OK=TRUE suppresses that crash — it's a workaround, not a fix."
        },
        {
          q: "Which file is the standard way to declare Python package dependencies so the project is reproducible on another machine?",
          opts: ["packages.json", "setup.cfg", "requirements.txt", "dependencies.py"],
          ans: 2,
          exp: "requirements.txt lists package names and optional version pins (e.g. faiss-cpu>=1.9.0). Running pip install -r requirements.txt on another machine installs all listed packages."
        },
        {
          q: "After activating a virtual environment, a developer runs pip install langchain-community but gets a permissions error. What is the most likely cause?",
          opts: ["The package doesn't exist on PyPI", "The virtual environment was not properly activated — pip is pointing at the system Python", "FAISS must be installed first", "Python 3.13 doesn't support LangChain"],
          ans: 1,
          exp: "If the venv isn't activated, pip installs into the system Python path, which often requires elevated permissions. Activating the venv first ensures packages install into the local .venv folder."
        }
      ]
    }
  ]
export { modules };