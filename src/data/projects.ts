// Add / remove / reorder your projects here.
// Each object = one card in the "Work" carousel.
// The order in this array is the order they appear in the carousel.

export interface Project {
  title: string;       // Project name
  category: string;    // One-line description of what it is
  tools: string;        // Tech stack / features, comma separated
  image: string;        // Path relative to /public, e.g. "/images/myproject.png"
  link: string;         // Live URL (or GitHub repo link) for the project
}

export const projects: Project[] = [
  {
    title: "University RAG Chatbot",
    category: "Retrieval-Augmented Generation Chatbot",
    tools: "LangChain, Hugging Face, Vector Database, Gradio",
    image: "/images/placeholder.webp",
    link: "https://github.com/asadmobashshir/university-rag-chatbot",
  },
  {
    title: "Finance Tracker",
    category: "Personal Finance Management System",
    tools: "Python, Plotly, Matplotlib, Data Visualization",
    image: "/images/placeholder.webp",
    link: "https://github.com/asadmobashshir/finance-tracker",
  },
  {
    title: "ANN Regression Model",
    category: "Deep Learning Regression Predictor",
    tools: "TensorFlow, Deep Learning, ReLU, Adam Optimizer",
    image: "/images/placeholder.webp",
    link: "https://github.com/asadmobashshir/Artificial-Neural-Network-Regression-",
  },
  {
    title: "Placement Prediction",
    category: "ML Model for Campus Placement Outcomes",
    tools: "Python, Machine Learning",
    image: "/images/placeholder.webp",
    link: "https://github.com/asadmobashshir/Placement-Prediction",
  },

  // 👇 Copy the block below, fill in your details, and it shows up automatically.
  // {
  //   title: "My New Project",
  //   category: "One-line description",
  //   tools: "Tech A, Tech B, Tech C",
  //   image: "/images/my-new-project.png",
  //   link: "https://myproject.com",
  // },
];
