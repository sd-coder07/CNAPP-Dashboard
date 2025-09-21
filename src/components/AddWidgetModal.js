import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWidget, closeAddWidgetModal, toggleWidgetInCategory } from '../store/dashboardSlice'

const AddWidgetModal = () => {
  const dispatch = useDispatch()
  const { isAddWidgetModalOpen, selectedCategory, categories, availableWidgets } = useSelector(state => state.dashboard)
  const [activeTab, setActiveTab] = useState('cspm')
  const [widgetName, setWidgetName] = useState('')
  const [widgetText, setWidgetText] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Get current category data
  const currentCategory = categories.find(cat => cat.id === selectedCategory)
  const currentCategoryWidgetIds = currentCategory?.widgets.map(w => w.id) || []

  // Filter available widgets by search term
  const filteredWidgets = availableWidgets.filter(widget =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleClose = () => {
    dispatch(closeAddWidgetModal())
    setWidgetName('')
    setWidgetText('')
    setSearchTerm('')
    setActiveTab('cspm')
  }

  const handleAddWidget = () => {
    if (widgetName.trim() && widgetText.trim() && selectedCategory) {
      dispatch(addWidget({
        categoryId: selectedCategory,
        widget: {
          name: widgetName.trim(),
          text: widgetText.trim()
        }
      }))
      handleClose()
    }
  }

  const handleToggleWidget = (widget, isChecked) => {
    dispatch(toggleWidgetInCategory({
      categoryId: selectedCategory,
      widget,
      isSelected: isChecked
    }))
  }

  if (!isAddWidgetModalOpen) return null

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="modal-header bg-blue-600 text-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Add Widget</h2>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Personalise your dashboard by adding the following widget
          </p>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setActiveTab('cspm')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'cspm'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              CSPM
            </button>
            <button
              onClick={() => setActiveTab('cwpp')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'cwpp'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              CWPP
            </button>
            <button
              onClick={() => setActiveTab('image')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'image'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Image
            </button>
            <button
              onClick={() => setActiveTab('ticket')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'ticket'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Ticket
            </button>
          </div>

          {/* Content */}
          <div className="modal-content overflow-y-auto max-h-80">
            {(activeTab === 'cspm' || activeTab === 'cwpp') && (
              <div className="space-y-4">
                {/* Search Input for Widgets */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search widgets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-3">
                  {/* Show relevant widgets based on active tab */}
                  {filteredWidgets
                    .filter(widget => 
                      (activeTab === 'cspm' && widget.category === 'cspm') ||
                      (activeTab === 'cwpp' && widget.category === 'cwpp') ||
                      (activeTab === 'image' && widget.category === 'registry-scan')
                    )
                    .map(widget => (
                    <div key={widget.id} className="flex items-center p-3 border border-gray-200 rounded-lg">
                      <input
                        type="checkbox"
                        id={widget.id}
                        checked={currentCategoryWidgetIds.includes(widget.id)}
                        onChange={(e) => handleToggleWidget(widget, e.target.checked)}
                        className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="flex-1">
                        <label htmlFor={widget.id} className="block text-sm font-medium text-gray-800 cursor-pointer">
                          {widget.name}
                        </label>
                        <p className="text-xs text-gray-600 mt-1">{widget.defaultText}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom Widget Form */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-800 mb-3">Add Custom Widget:</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Widget Name (e.g., 'My Security Dashboard')"
                      value={widgetName}
                      onChange={(e) => setWidgetName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                      placeholder="Widget Text (e.g., 'This widget displays security metrics for my organization...')"
                      value={widgetText}
                      onChange={(e) => setWidgetText(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    <div className="text-xs text-gray-500">
                      💡 Tip: Enter any custom name and text for your widget. It will be added to the selected category.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {(activeTab === 'image' || activeTab === 'ticket') && (
              <div className="space-y-4">
                {/* Search Input for Widgets */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search widgets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {activeTab === 'image' && (
                  <div className="space-y-3">
                    {filteredWidgets
                      .filter(widget => widget.category === 'registry-scan')
                      .map(widget => (
                      <div key={widget.id} className="flex items-center p-3 border border-gray-200 rounded-lg">
                        <input
                          type="checkbox"
                          id={widget.id}
                          checked={currentCategoryWidgetIds.includes(widget.id)}
                          onChange={(e) => handleToggleWidget(widget, e.target.checked)}
                          className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <div className="flex-1">
                          <label htmlFor={widget.id} className="block text-sm font-medium text-gray-800 cursor-pointer">
                            {widget.name}
                          </label>
                          <p className="text-xs text-gray-600 mt-1">{widget.defaultText}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'ticket' && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No ticket widgets available yet.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAddWidget}
              disabled={!widgetName.trim() || !widgetText.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddWidgetModal