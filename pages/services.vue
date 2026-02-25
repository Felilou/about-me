<template>
  <!-- Hero Image -->
  <div class="fixed-bg fixed w-screen h-screen -z-10 bg-[url('https://raw.githubusercontent.com/Felilou/about-me/refs/heads/build/img/Leistungen.jpg')]"></div>
  <div class="h-[75vh] flex justify-center items-end">
    <div class="w-full bg-white flex justify-center items-center p-2">
      <img src="https://raw.githubusercontent.com/Felilou/about-me/refs/heads/build/img/image.png" alt="Dr. Ene Königswieser" class="w-[600px]">
    </div>
  </div>

  <!-- Content -->
  <div class="bg-white border-t border-primary">
    
    <!-- Divider -->
    <div class="max-w-[200px] mx-auto border-b-2 border-primary/30 mb-10"></div>

    <!-- Section Heading -->
    <UContainer class="max-w-[900px] mx-auto px-4 pb-6">
      <LanguageBox language-prop="at">
        <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">Leistungen</h2>
        <p class="text-center text-gray-500 mb-8">Meine zahnmedizinischen Schwerpunkte</p>
      </LanguageBox>
    </UContainer>

    <!-- Services -->
    <UContainer class="max-w-[1100px] mx-auto px-4 pb-16">
      <LanguageBox language-prop="at">
        <div class="space-y-10">

          <!-- Service 1: Kunststofffüllungen -->
          <div class="service-card bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 border border-gray-100">
            <div class="md:flex md:gap-8 items-start">
              <div class="flex-shrink-0 mb-4 md:mb-0">
                <div class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <UIcon name="i-heroicons-sparkles" class="w-8 h-8 text-primary" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">Kunststofffüllungen – präzise &amp; substanzschonend</h3>
                <p class="text-gray-700 leading-relaxed mb-3">
                  Moderne Kunststofffüllungen (Kompositfüllungen) ermöglichen eine ästhetische und metallfreie Versorgung von Zahndefekten.
                </p>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Dank Mikroskop-Vergrößerung kann Karies exakt entfernt und gesunde Zahnsubstanz maximal geschont werden. Die Füllung wird in präziser Schichttechnik aufgebaut – für Stabilität, Funktion und ein natürliches Erscheinungsbild.
                </p>
                <div class="bg-white rounded-xl p-4 border border-gray-200">
                  <p class="font-semibold text-gray-800 mb-2">Vorteile:</p>
                  <ul class="grid sm:grid-cols-2 gap-2">
                    <li class="flex items-start gap-2 text-gray-700">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Zahnfarbene, nahezu unsichtbare Versorgung</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Minimalinvasive Behandlung</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Biokompatible Materialien</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Langlebige, funktionelle Rekonstruktion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 2: Wurzelkanalbehandlung -->
          <div class="service-card bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 border border-gray-100">
            <div class="md:flex md:gap-8 items-start">
              <div class="flex-shrink-0 mb-4 md:mb-0">
                <div class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <UIcon name="i-heroicons-eye" class="w-8 h-8 text-primary" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-1">Wurzelkanalbehandlung unter dem Mikroskop</h3>
                <p class="text-sm text-primary font-semibold mb-3">Präzision, die Zähne rettet</p>
                <p class="text-gray-700 leading-relaxed mb-3">
                  Eine Wurzelkanalbehandlung erfordert höchste Genauigkeit.
                  Als Mikroskop-Zahnärztin in Wien behandle ich entzündete oder infizierte Zähne unter starker Vergrößerung.
                </p>
                <div class="bg-white rounded-xl p-4 border border-gray-200 mb-4">
                  <p class="font-semibold text-gray-800 mb-2">Das ermöglicht:</p>
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2 text-gray-700">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Auffinden zusätzlicher oder versteckter Wurzelkanäle</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Gründliche Reinigung und Desinfektion</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Schonende Behandlungstechniken</span>
                    </li>
                    <li class="flex items-start gap-2 text-gray-700">
                      <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dichte, langfristige Versiegelung</span>
                    </li>
                  </ul>
                </div>
                <p class="text-gray-700 leading-relaxed italic">
                  Ziel ist die nachhaltige Entzündungsfreiheit und der langfristige Erhalt Ihres natürlichen Zahnes.
                </p>
              </div>
            </div>
          </div>

          <!-- Service 3: Mundhygiene & Prophylaxe -->
          <div class="service-card bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 border border-gray-100">
            <div class="md:flex md:gap-8 items-start">
              <div class="flex-shrink-0 mb-4 md:mb-0">
                <div class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-primary" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">Mundhygiene &amp; Prophylaxe – Zahngesundheit erhalten</h3>
                <p class="text-gray-700 leading-relaxed mb-3">
                  Regelmäßige professionelle Mundhygiene ist die Grundlage für gesunde Zähne und gesundes Zahnfleisch.
                  In meiner Praxis in Wien steht präzise, gründliche Prophylaxe im Mittelpunkt – individuell abgestimmt auf Ihre Bedürfnisse.
                </p>
                <p class="text-gray-700 leading-relaxed font-semibold italic">
                  Vorbeugen ist die beste Form des Zahnerhalts.
                </p>
                <div class="mt-4">
                  <UButton to="https://Mundhygiene-zahnarzt.at" target="_blank" size="md" icon="i-heroicons-calendar-days" variant="soft">
                    Mundhygiene online buchen
                  </UButton>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 4: Bleaching -->
          <div class="service-card bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 border border-gray-100">
            <div class="md:flex md:gap-8 items-start">
              <div class="flex-shrink-0 mb-4 md:mb-0">
                <div class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <UIcon name="i-heroicons-sun" class="w-8 h-8 text-primary" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">Bleaching in Wien – schonende Zahnaufhellung</h3>
                <p class="text-gray-700 leading-relaxed">
                  Professionelles Bleaching sorgt für ein helleres, natürlich wirkendes Lächeln.
                  Die Zahnaufhellung erfolgt kontrolliert und individuell angepasst – für ein harmonisches Ergebnis ohne unnötige Belastung der Zahnsubstanz.
                </p>
              </div>
            </div>
          </div>

          <!-- Service 5: Kronen -->
          <div class="service-card bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 border border-gray-100">
            <div class="md:flex md:gap-8 items-start">
              <div class="flex-shrink-0 mb-4 md:mb-0">
                <div class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <UIcon name="i-heroicons-wrench-screwdriver" class="w-8 h-8 text-primary" />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">Kronen – Stabilität mit höchster Passgenauigkeit</h3>
                <p class="text-gray-700 leading-relaxed">
                  Ist ein Zahn stark geschädigt, kann eine präzise gefertigte Krone Funktion und Stabilität wiederherstellen.
                  Durch exakte Vorbereitung unter Mikroskop-Vergrößerung wird maximale Passgenauigkeit erreicht – bei gleichzeitiger Schonung gesunder Strukturen.
                </p>
              </div>
            </div>
          </div>

        </div>
      </LanguageBox>
    </UContainer>

    <!-- CTA Section -->
    <div class="bg-primary/5 py-12">
      <UContainer class="max-w-[700px] mx-auto px-4 text-center">
        <LanguageBox language-prop="at">
          <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Haben Sie Fragen oder möchten einen Termin vereinbaren?</h3>
          <UButton to="/contact" size="lg" icon="i-heroicons-envelope">
            Kontaktieren Sie mich
          </UButton>
        </LanguageBox>
      </UContainer>
    </div>
  </div>

  <Footer />
</template>

<script lang="ts" setup>
</script>

<style scoped>
.fixed-bg {
  background-size: cover;
  background-position-x: center;
  background-position-y: 30%;
}

p {
  font-size: large;
  margin-bottom: 1em;
}

.service-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-card ul li {
  margin-bottom: 0;
}

.service-card ul li span {
  font-size: 0.95rem;
}
</style>