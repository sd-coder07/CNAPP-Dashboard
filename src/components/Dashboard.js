import { Plus, Search } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { openAddWidgetModal, setSearchTerm } from '../store/dashboardSlice'
import Widget from './Widget'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { categories, searchTerm } = useSelector(state => state.dashboard)

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.widgets.length > 0 || searchTerm === '')

  return (
    <div className="dashboard min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">CNAPP Dashboard</h1>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-2 transform -translate-y-1/2 text-gray-500" size={16} />
              <input
                type="text"
                placeholder="     Search anything..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400 bg-gray-100 text-gray-700 placeholder-gray-500"
              />
            </div>
            <button
              onClick={() => dispatch(openAddWidgetModal('cspm'))}
              className="flex items-center px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Add Widget +
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              🔄
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              ⋮
            </button>
            <div className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <select className="bg-transparent text-blue-600 font-medium text-sm">
                <option>Last 2 days</option>
                <option>Last week</option>
                <option>Last month</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Categories and Widgets */}
      {filteredCategories.map(category => (
        <div key={category.id} className="category mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
          </div>
          
          <div className="widgets-grid">
            {category.widgets.map(widget => (
              <Widget
                key={widget.id}
                widget={widget}
                categoryId={category.id}
              />
            ))}
            
            {/* Add Widget Placeholder */}
            <div
              onClick={() => dispatch(openAddWidgetModal(category.id))}
              className="add-widget-placeholder bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center hover:border-gray-400 cursor-pointer transition-colors min-h-48"
            >
              <div className="text-center text-gray-400">
                <Plus size={32} className="mx-auto mb-2" />
                <span className="text-sm">Add Widget</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Empty State */}
      {searchTerm && filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No widgets found matching "{searchTerm}"</div>
        </div>
      )}
    </div>
  )
}

export default Dashboard