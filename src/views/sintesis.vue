<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 Las empresas del sector agroindustrial para permanecer en el mercado deben estar siempre diseñando estrategias que les permita tener un sistema financiero sano, por lo cual deben estar pendientes de revisar los siguientes elementos: la nómina, los costos de producción, los inventarios y hacer un análisis financiero de manera permanente que le permita conocer el estado actual de la organización, con el fin de implementar un plan de mejora continua para tomar decisiones a tiempo para reducir las posibles contingencias que se presenten. Vea, entonces, todo lo tratado de manera resumida y conceptual a través del siguiente mapa:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
