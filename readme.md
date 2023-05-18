PROBLEMA:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

1 - Chiedere all'utente quanti km deve percorrere
2 - Creare la variabile
3 - Chiedere all'utente la sua età
4 - Creare la variabile
5 - Creare variabile per il calcolo del prezzo base (0.21 * km)
6 - Creare condizione SE per applicare sconto del 20% ai minorenni
7 - Creare condizione ALTRIMENTI SE per applicare sconto del 40% agli over 65
8 - Creare due input e un bottone
9 - Mostrare in console il prezzo finale
10 - Creare il form da visualizzare in pagina per l'utente
    10.1 - Creare container-fluid
    10.2 - Creare 1 riga 
    10.2 Creare 4 colonne
    10.3 Creare due input 
    10.4 Crare una select
    10.5 Creare due bottoni
    10.6 Creare biglietto 
    10.7 Creare tabella
11 - Mostrare prezzo finale    
    11.1 - Inserire toFixed per mostrare due decimali nel prezzo finale
