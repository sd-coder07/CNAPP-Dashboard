import { X } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../store/dashboardSlice'

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }))
  }

  const renderContent = () => {
    if (widget.type === 'chart') {
      return (
        <div className="widget-chart">
          {widget.id === 'cloud-accounts' && (
            <div className="flex items-center w-full">
              {/* Circular Chart */}
              <div className="relative flex-shrink-0">
                <svg width="120" height="120" viewBox="0 0 120 120" className="circular-chart">
                  {/* Background circle */}
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="#e5e7eb" 
                    strokeWidth="20"
                  />
                  {/* Connected (50%) - Blue */}
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="20"
                    strokeDasharray="125.66 125.66"
                    strokeDashoffset="62.83"
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">2</div>
                    <div className="text-xs text-gray-500">Total</div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="ml-8 flex-1">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Connected (2)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Not Connected (2)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {widget.id === 'cloud-account-risk' && (
            <div className="flex items-center w-full">
              {/* Circular Chart */}
              <div className="relative flex-shrink-0">
                <svg width="120" height="120" viewBox="0 0 120 120" className="circular-chart">
                  {/* Background circle */}
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="#f3f4f6" 
                    strokeWidth="20"
                  />
                  {/* Passed - Green (75.1%) */}
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="#22c55e" 
                    strokeWidth="20"
                    strokeDasharray="188.5 62.83"
                    strokeDashoffset="0"
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                  {/* Failed - Red (17.5%) */}
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="20"
                    strokeDasharray="43.98 207.35"
                    strokeDashoffset="-188.5"
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                  {/* Warning - Yellow (7%) */}
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="#facc15" 
                    strokeWidth="20"
                    strokeDasharray="17.6 233.73"
                    strokeDashoffset="-232.48"
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                  {/* Not available - Gray (0.37%) */}
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="#d1d5db" 
                    strokeWidth="20"
                    strokeDasharray="0.93 250.4"
                    strokeDashoffset="-250.08"
                    transform="rotate(-90 60 60)"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">9659</div>
                    <div className="text-xs text-gray-500">Total</div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="ml-8 flex-1">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Failed (1689)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Warning (681)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Not available (36)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Passed (7253)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }

    if (widget.type === 'progress') {
      return (
        <div className="widget-progress">
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-gray-800">
              {widget.id === 'image-risk-assessment' ? '1470' : '2'}
            </div>
            <div className="text-sm text-gray-600">
              {widget.id === 'image-risk-assessment' ? 'Total Vulnerabilities' : 'Total Images'}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-red-500">Critical ({widget.id === 'image-risk-assessment' ? '9' : '2'})</span>
            <span className="text-orange-500">High ({widget.id === 'image-risk-assessment' ? '150' : '2'})</span>
          </div>
        </div>
      )
    }

    if (widget.type === 'graph') {
      return (
        <div className="widget-graph flex items-center justify-center h-32 text-gray-500">
          <div className="text-center">
            <div className="text-6xl mb-2">📊</div>
            <div>No Graph data available!</div>
          </div>
        </div>
      )
    }

    return (
      <div className="widget-text p-4 text-center">
        <div className="whitespace-pre-line text-gray-700">{widget.text}</div>
      </div>
    )
  }

  return (
    <div className="widget bg-white rounded-lg shadow-md border border-gray-200 p-4 relative">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
        title="Remove widget"
      >
        <X size={16} />
      </button>
      <h3 className="text-sm font-semibold text-gray-800 mb-3 pr-6">{widget.name}</h3>
      {renderContent()}
    </div>
  )
}

export default Widget