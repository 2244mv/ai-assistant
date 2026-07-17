import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.error("Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen items-center justify-center bg-[#f7f7f8] p-6 text-center text-gray-900 dark:bg-[#0B0D10] dark:text-white">
          <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-[#252B35] dark:bg-[#11151B]">
            <h1 className="text-3xl font-bold text-[#8B5CF6] drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
              Something went wrong
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Please refresh the page
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-xl bg-[#8B5CF6] px-5 py-2 text-white transition hover:bg-[#7C3AED] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
