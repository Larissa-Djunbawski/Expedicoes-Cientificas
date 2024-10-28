Species
http://localhost:6000/species
{
  "name": "Espécie B",
  "discoveryLocation": "Serra da Mantiqueira",
  "rarity": 5,
  "documented": false
}



Explorer

{
  "name": "Maria Silva",
  "fieldOfStudy": "Biologia",
  "expeditionsParticipated": 5
}



Expedition
{
  "location": "Floresta Amazônica",
  "date": "2024-10-15",
  "participants": [
    "603d2f5c8c1a3e001f08f96b", // Exemplo de ObjectID para Explorer
    "603d2f5c8c1a3e001f08f96c"  // Outro exemplo de ObjectID para Explorer
  ],
  "speciesFound": [
    "603d2f5c8c1a3e001f08f96d", // Exemplo de ObjectID para Species
    "603d2f5c8c1a3e001f08f96e"  // Outro exemplo de ObjectID para Species
  ]
}
