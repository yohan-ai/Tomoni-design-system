import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      toc: true,
    },
  },
};

export default preview;
```

---

### **Fichier 11: `.gitignore`**

**Nom:**
```
.gitignore
```

**Contenu:**
```
node_modules/
.DS_Store
dist/
build/
*.log
.env
.env.local
```

---

## ✅ Checklist

Une fois que tu as créé les **11 fichiers**, tu devrais voir sur ton repo GitHub:
```
tomoni-design-system/
├── .github/
│   └── workflows/
│       ├── sync-tokens.yml ✅
│       └── deploy-storybook.yml ✅
├── .storybook/
│   ├── main.ts ✅
│   └── preview.ts ✅
├── tokens/
│   ├── colors.json ✅
│   ├── spacing.json ✅
│   └── typography.json ✅
├── .gitignore ✅
├── package.json ✅
├── style-dictionary.config.js ✅
├── tsconfig.json ✅
└── README.md (déjà existant)
