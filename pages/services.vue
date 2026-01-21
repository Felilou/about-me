<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4 py-12">
    <div class="max-w-2xl w-full text-center space-y-8">
      <!-- Icon -->
      <div class="flex justify-center">
        <div class="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <UIcon name="i-heroicons-wrench-screwdriver" class="w-12 h-12 text-primary" />
        </div>
      </div>

      <!-- Heading -->
      <div class="space-y-4">
        <LanguageBox language-prop="at">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Leistungen
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Hier arbeiten wir noch daran
          </p>
        </LanguageBox>
        
        <LanguageBox language-prop="ee">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Teenused
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Siin me veel töötame
          </p>
        </LanguageBox>
        
        <LanguageBox language-prop="ru">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Услуги
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Мы еще работаем над этим
          </p>
        </LanguageBox>
        
        <LanguageBox language-prop="en">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Services
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            We're still working on this
          </p>
        </LanguageBox>
      </div>

      <!-- Description Card -->
      <UCard class="max-w-xl mx-auto">
        <div class="space-y-3">
          <LanguageBox language-prop="at">
            <p class="text-gray-700 dark:text-gray-300">
              Unsere Leistungsübersicht befindet sich derzeit in Entwicklung.
              Schauen Sie bald wieder vorbei für detaillierte Informationen über unsere Dienstleistungen.
            </p>
          </LanguageBox>
          
          <LanguageBox language-prop="ee">
            <p class="text-gray-700 dark:text-gray-300">
              Meie teenuste ülevaade on praegu väljatöötamisel.
              Tulge varsti tagasi, et saada üksikasjalikku teavet meie teenuste kohta.
            </p>
          </LanguageBox>
          
          <LanguageBox language-prop="ru">
            <p class="text-gray-700 dark:text-gray-300">
              Обзор наших услуг в настоящее время находится в разработке.
              Скоро вернитесь, чтобы получить подробную информацию о наших услугах.
            </p>
          </LanguageBox>
          
          <LanguageBox language-prop="en">
            <p class="text-gray-700 dark:text-gray-300">
              Our service overview is currently under development.
              Check back soon for detailed information about our services.
            </p>
          </LanguageBox>
        </div>
      </UCard>

      <!-- CTA Button -->
      <div>
        <LanguageBox language-prop="at">
          <UButton to="/contact" size="lg" icon="i-heroicons-envelope">
            Kontaktieren Sie uns
          </UButton>
        </LanguageBox>
        
        <LanguageBox language-prop="ee">
          <UButton to="/contact" size="lg" icon="i-heroicons-envelope">
            Võtke meiega ühendust
          </UButton>
        </LanguageBox>
        
        <LanguageBox language-prop="ru">
          <UButton to="/contact" size="lg" icon="i-heroicons-envelope">
            Свяжитесь с нами
          </UButton>
        </LanguageBox>
        
        <LanguageBox language-prop="en">
          <UButton to="/contact" size="lg" icon="i-heroicons-envelope">
            Contact us
          </UButton>
        </LanguageBox>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>

</script>

<style>

</style>