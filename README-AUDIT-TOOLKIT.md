# Audit Toolkit

GitHub Pages files:

- `index.html` — welcome page
- `BuildingEnvelopeChecklist.html` — building envelope checklist
- `EquipmentAudit.html` — equipment baseline, measurement, recommendation, and M&V workspace
- `assets/shared-storage.js` — shared project storage helper

Keep the HTML files in the repository root. Link from the welcome page using relative paths:

```html
<a href="BuildingEnvelopeChecklist.html">Envelop</a>
<a href="EquipmentAudit.html">Equipment</a>
```

The current delivered equipment page remains self-contained and uses browser local storage plus JSON export/import. The shared helper provides the foundation for merging both pages into one project JSON workflow.
