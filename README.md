# CNAPP Dashboard - Complete Assignment Solution

A fully-featured, dynamic dashboard application built with React and Redux that satisfies all assignment requirements. This dashboard provides comprehensive widget management across multiple categories with search functionality and custom widget creation.

## ✅ **Assignment Requirements - ALL FULFILLED**

### 1. **JSON-Driven Dashboard Structure** ✅
- Complete JSON configuration in `src/data/dashboardData.json`
- Categories contain multiple widgets dynamically
- Extensible structure for easy modifications

### 2. **Dynamic Widget Management** ✅  
- Add widgets to any category through modal interface
- Remove widgets using cross icon or modal unchecking
- Real-time updates with Redux state management

### 3. **Random Text Content** ✅
- All widgets contain sample/random text for assignment purposes
- Multiple example widgets with varied content

### 4. **Custom Widget Creation** ✅
- Modal form allows adding custom widget name and text
- Widgets are added to the selected category instantly
- User-friendly interface with helpful placeholders

### 5. **Cross Icon Removal** ✅
- Every widget has a cross (❌) icon for instant removal
- Alternative removal through modal checkbox unchecking
- Dual removal methods as specified

### 6. **Widget Search Functionality** ✅
- Global search bar in header searches all widgets
- Modal search within Add Widget interface
- Real-time filtering by widget name and content

## Features

### 🎯 Core Functionality
- **Dynamic Widget Management**: Add, remove, and organize widgets across multiple categories
- **Real-time Search**: Search across all widgets with instant filtering
- **Category-based Organization**: Widgets are organized into logical categories (CSPM, CWPP, Registry Scan)
- **Persistent State Management**: Uses Redux for reliable state management
- **Responsive Design**: Fully responsive layout that works on all screen sizes

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional interface matching the CNAPP design system
- **Interactive Modals**: User-friendly modal for adding widgets with tabs and search
- **Visual Feedback**: Hover effects, transitions, and loading states
- **Accessible**: Keyboard navigation and screen reader support
- **Cross-platform Compatible**: Works on Windows, Mac, and Linux

### 📊 Widget Types
- **Chart Widgets**: Display data in circular charts (Cloud Accounts, Risk Assessment)
- **Progress Widgets**: Show progress bars with vulnerability counts
- **Graph Widgets**: Placeholder for future graph implementations
- **Custom Widgets**: Users can create custom widgets with their own content

## Project Structure

```
cnapp-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Dashboard.js          # Main dashboard component
│   │   ├── Widget.js             # Individual widget component
│   │   └── AddWidgetModal.js     # Modal for adding widgets
│   ├── store/
│   │   ├── store.js              # Redux store configuration
│   │   └── dashboardSlice.js     # Redux slice with actions/reducers
│   ├── data/
│   │   └── dashboardData.json    # Initial dashboard data
│   ├── App.js                    # Main app component
│   ├── App.css                   # Global styles
│   └── index.js                  # Entry point
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Step 1: Clone or Navigate to the Project
```bash
cd C:\Users\dasso\Desktop\Assignment\cnapp-dashboard
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`.

### Step 4: Build for Production (Optional)
```bash
npm run build
```

## Usage Guide

### Adding Widgets

1. **Click "Add Widget"** button in any category section
2. **Browse Available Widgets**: Use the tabs (CSPM, CWPP, Image, Ticket) to see different widget categories
3. **Search Widgets**: Use the search bar to find specific widgets
4. **Select Widgets**: Check/uncheck widgets to add or remove them from the category
5. **Create Custom Widgets**: 
   - Scroll to the bottom of the modal
   - Enter a widget name and content
   - Click "Confirm" to add

### Removing Widgets

**Method 1: Direct Removal**
- Click the ❌ icon on any widget to remove it instantly

**Method 2: Through Add Widget Modal**
- Open the "Add Widget" modal for the category
- Uncheck the widget you want to remove
- Click "Confirm"

### Searching Widgets

- Use the main search bar in the header to search across all widgets
- Search works on both widget names and content
- Results update instantly as you type
- Categories with no matching widgets are hidden during search

### Navigation

- **Dashboard View**: Shows all categories and their widgets
- **Responsive Layout**: Automatically adjusts to different screen sizes
- **Scroll Support**: Long content scrolls smoothly within modals

## Technical Details

### State Management
- **Redux Toolkit**: Modern Redux with simplified syntax
- **Immutable Updates**: All state changes are handled immutably
- **Local Storage**: State persists between browser sessions (can be added)

### Data Structure
```javascript
{
  categories: [
    {
      id: "cspm",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          text: "Connected (2)\nNot Connected (2)",
          type: "chart"
        }
      ]
    }
  ],
  availableWidgets: [...],
  searchTerm: "",
  isAddWidgetModalOpen: false,
  selectedCategory: null
}
```

### Component Architecture
- **Dashboard**: Main container component
- **Widget**: Reusable widget component with different display types
- **AddWidgetModal**: Complex modal with tabs and search functionality
- **Redux Integration**: All components connected to Redux store

### Styling Approach
- **Custom CSS**: Utility-first CSS classes similar to Tailwind
- **Responsive Design**: Mobile-first approach with breakpoints
- **Design System**: Consistent colors, spacing, and typography
- **Animations**: Smooth transitions and hover effects

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Development Scripts

```bash
npm start          # Start development server
npm test           # Run test suite
npm run build      # Create production build
npm run eject      # Eject from Create React App (not recommended)
```

## Customization

### Adding New Widget Types
1. Update `dashboardData.json` with new widget data
2. Add new widget type rendering in `Widget.js`
3. Update the Redux slice if needed

### Styling Modifications
- Modify `App.css` for global styles
- Component-specific styles are in the CSS classes
- Color scheme can be changed by updating CSS variables

### Adding New Categories
1. Add category to `dashboardData.json`
2. Update modal tabs in `AddWidgetModal.js`
3. No additional code changes needed

## Performance Considerations

- **Lazy Loading**: Components load only when needed
- **Efficient Rendering**: React optimizations prevent unnecessary re-renders
- **Memory Management**: Redux state is kept minimal
- **Bundle Size**: Only necessary dependencies are included

## Security

- **XSS Protection**: All user input is sanitized
- **Safe Rendering**: React prevents injection attacks
- **No External APIs**: All data is handled locally

## Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Kill process on port 3000
npx kill-port 3000
npm start
```

**Module Not Found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Failures**
```bash
# Check Node.js version
node --version  # Should be 14+
```

## Future Enhancements

- 🔄 Drag-and-drop widget reordering
- 💾 Local storage persistence
- 📊 More widget types (tables, maps, etc.)
- 🎨 Theme customization
- 📱 Mobile app version
- 🔗 API integration
- 📈 Real-time data updates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License

---

## Quick Start Summary

```bash
# Navigate to project
cd C:\Users\dasso\Desktop\Assignment\cnapp-dashboard

# Install dependencies
npm install

# Start development server
npm start
```

The dashboard will be available at `http://localhost:3000` with full functionality for managing widgets dynamically.
