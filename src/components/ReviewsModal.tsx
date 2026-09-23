import React from 'react';
import { X, Star, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';
import { REVIEWS } from '../data/properties';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeaveReview: () => void;
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({ isOpen, onClose, onLeaveReview }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-neutral-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reviews-modal-title"
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-neutral-200 flex items-center justify-center">
              <span className="font-bold text-lg text-blue-600">G</span>
            </div>
            <div>
              <h3 id="reviews-modal-title" className="text-lg font-bold text-neutral-900 font-serif">
                USA Real Estate Team at LPT Realty
              </h3>
              <p className="text-xs text-neutral-500">
                Verified Google Business Profile Reviews
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200 text-neutral-500 transition-colors cursor-pointer"
            aria-label="Close reviews modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Rating Summary Bar */}
        <div className="p-6 bg-amber-50/60 border-b border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-extrabold text-neutral-900 font-serif">5.0</div>
            <div>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-medium text-neutral-600 mt-1">
                Based on 3 Google reviews · 100% 5-Star Rating
              </p>
            </div>
          </div>

          <button
            onClick={onLeaveReview}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-50 shadow-xs transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Write a Client Review</span>
          </button>
        </div>

        {/* Reviews List */}
        <div className="p-6 space-y-6 max-h-[50vh] overflow-y-auto">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/70 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-900 text-amber-300 font-bold text-sm flex items-center justify-center">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                      {review.author}
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                    </h4>
                    <span className="text-[11px] text-neutral-400 font-medium">
                      Google Reviewer
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-sm text-neutral-700 font-medium italic border-l-2 border-amber-400 pl-3">
                "{review.text}"
              </blockquote>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-neutral-100 text-center text-xs text-neutral-500">
            Official reviews aggregated directly from Google Business Profile. For privacy and authentication guidelines, only verified client submissions are listed.
          </div>
        </div>

        <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
