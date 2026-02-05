# Nastavenie Firebase tokenu pre GitHub Actions

1. Vytvor si Firebase CI token:
   - Spusti v termináli: `firebase login:ci`
   - Skopíruj vygenerovaný token.

2. Pridaj token do GitHub repozitára:
   - Choď do Settings > Secrets and variables > Actions > New repository secret
   - Názov: `FIREBASE_TOKEN`
   - Hodnota: vlož vygenerovaný token

3. Po pushnutí na branch `main` sa automaticky spustí deploy workflow.

Poznámka: Uisti sa, že máš správne nastavený `firebase.json` a hosting v Firebase Console.