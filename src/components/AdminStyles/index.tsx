'use client'
import { useEffect } from 'react'

export default function AdminStyles() {
  useEffect(() => {
    // Inject custom CSS for admin styling
    const style = document.createElement('style')
    style.textContent = `
      /* Custom Payload Admin Styles */
      .dashboard__recent-activities {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .dashboard__recent-activities h3 {
        color: #184504;
        font-weight: 600;
        margin-bottom: 16px;
      }

      .dashboard__card {
        background: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        border: 1px solid #e9ecef;
        margin-bottom: 20px;
      }

      .dashboard__card h3 {
        color: #184504;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
        border-bottom: 2px solid #FFCB05;
        padding-bottom: 8px;
      }

      .dashboard__stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
      }

      .dashboard__stat-card {
        background: linear-gradient(135deg, #184504 0%, #2d5f3f 100%);
        color: white;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
      }

      .dashboard__stat-number {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .dashboard__stat-label {
        font-size: 14px;
        opacity: 0.9;
      }

      .activity-item {
        padding: 12px 0;
        border-bottom: 1px solid #e9ecef;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .activity-item:last-child {
        border-bottom: none;
      }

      .activity-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #184504;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
      }

      .activity-content {
        flex: 1;
      }

      .activity-title {
        font-weight: 500;
        color: #2d4a1f;
        margin-bottom: 4px;
      }

      .activity-meta {
        font-size: 12px;
        color: #6c757d;
      }

      /* Override Payload default styles */
      .nav {
        background: #184504 !important;
      }

      .nav__link {
        color: rgba(255, 255, 255, 0.8) !important;
      }

      .nav__link:hover,
      .nav__link--active {
        color: #FFCB05 !important;
        background: rgba(255, 203, 5, 0.1) !important;
      }

      .btn--style-primary {
        background: #184504 !important;
        border-color: #184504 !important;
      }

      .btn--style-primary:hover {
        background: #2d5f3f !important;
        border-color: #2d5f3f !important;
      }

      /* Enhanced Activity Table Styles */
      .activity-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding: 0 4px;
      }

      .activity-controls {
        display: flex;
        gap: 10px;
      }

      .btn-mark-read {
        background: #184504;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.2s;
        box-shadow: 0 2px 4px rgba(24, 69, 4, 0.2);
      }

      .btn-mark-read:hover {
        background: #2d5f3f;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(24, 69, 4, 0.3);
      }

      .activity-table {
        width: 100%;
        border: 1px solid #e9ecef;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        background: white;
      }

      .activity-table-header {
        display: grid;
        grid-template-columns: 60px 140px 1fr 180px 120px;
        background: linear-gradient(135deg, #184504 0%, #2d5f3f 100%);
        padding: 16px 12px;
        font-weight: 600;
        color: white;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .activity-table-body {
        max-height: 500px;
        overflow-y: auto;
      }

      .activity-row {
        display: grid !important;
        grid-template-columns: 60px 140px 1fr 180px 120px !important;
        padding: 16px 12px !important;
        border-bottom: 1px solid #f0f0f0 !important;
        transition: all 0.2s;
        align-items: center !important;
        min-height: 70px;
        width: 100%;
      }

      .activity-row > * {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .activity-row:hover {
        background-color: #f8f9fa;
        transform: translateX(2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      .activity-row.unread {
        background-color: #fff8e1;
        border-left: 4px solid #FFCB05;
        font-weight: 500;
      }

      .activity-row.read {
        opacity: 0.8;
        background-color: #f9f9f9;
      }

      .activity-checkbox {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        flex-direction: row !important;
      }

      .activity-checkbox-input {
        width: 18px;
        height: 18px;
        cursor: pointer;
        accent-color: #184504;
        transform: scale(1.2);
      }

      .activity-type {
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        flex-direction: row !important;
      }

      .activity-icon-badge {
        width: 32px !important;
        height: 32px !important;
        border-radius: 8px;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 14px;
        color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        flex-shrink: 0;
      }

      .activity-type-text {
        font-size: 13px;
        text-transform: capitalize;
        color: #495057;
        font-weight: 500;
        white-space: nowrap;
      }

      .activity-message {
        padding-right: 16px !important;
        display: block !important;
      }

      .activity-title {
        font-weight: 600;
        color: #2d4a1f;
        margin-bottom: 6px;
        line-height: 1.4;
        font-size: 14px;
        display: block !important;
      }

      .activity-details {
        font-size: 12px;
        color: #6c757d;
        line-height: 1.4;
        margin-top: 4px;
        display: block !important;
      }

      .activity-date {
        font-size: 12px !important;
        color: #6c757d !important;
        font-weight: 500;
        white-space: nowrap !important;
        display: block !important;
      }

      .activity-status {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
      }

      .status-badge {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .status-badge.read {
        background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
        color: #155724;
        border: 1px solid #c3e6cb;
      }

      .status-badge.unread {
        background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
        color: #856404;
        border: 1px solid #ffeaa7;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(255, 203, 5, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(255, 203, 5, 0); }
        100% { box-shadow: 0 0 0 0 rgba(255, 203, 5, 0); }
      }

      .activity-loading,
      .activity-empty {
        text-align: center;
        padding: 40px;
        color: #6c757d;
      }

      .loading-spinner {
        width: 24px;
        height: 24px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #184504;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 16px;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .activity-pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border-top: 1px solid #e9ecef;
        background: #f8f9fa;
      }

      .pagination-btn {
        background: #184504;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.2s;
      }

      .pagination-btn:hover:not(:disabled) {
        background: #2d5f3f;
      }

      .pagination-btn:disabled {
        background: #6c757d;
        cursor: not-allowed;
      }

      .pagination-info {
        font-size: 14px;
        color: #6c757d;
      }

      /* Full width dashboard */
      .dashboard-custom {
        width: 100% !important;
        max-width: none !important;
      }

      .dashboard__card {
        width: 100% !important;
      }

      /* Hide default Payload Recent Activity section - more aggressive approach */
      .dashboard > div:nth-child(1) {
        display: none !important;
      }

      /* Target the specific Recent Activity section by structure */
      .dashboard > div > h2,
      .dashboard > div > h3 {
        display: none !important;
      }

      .dashboard > div > div > div {
        display: none !important;
      }

      /* Show our custom dashboard */
      .dashboard-custom {
        display: block !important;
        visibility: visible !important;
        position: relative !important;
        z-index: 1000 !important;
      }

      /* Ensure our custom dashboard appears first */
      .dashboard .dashboard-custom {
        order: -1 !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}
