module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/tokens/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    }
  }
};
```

---

### **Fichier 8: `tsconfig.json`**

**Nom:**
```
tsconfig.json
