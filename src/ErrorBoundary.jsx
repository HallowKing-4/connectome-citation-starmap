import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { err: null };
  }
  static getDerivedStateFromError(err) {
    return { err };
  }
  componentDidCatch(err, info) {
    console.error("Citation star-map failed", err, info);
  }
  render() {
    if (this.state.err) {
      return (
        <div className="err">
          <div>
            <div style={{ color: "#d4b46a", marginBottom: 8 }}>Star-map failed to render</div>
            <div style={{ maxWidth: 520, fontSize: 13 }}>
              {String(this.state.err.message || this.state.err)}
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
