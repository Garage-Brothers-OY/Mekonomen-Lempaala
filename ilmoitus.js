// MUOKKAA TÄTÄ PUHELIMELLA TAI KONEELA:
// - 1 mainos listalla = pysyy keskellä paikallaan
// - 2 tai useampi mainos = rullaa automaattisesti (nuolilla voi myös selata)
// - Tyhjä lista [] = koko palkki piiloutuu kokonaan

const ILMOITUKSET = [
    {
        badge: "AJANKOHTAISTA",         // Vasemman reunan pieni merkki (esim. "TARJOUS", "ALE", "UUTTA" tai "")
        badgeTausta: "#FFED00",
        badgeTeksti: "#111111",
        teksti: "Renkaiden kausivaihto ja rengashotelli nyt varattavissa <b>Lempäälässä!</b>",
        nappiTeksti: "Varaa aika",
        linkki: "https://mekonomen.fi",
        tausta: "#18191B",              // Tumma tyylikäs tausta (kuten kuvan alin palkki)
        tekstiVari: "#FFFFFF",
        nappiTausta: "#FFED00",
        nappiTekstiVari: "#111111"
    },
    {
        badge: "3 V TAKUU",
        badgeTausta: "#111111",
        badgeTeksti: "#FFED00",
        teksti: "Määräaikaishuollot kaikille automerkeille – <b>Uuden auton tehdastakuu säilyy</b>",
        nappiTeksti: "Varaa huolto",
        linkki: "https://mekonomen.fi",
        tausta: "#FFED00",              // Mekonomen-keltainen tausta
        tekstiVari: "#111111",
        nappiTausta: "#111111",
        nappiTekstiVari: "#FFFFFF"
    },
    {
        badge: "RAHOITUS",
        badgeTausta: "#FFFFFF",
        badgeTeksti: "#111111",
        teksti: "Maksa huolto joustavasti Mekonomen-tilillä – <b>jopa 12 kk korotonta maksuaikaa</b>",
        nappiTeksti: "Lue lisää",
        linkki: "https://mekonomen.fi",
        tausta: "linear-gradient(90deg, #1E2022 0%, #34373B 100%)", // Tukee myös liukuvärejä!
        tekstiVari: "#FFFFFF",
        nappiTausta: "#FFED00",
        nappiTekstiVari: "#111111"
    }
];

const RULLAUS_NOPEUS_SEK = 5; // Vaihtoväli sekunteina kun mainoksia on 2 tai enemmän
