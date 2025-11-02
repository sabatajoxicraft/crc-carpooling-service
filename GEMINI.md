# Gemini AI Agent Documentation Summary for CRC Carpooling Service

This document provides a summary and quick reference to the core documentation guiding the development of the CRC Carpooling Service, based on the Agentic SDLC Framework.

## 1. Overview of the Agentic SDLC Framework

The Agentic SDLC Framework is a structured approach to software development that integrates AI agents as active participants in the development process. It aims to enhance efficiency, ensure quality, and provide clear governance for AI-powered projects. For the CRC Carpooling Service, this framework helps in managing requirements, architectural design, development processes, and ethical considerations.

## 2. Key Documentation References

Below is a summary of each foundational document, along with a direct reference:

### 2.1. [00_custom_instructions.md](docs/00_custom_instructions.md)
*   **Summary:** This document defines the custom instructions for the AI agent. It establishes the agent's persona as a senior software engineer and outlines core directives for its operation, including conciseness, adherence to coding style, security prioritization, proactivity, and teamwork. It also provides a guide on how to use the other documents in the Agentic SDLC Framework.

### 2.2. [01_introduction.md](docs/01_introduction.md)
*   **Summary:** This document introduces the CRC Carpooling Service project. It outlines the project's purpose to facilitate carpooling for church members and details key features such as ride offering/requesting, flexible payment options, real-time communication, and administrative oversight. It also confirms the project will be developed using the Agentic SDLC Framework.

### 2.3. [02_prd_for_ai_projects.md](docs/02_prd_for_ai_projects.md)
*   **Summary:** This is the Product Requirements Document (PRD) for the CRC Carpooling Service. It provides a comprehensive guide to the product, detailing its purpose, business goals, user needs, core features, and non-functional requirements. It serves as the foundational document for the development team.

### 2.4. [03_tad_for_ai_systems.md](docs/03_tad_for_ai_systems.md)
*   **Summary:** This is the Technical Architecture Document (TAD) for the CRC Carpooling Service. It details the system's architecture, including a client-server model with a React frontend, a Node.js/Express.js backend, and a PostgreSQL database. It also covers data management, deployment strategy using Docker, security measures, and scalability considerations.

### 2.5. [04_mbd_for_ai_agents.md](docs/04_mbd_for_ai_agents.md)
*   **Summary:** This document outlines the Milestone-Based Development (MBD) process for the project. It explains the key concepts of MBD, its benefits, and provides a detailed 10-step milestone plan for the development of the CRC Carpooling Service, from project kickoff to post-launch support.

### 2.6. [05_aep_for_llms.md](docs/05_aep_for_llms.md)
*   **Summary:** This is the Agent Execution Policy (AEP) for LLM agents. It establishes the rules and guidelines for AI agent behavior, covering core principles like fairness and transparency, operational guidelines for task execution and tool usage, data handling protocols, human oversight procedures, and security measures.

### 2.7. [06_pcs_for_ai_projects.md](docs/06_pcs_for_ai_projects.md)
*   **Summary:** This document provides a Project Categorization Strategy (PCS) for the CRC Carpooling Service. It classifies the project by AI technique, application area, lifecycle stage, and technical requirements. This strategy helps in resource allocation, risk management, and stakeholder communication.

### 2.8. [07_persistent_memory_for_ai_agents.md](docs/07_persistent_memory_for_ai_agents.md)
*   **Summary:** This document explains the concept of persistent memory for AI agents on this project. It highlights the importance of memory for learning and context awareness and details the implementation through a `project_memory.md` file and version control. It also outlines the kind of information to be stored in the memory file.