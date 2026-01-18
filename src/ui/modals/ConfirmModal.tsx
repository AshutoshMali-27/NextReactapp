// src/ui/modals/ConfirmModal.tsx
"use client";

interface ConfirmModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
}

export default function ConfirmModal({
  title,
  message,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <div className="modal fade show d-block" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
          </div>

          <div className="modal-body">
            <p>{message}</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-danger" onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
