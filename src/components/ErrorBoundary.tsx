import { Component, ErrorInfo, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { failed: boolean };

/**
 * Last line of defence: an uncaught error anywhere in the tree used to unmount
 * the whole app and leave visitors on an empty grey page (this happened when a
 * browser blocked site storage). The fallback deliberately uses no context,
 * translations or theme tokens, so it renders even if those are what broke.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("3DARK: render error", error, info.componentStack);
  }

  render() {
    if (!this.state.failed) return this.props.children;

    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          background: "#f7f7f7",
          color: "#1a1d23",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "32rem" }}>
          <p style={{ letterSpacing: "0.15em", color: "#ae3769", fontWeight: 600, marginBottom: "1rem" }}>3DARK</p>
          <p style={{ marginBottom: "0.5rem" }}>Diese Seite konnte nicht geladen werden. / This page could not be loaded.</p>
          <p>
            <a href="mailto:contact@futurefabrik.com" style={{ color: "#ae3769" }}>contact@futurefabrik.com</a>
            {" · "}
            <a href="/" style={{ color: "#ae3769" }}>www.3dark.de</a>
          </p>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
