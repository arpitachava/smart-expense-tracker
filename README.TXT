smart-expense-tracker/
│
├── public/
│   └── index.html
│
├── src/
│   │
│   ├── app/                     # Redux store setup
│   │   └── store.js
│   │
│   ├── features/                # Redux feature slices
│   │   ├── expenses/
│   │   │   ├── expenseSlice.js
│   │   │   └── expenseSelectors.js
│   │   │
│   │   ├── categories/
│   │   │   └── categorySlice.js
│   │   │
│   │   ├── ui/
│   │   │   └── uiSlice.js        # dialog, snackbar, theme
│   │
│   ├── components/              # Reusable components
│   │   ├── layout/
│   │   │   ├── AppBarLayout.jsx
│   │   │   ├── DrawerMenu.jsx
│   │   │   └── PageContainer.jsx
│   │   │
│   │   ├── common/
│   │   │   ├── ConfirmDialog.jsx
│   │   │   ├── CustomSnackbar.jsx
│   │   │   └── LoadingProgress.jsx
│   │
│   │   ├── forms/
│   │   │   └── ExpenseForm.jsx
│   │
│   ├── pages/                   # Route-level pages
│   │   ├── Dashboard.jsx
│   │   ├── Transactions.jsx
│   │   ├── Reports.jsx
│   │   ├── Settings.jsx
│   │   └── Admin.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── theme/                   # MUI theming
│   │   └── theme.js
│   │
│   ├── utils/
│   │   ├── helpers.js
│   │   └── constants.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
