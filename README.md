# ZPA Onboarding Portal

An interactive web-based onboarding portal for new team members with role-based content, progress tracking, and comprehensive resource management.

## ✨ Features

- 📊 **Dashboard** - Role-based interactive dashboard with Developer/DevOps toggle
- 🎯 **Team Member Onboarding Checklist** - Comprehensive 6-section checklist (COCOA, Monitoring, ZPA WebUI, OCP Openshift, KVS, SC3)
- ✅ **Task Management** - Interactive task checklist for onboarding tasks
- 🛠️ **Tools** - Development resources and required tools
- 📚 **Documentation** - Confluence-linked resource guides
- 👥 **Team Directory** - Team member roster with roles and contact info
- 💬 **Help & Support** - Support resources and FAQ
- 🌙 **Dark Mode** - Theme support
- 💾 **Progress Persistence** - localStorage-based state management

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ZPA-Onboarding.git
cd Onboarding
```

2. Open in browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

3. **Role Toggle** - Switch between Developer and DevOps roles on the main dashboard to see role-specific onboarding content. Your selection is saved automatically.

## 📁 Project Structure

```
Onboarding/
├── login.html              # Login page
├── index.html              # Main dashboard with role toggle
├── pages/                  # Sub pages
│   ├── dashboard.html
│   ├── tasks.html          # Onboarding tasks
│   ├── tools.html          # Required tools
│   ├── docs.html           # Documentation links
│   ├── team.html           # Team roster
│   └── help.html           # Help & support
├── css/                    # Stylesheets
│   ├── style.css           # Global styles
│   ├── dashboard.css       # Dashboard styles
│   ├── components.css      # Components
│   └── dark.css            # Dark theme
├── js/                     # JavaScript
│   ├── script.js           # Main app & role toggle
│   ├── dashboard.js        # Dashboard logic
│   ├── charts.js           # Charts
│   └── theme.js            # Theme management
└── README.md
```

## 🛠 Technologies

- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript (Vanilla)
- Font Awesome 6.5.1

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


