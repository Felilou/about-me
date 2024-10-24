<template>
    <div class="fixed-bg fixed w-screen h-screen -z-10 bg-[url('/img/20240916-GZ1A8139.jpg')] ">
    </div>
    <div class="h-[75vh] flex justify-center items-end">
        <h1 class="bg-primary text-white p-3 sm:text-7xl m-0 text-5xl top-5 relative text-fancy z-10">Dr. Ene
            Königswieser</h1>
    </div>
    <div class="bg-white border-t border-primary pt-6 p-2">
        <UContainer class="max-w-[800px] mx-auto ">
            <LanguageBox language-prop="at">
                <p>
                    In meiner Zahnarztpraxis lege ich großen Wert auf Prävention, damit Ihre Zähne
                    gesund bleiben. Wenn jedoch bereits ein Problem in Ihrem Mund besteht, ist es
                    mein Ziel, Ihre Zähne zu erhalten.
                </p>
                <p>
                    Darüber hinaus kommt in meiner Praxis das Mikroskop zum Einsatz, um selbst die
                    kleinsten Zahn- und Zahnfleischprobleme so früh wie möglich zu erkennen und zu
                    behandeln.
                </p>
                <p>
                    Ich versuche stets eine ehrliche und einfühlsame Kommunikation mit Ihnen zu
                    führen, was bereits vielen meiner Patienten dazu verholfen hat, auch die größten
                    Ängste vor einer Zahnbehandlung zu lindern. Außer Deutsch spreche ich auch
                    Estnisch, Englisch, Russisch, Finnisch und ein wenig Italienisch, was mir dabei hilft,
                    mich mit dem Patienten besser verständigen zu können.
                </p>
                <p class="mb-0">
                    In meiner Freizeit beschäftige ich mich gerne mit Fotografie und als ehemalige
                    Kunststudentin zeichne ich auch gerne und schaffe Schönes um mich herum.
                    Es ist mir wichtig, sowohl körperlich als auch geistig fit zu bleiben. Deshalb betreibe
                    ich verschiedene Sportarten und genieße als gebürtige Nordländerin das
                    Eisschwimmen.
                </p>
            </LanguageBox>
            <LanguageBox language-prop="ee">
                <p>
                    Hambaravis on mulle südameasjaks ennetustöö, et naeratus säraks ning hambad
                    oleksid terved. Aga kui suus juba probleem on tekkinud, siis on minu eesmärk
                    hambaid ravida, mitte neid eemaldada. Töid teostan mikroskoobiga, et avastada
                    väikseimadki hammaste ja igemete probleemid kohe algusjärgus ning ravida neid
                    võimalikult vähe kahjustades. Olen hea suhtleja ja oleme seni koos patsientidega
                    suutnud ka kõige suurema hirmu hambaravi ees seljatada. Räägin eesti, saksa,
                    inglise, vene ja soome ning pisut ka itaalia keelt, mis annab mulle võimaluse inimesi
                    paremini mõista.
                </p>
                <p class="mb-0">
                    Töövabal ajal meeldib mulle pildistada inimesi ja olukordi, et jäädvustada erilisi hetki.
                    Kunagise kunstikooli õpilasena naudin ka joonistamist ja ilu loomist enda ümber.
                    Pean oluliseks enda vormis hoidmist nii füüsiliselt kui vaimselt, mistõttu tegelen
                    mitmete spordialadega ja korraliku põhjamaalasena harrastan ka talisuplust.
                </p>
            </LanguageBox>
        </UContainer>
    </div>
    <Footer />
</template>

<script setup>
</script>

<style scoped>
.fixed-bg {
    background-position: 50% top;
    background-size: cover;
}

p {
    font-size: large;
}
</style>