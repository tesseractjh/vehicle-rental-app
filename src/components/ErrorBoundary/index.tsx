import React from 'react';
import ErrorBoundaryFallback from './ErrorBoundaryFallback';

type Props = {
  fallback?: React.ReactNode;
  refresh?: () => void | Promise<void>;
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  refresh() {
    if (this.props.refresh) {
      this.props.refresh();
    }
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return <ErrorBoundaryFallback refresh={() => this.refresh()} />;
    }
    return this.props.children;
  }
}
