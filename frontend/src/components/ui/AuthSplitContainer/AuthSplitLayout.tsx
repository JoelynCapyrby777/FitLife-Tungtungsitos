import React from "react";
import "./AuthSplitLayout.css";

interface AuthSplitLayoutProps {
  leftContent?: React.ReactNode;
  children: React.ReactNode; 
}

const AuthSplitLayout: React.FC<AuthSplitLayoutProps> = ({ leftContent, children }) => (
  <div className="auth-split-layout">
    <div className="auth-split-layout__left">
      {leftContent}
    </div>
    <div className="auth-split-layout__right">
      {children}
    </div>
  </div>
);

export default AuthSplitLayout;