<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Inventarios 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-5          
          p.mb-5 Se entiende al <b>conjunto de todos aquellos bienes en existencia que están destinados a ser empleados en la realización de operaciones sobre las cuales se espera recibir una retribución o beneficio futuro</b>, ya sea alquiler, venta, uso o transformación.
          <br>

    p.mb-5 En este sentido, los inventarios de una compañía están constituidos por:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-12
        .row.justify-content-center.mb-5
          .col-lg-6.col-12.d-flex
            .fondo1.w-100.p-3.mb-lg-0.mb-5
              .d-flex.justify-content-center
                img(style="width:139px" src="@/assets/curso/tema3/img02.svg")
              p.mb-0.text-center <b>Las materias primas</b>
          .col-lg-6.col-12.d-flex
            .fondo1.w-100.p-3
              .d-flex.justify-content-center
                img(style="width:139px" src="@/assets/curso/tema3/img03.svg")
              p.mb-0.text-center <b>Los productos en proceso</b>
        
        .row.justify-content-center.mb-lg-0.mb-5
          .col-lg-6.col-12.d-flex
            .fondo1.w-100.p-3.mb-lg-0.mb-5
              .d-flex.justify-content-center
                img(style="width:139px" src="@/assets/curso/tema3/img04.svg")
              p.mb-0.text-center <b>Los suministros que utiliza en sus operaciones.</b>
          .col-lg-6.col-12.d-flex
            .fondo1.w-100.p-3
              .d-flex.justify-content-center
                img(style="width:139px" src="@/assets/curso/tema3/img05.svg")
              p.mb-0.text-center <b>Los productos terminados</b>

      .col-lg-4.col-12
        div.p-3(style="background-color:#ced371")
          p.mb-5 Un inventario puede ser algo tan elemental como una botella de limpiador de vidrios empleada como parte del programa de mantenimiento de un edificio, o algo más complejo, como una combinación de materias primas y subensamblajes que forman parte de un proceso de manufactura.
          p.mb-0 Dada su importancia en los procesos productivos, en el sentido que componen los elementos indispensables con los que se ejecutan los procesos productivos de las empresas, es muy importante que estas tengan <b>su inventario controlado, vigilado y ordenado, ya que la finalidad es distribuir y abastecer de forma adecuada el material del que se dispone hacia los procesos que lo requieren</b>.


    p.mb-4 El adecuado control y administración de dichos elementos le significan a las organizaciones o áreas de producción tener ventajas competitivas frente a aspectos organizacionales en sus procesos, enfocados a:
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7.col-12
        ol.lista-ol--cuadro.mb-lg-0.mb-3
          li 
            .lista-ol--cuadro__vineta.lista1
              span 1
            p.mb-0 <b>Tener control</b> de la mercancía.
          li 
            .lista-ol--cuadro__vineta.lista1
              span 2
            p.mb-0 <b>Generar reportes</b> de la situación económica del negocio.
          li 
            .lista-ol--cuadro__vineta.lista1
              span 3
            p.mb-0 <b>Tener la posibilidad</b> de informar al cliente acerca de la disponibilidad de los productos, de modo que le permita ofrecer con certidumbre y crear un mayor contacto y por ende, mayor credibilidad con el cliente, lo que es parte de un buen servicio, que puede favorecer a la empresa en futuras negociaciones.
          li 
            .lista-ol--cuadro__vineta.lista1
              span 4
            p.mb-0 <b>Tener facilidad</b> para cumplir con los plazos de entrega del servicio que se presta, ya que no existen sorpresas, ni imprevistos.
          li 
            .lista-ol--cuadro__vineta.lista1
              span 5
            p.mb-0 <b>Tener garantía</b> de conocer en todo momento las cantidades de los artículos de los que se dispone.

      .col-lg-3.col-8
        img(src="@/assets/curso/tema3/img06.png")

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12(style="background-color:#efe0e4; border-radius:20px")
        .row.justify-content-center.px-0.py-4
          .col-lg-2.col-8.px-4.d-flex.justify-content-center        
            img.mb-lg-0.mb-3(style="width:134px !important" src="@/assets/curso/tema3/img07.svg")
          .col-lg-10.col-12.d-flex.align-items-center
            div
              p.mb-1 <b style="color:#6E2034">Para recordar…</b>
              p.mb-0 En consecuencia, se debe tener presente que el no tener un control adecuado del inventario respecto a lo que se tiene y lo que se necesita, puede llevar al paro de producción a la empresa, lo que desencadenaría graves problemas en el funcionamiento de la empresa, puesto que el nivel de inventario tiene una influencia directa en las utilidades del negocio, ya que al manejar las cantidades adecuadas de mercancía se ahorran costos de almacenaje y se reducen las posibilidades de pérdida y deterioro de los productos.

    p.mb-4 Por otro lado, esto permite tener menos dinero invertido en existencias de baja rotación y evitar los quiebres de <i>stock</i> que podrían generar pérdidas significativas en las ventas, así como baja productividad por retrasos causados por faltantes de insumos, entre otras consecuencias.
    p.mb-0 Por tanto, a modo de prevención de los problemas anteriores, <b>el sistema de control de inventarios es una herramienta indispensable para mantener un óptimo nivel de existencias y, consecuentemente, las finanzas de la empresa</b>.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Sistemas 

    p.mb-5 Como ya se mencionó, los sistemas de inventarios existen como mecanismos que ayudan en procesos de registro, control y seguimiento de los insumos con que cuentan las empresas para el desarrollo de sus procesos productivos, en este sentido, <b>un sistema de inventario se entiende como una herramienta de gestión que se emplea para registrar las cantidades de mercancías existentes en un negocio, así como para determinar el costo de los productos vendidos.</b>
    img(data-aos="fade-left" src="@/assets/curso/tema3/img08.png")

    p.mb-4 Mediante un sistema de control de inventarios es posible saber cuánta mercancía se tiene en determinado momento y qué productos están por acabarse (eventual quiebre de <i>stock</i>), así como determinar los niveles de rotación de los productos e identificar aquellos próximos a cumplir su fecha de caducidad.
    p.mb-5 Por lo anterior, es necesario que se elijan los sistemas y procedimientos que mejor se adaptan a las exigencias del inventario de cada empresa para gestionar máximos y mínimos, tener un control de entradas y salidas, además de crear estadísticas que permitan calcular las existencias en el futuro con el apoyo de análisis y registros de rendimiento; en atención a esto, se pueden encontrar los siguientes sistemas de control de inventarios:

    SlyderB.mb-0(:datos="datosSlyder")

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Aplicación 

    p.mb-5 Además de seleccionar el sistema de control de inventario que mejor se adapte a las necesidades, es importante reconocer y establecer las características respecto al tipo de inventario que maneja, esto implica prestar especial atención a aspectos como los que puede observar en el siguiente recurso:

    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.tarjeta--azul.p-4(titulo="Definir un método:")
        h4 Definir un método:
        p.mb-0 Elegir un método que permita organizar el inventario y sus existencias de una forma ágil, que atienda a las necesidades de la empresa y que sea escalable en caso de que la demanda de insumos o productos crezca.

      .tarjeta.tarjeta--azul.p-4(titulo="Hacer cronograma:")
        h4 Hacer cronograma:
        p.mb-2 Definir la frecuencia de revisión para los inventarios, aspecto que permite estar al tanto de las mercancías dañadas o que necesitan moverse para no generar pérdidas, como es el caso de los productos perecederos. A nivel general, existen dos métodos para este proceso:
        p.mb-0 1. Inventario perpetuo, que exige una revisión diaria.
        p 2. Inventario periódico, que define una frecuencia para hacer la revisión. Puede ser semanal, quincenal o mensual.
      
      .tarjeta.tarjeta--azul.p-4(titulo="Establecer topes:")
        h4 Establecer topes:
        p.mb-0 Definir los topes mínimos y máximos de existencia. Los datos históricos contribuyen a establecer estos números. Dicha información ayudará a prevenir la duración promedio de ciertos artículos y así, saber cuántos debe haber en existencia para cumplir con la demanda.

    p.mb-5 En atención a lo anterior, es importante tener en cuenta los siguientes pasos a la hora de implementar cualquier sistema de control de inventarios.

    AcordionA.mb-lg-0.mb-3(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-right")
        div(titulo="Organizar y complementar la información de los inventarios")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-3.col-8.d-flex.justify-content-center
              img.mb-lg-0.mb-3(style="width:140px" src="@/assets/curso/tema3/img14.svg")
            .col-lg-9.col-12
              p.mb-4 Este paso es sumamente importante, ya que permitirá tener una visión real de la situación de los inventarios y a partir de esto poder optimizarlos.
              p.mb-4 Es fundamental contar con un catálogo actualizado y depurado de todos los productos e insumos disponibles, también es importante que estén debidamente clasificados los grupos de artículos y relacionados con cada uno de sus proveedores. 
              p.mb-0 Todo esto le servirá para tener una buena base de información.
        div(titulo="Clasificar los productos por categorías")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-3.col-8.d-flex.justify-content-center
              img.mb-lg-0.mb-3(style="width:140px" src="@/assets/curso/tema3/img15.svg")
            .col-lg-9.col-12
              p.mb-4 Una vez se ha organizado toda la información del inventario actual, el siguiente paso es clasificar los productos por lo menos en las tres categorías principales para tener así un panorama más amplio de los productos existentes y cómo gestionar cada uno. Estas categorías principales son:
              p.mb-4 Productos de alta rotación: son aquellos se venden constantemente durante todo el año y debido a esto, se realiza pedido de compras por lo menos 6 veces al año para reponerlos o producirlos.
              p.mb-4 Productos de temporales: son los productos que no se venden constantemente, sino que su rotación puede aumentar o disminuir dependiendo de la temporada; los pedidos de compras se realizan mes a mes según se vaya necesitando y previendo el comportamiento de su demanda.
              p.mb-0 Productos especiales o sobre pedido: esta clasificación abarca aquellos productos considerados como ventas eventuales por alguna solicitud extraordinaria, en este caso solamente se solicitan únicamente cuando el cliente realiza su pedido, son productos de los cuales no es conveniente tener detenido en el inventario, ya que no se puede tener certeza de cuándo se venderán.
        div(titulo="Establecer días de disponibilidad de inventario")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-3.col-8.d-flex.justify-content-center
              img.mb-lg-0.mb-3(style="width:140px" src="@/assets/curso/tema3/img16.svg")
            .col-lg-9.col-12
              p.mb-4 Es importante determinar cuánto tiempo tarda el producto en estar disponible para la venta, para esto se debe tener en cuenta dos factores: el tiempo de entrega del proveedor que es el tiempo que demora una vez realizado el pedido del producto en llegar y estar disponible para el cliente y la frecuencia de la compra, que se refiere a cada cuántos días se debe hacer el pedido del producto al proveedor ambos datos se pueden obtener revisando el histórico tanto de las ventas como de las compras.
              p.mb-0 Esto permitirá determinar los días de inventario y a su vez determinar cuándo la existencia de un producto se encuentra en la máxima permitida para el inventario, o cuando el producto está a punto de quedar en falla; y cuando es momento de realizar una reorden del producto para abastecer de nuevo.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Sistema ABC',
        texto:
          'Este método permite organizar la distribución de las distintas mercancías dentro del almacén a partir de su relevancia para la empresa, de su valor y de su rotación.<br><br>Con este sistema se prioriza la adquisición y colocación de los productos no por su volumen o cantidad, sino por el aporte económico que suponen para la empresa.',
        imagen: require('@/assets/curso/tema3/img09.svg'),
      },
      {
        titulo: 'Sistema EOQ ',
        texto:
          'Se  llama EOQ por las siglas en inglés que en español significan cantidad económica de pedido; se enfoca en establecer la cantidad de pedido necesaria para la producción de modo de inventario en una cantidad importante, para esto es necesario que la demanda sea constante y conocida, el uso del inventario es frecuente y los pedidos llegan en cuanto el inventario se agota.<br><br>La idea es que siempre se mantenga el mismo nivel de inventario al hacer el pedido oportuno de la cantidad económica de pedido.',
        imagen: require('@/assets/curso/tema3/img10.png'),
      },
      {
        titulo: 'Sistema UEPS ',
        texto:
          'Bajo este sistema se prioriza la salida de los insumos más recientes o últimos en ingresar, de ahí su nombre UEPS , últimos en entrar, primeros en salir.<br><br>Es perfecto para empresas que no tienen un inventario muy grande, ni artículos con fecha de caducidad. Una de sus ventajas es que los costos de los productos que se vendan reflejarán un costo más reciente.',
        imagen: require('@/assets/curso/tema3/img11.png'),
      },
      {
        titulo: 'Sistema de conteo cíclico ',
        texto:
          'Este método se centra en hacer conteos regulares de una parte de las existencias y se puede completar con el ABC, ya que a cada clase se le asigna una frecuencia de conteo distinta. Mejora la exactitud del control del inventario, ya que puede encontrar inconsistencias a tiempo, sin tener que contarlo todo cada vez.',
        imagen: require('@/assets/curso/tema3/img12.svg'),
      },
      {
        titulo: 'Sistema PEPS ',
        texto:
          'También conocido como el método PEPS (primeras en entrar primeras en salir) se enfoca en identificar los primeros artículos que ingresan al inventario para que sean los primeros en venderse. Es ideal cuando existe mercancía perecedera, para evitar que se arruine al permitir que tengan una rotación constante.',
        imagen: require('@/assets/curso/tema3/img13.png'),
      },
    ],
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
