import { createSlice } from '@reduxjs/toolkit'
import dashboardData from '../data/dashboardData.json'

const initialState = {
  categories: dashboardData.categories,
  availableWidgets: dashboardData.availableWidgets,
  searchTerm: '',
  isAddWidgetModalOpen: false,
  selectedCategory: null
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload
      const category = state.categories.find(cat => cat.id === categoryId)
      if (category) {
        const newWidget = {
          id: `widget-${Date.now()}`,
          name: widget.name,
          text: widget.text,
          type: 'custom'
        }
        category.widgets.push(newWidget)
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload
      const category = state.categories.find(cat => cat.id === categoryId)
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId)
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    openAddWidgetModal: (state, action) => {
      state.isAddWidgetModalOpen = true
      state.selectedCategory = action.payload
    },
    closeAddWidgetModal: (state) => {
      state.isAddWidgetModalOpen = false
      state.selectedCategory = null
    },
    toggleWidgetInCategory: (state, action) => {
      const { categoryId, widget, isSelected } = action.payload
      const category = state.categories.find(cat => cat.id === categoryId)
      if (category) {
        if (isSelected) {
          // Add widget to category if not already present
          const exists = category.widgets.find(w => w.id === widget.id)
          if (!exists) {
            category.widgets.push({
              id: widget.id,
              name: widget.name,
              text: widget.defaultText,
              type: 'default'
            })
          }
        } else {
          // Remove widget from category
          category.widgets = category.widgets.filter(w => w.id !== widget.id)
        }
      }
    }
  }
})

export const {
  addWidget,
  removeWidget,
  setSearchTerm,
  openAddWidgetModal,
  closeAddWidgetModal,
  toggleWidgetInCategory
} = dashboardSlice.actions

export default dashboardSlice.reducer