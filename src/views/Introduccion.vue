<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 <b style="color:#6E2034">En pleno Siglo XXI</b>, donde las Tecnologías de la Información y la Comunicación han permeado todos los sectores económicos, <b style="color:#6E2034">el sector agroindustrial no se ha quedado atrás, ya que como se puede evidenciar los <i>robots</i> han llegado para quedarse y hacer más eficientes los procesos de producción en las empresas, además de bajar los costos</b>, por lo anterior, se hace necesario revisar los temas de producción de costos y análisis financiero en las empresas agroindustriales, con el fin de no solo ver el hoy y cómo funcionan en Colombia, sino también proyectar al aprendiz a lo que será la industria agraria en el país con la incorporación de dichas tecnologías y cómo estas afectarán los estados financieros de las empresas. Por lo anterior, se invita a revisar el siguiente video introductorio:
    p.mb-5 <b style="color:#6E2034">¡Adelante!</b>

    figure(data-aos="fade-left")
      .video        
        iframe(width="789" height="444" src="https://www.youtube.com/embed/uyvsqO_0kvw" title="Costos de producción y análisis financiero" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
