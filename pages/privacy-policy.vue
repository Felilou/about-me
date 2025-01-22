<template>
  <div>

    <UContainer>
    <h1 class="pt-20">Datenschutzerklärung</h1>

    <UVerticalNavigation :links="linksP" class="border-b border-gray-200 dark:border-gray-800" />
    
    <h2 id="1">Verantwortliche Stelle</h2>
    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist: Ene Königswieser</p>

    <h2 id="2">Erfassung und Speicherung personenbezogener Daten</h2>
    <p>Beim Besuch unserer Website werden keine personenbezogenen Daten erhoben, es sei denn, Sie stellen uns diese freiwillig zur Verfügung (z. B. durch eine Kontaktanfrage).</p>

    <h2 id="3">Zweck der Datenverarbeitung</h2>
    <p>Wir verarbeiten Ihre Daten nur, um Ihnen die Nutzung unserer Website zu ermöglichen, die Sichtbarkeit unserer Inhalte zu verbessern (z. B. durch Suchmaschinenoptimierung), und auf Ihre Anfragen zu antworten.</p>

    <h2 id="4">Hosting und Zugriffsdaten</h2>
    <p>Unsere Website wird bei einem externen Anbieter gehostet. Bei jedem Aufruf unserer Website erhebt unser Hosting-Anbieter sogenannte Server-Logfiles (z. B. IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs), um die Stabilität und Sicherheit der Website zu gewährleisten.</p>

    <h2 id="5">Cookies und eingebundene Module</h2>
    <h3>Unsere Website verwendet folgende Technologien, die Cookies setzen oder Daten verarbeiten können</h3>
    <p><strong>NuxtUI</strong> Wird für die Darstellung und Bedienbarkeit der Website verwendet. Es können technische Cookies genutzt werden, um die Benutzeroberfläche zu verbessern.</p>
    <p><strong>NuxtSitemap</strong> Dient der Erstellung einer Sitemap, die Suchmaschinen bei der Indexierung der Website-Inhalte unterstützt. Dieses Modul verarbeitet keine personenbezogenen Daten von Besucher:innen.</p>
    <p><strong>NuxtRobots</strong> Dient der Steuerung von Suchmaschinen-Crawlern und verarbeitet ebenfalls keine personenbezogenen Daten.</p>
    <p>Sofern Cookies verwendet werden, sind diese technisch notwendig und erfordern keine vorherige Zustimmung. Es werden keine Tracking-Cookies oder Analyse-Tools verwendet.</p>

    <h2 id="6">Externe Links</h2>
    <p>Unsere Website enthält Links zu externen Webseiten, deren Inhalte wir nicht kontrollieren können. Für die Inhalte und den Datenschutz auf den verlinkten Seiten ist der jeweilige Betreiber verantwortlich.</p>

    <h2 id="7">Rechte der Betroffenen</h2>
    <h3>Als Nutzer:in unserer Website haben Sie folgende Rechte</h3>
    <p>Auskunft über die bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 15 DSGVO).</p>
    <p>Die Berichtigung unrichtiger Daten zu fordern (Art. 16 DSGVO).</p>
    <p>Die Löschung Ihrer Daten zu verlangen, sofern dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen (Art. 17 DSGVO).</p>
    <p>Die Einschränkung der Verarbeitung Ihrer Daten zu fordern (Art. 18 DSGVO).</p>
    <p>Der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DSGVO).</p>
    <p>Eine Kopie Ihrer Daten in einem gängigen, maschinenlesbaren Format zu erhalten (Art. 20 DSGVO).</p>
    <p>Eine Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde einzureichen, wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.</p>

    <h2 id="8">Kontakt</h2>
    <p>Bei Fragen oder zur Geltendmachung Ihrer Rechte können Sie uns unter folgender E-Mail-Adresse kontaktieren: ene.koenigswieser@mikroskopzahnarzt.at</p>
  </UContainer>
  <Footer />
  </div>
</template>

<script lang="ts" setup>
const linksP = [{
  label: 'Verantwortliche Stelle',
  to: '/privacy-policy#1'
}, {
  label: 'Erfassung und Speicherung personenbezogener Daten',
  to: '/privacy-policy#2'
}, {
  label: 'Zweck der Datenverarbeitung',
  to: '/privacy-policy#3'
}, {
  label: 'Hosting und Zugriffsdaten',
  to: '/privacy-policy#4'
}, {
  label: 'Cookies und eingebundene Module',
  to: '/privacy-policy#5'
}, {
  label: 'Externe Links',
  to: '/privacy-policy#6'
}, {
  label: 'Rechte der Betroffenen',
  to: '/privacy-policy#7'
}, {
  label: 'Kontakt',
  to: '/privacy-policy#8'
}]
</script>

<style>
h2 {
  border-bottom: 2px solid rgb(var(--color-primary-500));
  background-color: rgb(var(--color-gray-100));
  padding: 0.25rem;
}
</style>