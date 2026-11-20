<template>
  <div>
    <a href="#main" class="skip-link">Skip to content</a>
    <SiteSidebar />

    <div class="content">
      <main id="main" tabindex="-1">
        <slot />
      </main>
    </div>
  </div>
</template>
