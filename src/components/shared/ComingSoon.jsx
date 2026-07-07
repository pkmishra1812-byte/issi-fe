// src/components/shared/ComingSoon.jsx
import { Link } from "react-router-dom";

export default function ComingSoon({ pageName }) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="text-6xl mb-6">🍵</div>
      <h2 className="font-display text-3xl text-charcoal mb-3">{pageName}</h2>
      <p className="font-body text-charcoal/50 text-base max-w-sm mb-8">
        This page is being steeped to perfection. Check back soon!
      </p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}
